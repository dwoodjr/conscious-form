import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    thumbnail: z.string(),
    featured: z.boolean().default(false),
    mediaTypes: z.array(z.enum([
      'sound', '3d', 'video', 'interactive', 
      'physical-computing', 'ar-vr', 'installation'
    ])).optional(),
    status: z.enum(['complete', 'in-progress', 'archived']).default('complete'),
  }),
});

const collaborations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    thumbnail: z.string(),
    partner: z.string(), // "Ars Electronica", "CCD", etc.
    role: z.string(), // "Art Direction", "Sound Design", etc.
    featured: z.boolean().default(false),
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
    // New media fields
    audioPreview: z.string().optional(),  // Path to 2-3 sec audio clip
    videoPreview: z.string().optional(),  // Path to short video clip
    relatedTo: z.array(z.string()).optional(), // Related project IDs
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