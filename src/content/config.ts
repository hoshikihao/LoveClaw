import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  summary: z.string().optional(),
});

const posts = defineCollection({
  type: 'content',
  schema: baseSchema,
});

// Drafts are stored but never routed/published.
const drafts = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    publishHint: z.string().optional(),
  }),
});

export const collections = { posts, drafts };
