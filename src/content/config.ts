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
    // For your specific work:
    mediaTypes: z.array(z.enum([
      'sound', '3d', 'video', 'interactive', 
      'physical-computing', 'ar-vr', 'installation'
    ])).optional(),
    status: z.enum(['complete', 'in-progress', 'archived']).default('complete'),
  }),
});

export const collections = { projects };