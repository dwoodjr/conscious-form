/**
 * Image optimization script for public/images/
 *
 * Strategy:
 *   JPEG/JPG        → resize to max 1920px + quality 82, overwrite in-place
 *   PNG (no alpha)  → resize to max 1920px + convert to JPEG, update all src refs
 *   PNG (has alpha) → resize to max 1920px + compress PNG lossless, overwrite in-place
 *   < 150 KB        → skip (already web-ready)
 *
 * A content-hash cache (.image-cache.json) is committed to the repo so that
 * Cloudflare Pages CI doesn't re-process already-optimised images on every deploy.
 */

import sharp from 'sharp';
import {
  readFileSync, writeFileSync, statSync,
  unlinkSync, renameSync, existsSync,
} from 'node:fs';
import { readdir } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { createHash } from 'node:crypto';

const IMAGES_DIR   = 'public/images';
const CACHE_FILE   = '.image-cache.json';
const MAX_DIM      = 1920;
const JPEG_QUALITY = 82;
const SKIP_BYTES   = 150 * 1024; // 150 KB

// ── Cache ────────────────────────────────────────────────────────────────────
let cache = {};
if (existsSync(CACHE_FILE)) {
  try { cache = JSON.parse(readFileSync(CACHE_FILE, 'utf8')); } catch {}
}

function hashFile(p) {
  return createHash('sha256').update(readFileSync(p)).digest('hex').slice(0, 16);
}

// ── File finders ──────────────────────────────────────────────────────────────
async function findImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const full = join(dir, e.name).replace(/\\/g, '/');
    if (e.isDirectory()) out.push(...await findImages(full));
    else if (/\.(jpe?g|png)$/i.test(e.name)) out.push(full);
  }
  return out;
}

async function findSourceFiles() {
  async function scan(dir, exts) {
    const entries = await readdir(dir, { withFileTypes: true, recursive: true });
    return entries
      .filter(e => !e.isDirectory() && exts.some(x => e.name.endsWith(x)))
      .map(e => join(e.path ?? e.parentPath ?? dir, e.name).replace(/\\/g, '/'));
  }
  return [
    ...await scan('src/content',    ['.md']),
    ...await scan('src/pages',      ['.astro']),
    ...await scan('src/components', ['.astro']),
  ];
}

// ── Main ──────────────────────────────────────────────────────────────────────
const images = await findImages(IMAGES_DIR);
const converted = []; // { fromUrl, toUrl }  for PNG→JPG path rewrites
let totalSaved = 0, nProcessed = 0, nSkipped = 0;

console.log(`\nOptimizing ${images.length} images in ${IMAGES_DIR}...\n`);

for (const imgPath of images) {
  const stat = statSync(imgPath);

  if (stat.size < SKIP_BYTES) { nSkipped++; continue; }

  const hash = hashFile(imgPath);
  if (cache[imgPath] === hash) { nSkipped++; continue; }

  const sizeMB = (stat.size / 1024 / 1024).toFixed(2);
  const ext    = extname(imgPath).toLowerCase();

  try {
    const image    = sharp(imgPath);
    const meta     = await image.metadata();
    let   pipeline = image;

    if ((meta.width ?? 0) > MAX_DIM || (meta.height ?? 0) > MAX_DIM) {
      pipeline = pipeline.resize(MAX_DIM, MAX_DIM, { fit: 'inside', withoutEnlargement: true });
    }

    if (ext === '.png') {
      if (meta.hasAlpha) {
        // ── PNG with alpha: stay PNG ──────────────────────────────────────
        const tmp = imgPath + '.tmp';
        await pipeline.png({ compressionLevel: 9 }).toFile(tmp);
        const newSize = statSync(tmp).size;
        if (newSize < stat.size) {
          renameSync(tmp, imgPath);
          totalSaved += stat.size - newSize;
          console.log(`PNG(α) ${imgPath}\n       ${sizeMB}MB → ${(newSize/1024/1024).toFixed(2)}MB`);
        } else {
          unlinkSync(tmp);
          console.log(`PNG(α) ${imgPath}\n       ${sizeMB}MB — already optimal, kept`);
        }
      } else {
        // ── PNG without alpha: convert to JPEG ────────────────────────────
        const jpgPath = imgPath.replace(/\.png$/i, '.jpg');
        await pipeline.jpeg({ quality: JPEG_QUALITY, progressive: true }).toFile(jpgPath);
        const newSize = statSync(jpgPath).size;
        unlinkSync(imgPath);

        const fromUrl = '/' + imgPath.replace('public/', '');
        const toUrl   = '/' + jpgPath.replace('public/', '');
        converted.push({ fromUrl, toUrl });

        totalSaved += stat.size - newSize;
        console.log(`PNG→JPG ${imgPath}\n        ${sizeMB}MB → ${(newSize/1024/1024).toFixed(2)}MB  (${fromUrl} → ${toUrl})`);

        cache[jpgPath] = hashFile(jpgPath);
        delete cache[imgPath];
        nProcessed++;
        continue;
      }
    } else {
      // ── JPEG ──────────────────────────────────────────────────────────────
      const tmp = imgPath + '.tmp';
      await pipeline.jpeg({ quality: JPEG_QUALITY, progressive: true }).toFile(tmp);
      const newSize = statSync(tmp).size;
      if (newSize < stat.size) {
        renameSync(tmp, imgPath);
        totalSaved += stat.size - newSize;
        console.log(`JPEG   ${imgPath}\n       ${sizeMB}MB → ${(newSize/1024/1024).toFixed(2)}MB`);
      } else {
        unlinkSync(tmp);
        console.log(`JPEG   ${imgPath}\n       ${sizeMB}MB — already optimal, kept`);
      }
    }

    cache[imgPath] = hashFile(imgPath);
    nProcessed++;

  } catch (err) {
    console.error(`ERROR  ${imgPath}: ${err.message}`);
  }
}

// ── Rewrite PNG→JPG paths in source files ─────────────────────────────────────
if (converted.length > 0) {
  const srcFiles = await findSourceFiles();
  let nUpdated = 0;
  console.log(`\nRewriting ${converted.length} PNG→JPG path(s) across source files...`);

  for (const srcFile of srcFiles) {
    let content = readFileSync(srcFile, 'utf8');
    let changed = false;
    for (const { fromUrl, toUrl } of converted) {
      if (content.includes(fromUrl)) {
        content = content.replaceAll(fromUrl, toUrl);
        changed = true;
      }
    }
    if (changed) {
      writeFileSync(srcFile, content);
      nUpdated++;
      console.log(`  Updated: ${srcFile}`);
    }
  }
  console.log(`  ${nUpdated} file(s) updated.`);
}

// ── Save cache ────────────────────────────────────────────────────────────────
writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));

const savedMB = (totalSaved / 1024 / 1024).toFixed(1);
console.log(`\nDone.  Processed: ${nProcessed}  |  Skipped: ${nSkipped}  |  Saved: ${savedMB} MB\n`);
