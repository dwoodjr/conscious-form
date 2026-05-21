import { defineCollection, z } from 'astro:content';

// Reusable video schema (single video entry)
const videoSchema = z.object({
  type: z.enum(['youtube', 'vimeo']),
  id: z.string(),
  hash: z.string().optional(),   // Vimeo unlisted video hash
  title: z.string().optional(),
  start: z.number().optional(),  // seconds
  end: z.number().optional(),    // seconds
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    thumbnail: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
    videos: z.array(videoSchema).optional(),      // Multiple videos
    images: z.array(z.string()).optional(),        // Image gallery paths
    mediaTypes: z.array(z.enum([
      'sound', '3d', 'video', 'interactive',
      'physical-computing', 'ar-vr', 'installation'
    ])).optional(),
    status: z.enum(['complete', 'in-progress', 'archived']).default('complete'),
    dissertation: z.boolean().default(false),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    audioSamples: z.array(z.object({
      title: z.string().optional(),
      src: z.string(),
    })).optional(),
    imageCredit: z.object({
      name: z.string(),
      url: z.string().optional(),
    }).optional(),
  }),
});

const collaborations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    thumbnail: z.string().optional(),
    partner: z.string(),
    role: z.string(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
    videos: z.array(videoSchema).optional(),
    images: z.array(z.string()).optional(),
    document: z.string().optional(),
    thumbnailCredit: z.object({
      name: z.string(),
      url: z.string().optional(),
    }).optional(),
    imageCredit: z.object({
      name: z.string(),
      url: z.string().optional(),
    }).optional(),
  }),
});

const sketchbook = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    thumbnail: z.string().optional(),
    type: z.enum(['experiment', 'coursework', 'sketch', 'demo', 'animation']),
    audioPreview: z.string().optional(),
    videoPreview: z.string().optional(),
    videos: z.array(videoSchema).optional(),
    images: z.array(z.string()).optional(),
    relatedTo: z.array(z.string()).optional(),
    relatedProjects: z.array(z.string()).optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    thumbnail: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
  collaborations,
  sketchbook,
  blog
};
