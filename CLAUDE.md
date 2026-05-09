# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # Start dev server at localhost:4321
pnpm build     # Build production site to ./dist/
pnpm preview   # Preview built site locally
```

No test suite is configured. Linting uses Stylelint (`stylelint-config-recommended` with PostCSS syntax) — run via `pnpm stylelint "src/**/*.css"` if needed.

## Architecture

**Stack:** Astro 5 + TypeScript (strict) + Tailwind CSS v4 + pnpm

All content is static — no backend API. Pages are file-based routes under `src/pages/`. Dynamic routes (`[slug].astro`) use `getStaticPaths()` pulling from Astro Content Collections.

### Content Collections (`src/content/`)

The CMS layer. Markdown files define all portfolio content; schemas with Zod validation live in `src/content/config.ts`. Collections:

- **projects** — research-creation works; supports `dissertation` boolean, `featured` flag, `status` (complete/in-progress/archived), and `mediaTypes` (video/image arrays)
- **collaborations** — same shape as projects, adds `partner` and `role` fields
- **sketchbook** — adds `type` (experiment/coursework/sketch/demo/animation), `audioPreview`, `videoPreview`
- **blog** — standard blog posts with `draft` flag; currently empty/placeholder

Media assets (videos, images) live in `/public/video/` and `/public/images/`.

### Key Pages & Components

- `src/pages/index.astro` — Homepage with interactive name tone synthesis via Web Audio API. Each letter maps to jazz-scale frequencies (D–C across 6 octaves); triangle-wave oscillator with ADSR envelope.
- `src/pages/sketchbook/index.astro` — Canvas-based organic dot field with color-coded tags and connection lines drawn at runtime.
- `src/layouts/BaseLayout.astro` — Single master layout; wraps all pages, imports `global.css` and `Header.astro`.
- `src/components/ImageGallery.astro` — Masonry gallery (1→2→3 columns) with lightbox and keyboard nav (arrows, Esc).
- `src/components/VideoEmbed.astro` — YouTube/Vimeo iframe wrapper supporting `start`/`end` time trimming.

### Design Tokens

Defined in `src/styles/global.css`:
- Background: `neutral-950`, Text: `neutral-100`
- Accent colors: red `#E63946`, yellow `#F4D03F`, blue `#3B82F6`
- Display font: `Linefont` (custom); Body font: `Inter` (Google Fonts)

### Tailwind v4 + Stylelint Note

Tailwind v4 uses PostCSS syntax (`@theme`, `@apply`, `@plugin`). The `.stylelintrc.cjs` ignores these at-rules to prevent false lint errors — do not remove those ignore rules.
