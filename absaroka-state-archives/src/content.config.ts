import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// All collections share one documented shape so editors can create linked records
// without modifying the site's templates or TypeScript logic.
const recordSchema = z.object({
  title: z.string(),
  summary: z.string(),
  dateLabel: z.string().default('Undated'),
  sortDate: z.string().optional(), // ISO YYYY-MM-DD; optional when precise date unknown
  location: z.string().optional(),
  office: z.string().optional(),
  affiliation: z.string().optional(),
  image: z.string().optional(),
  recordStatus: z.enum(['official','documented','attributed','unverified','proposed']).default('documented'),
  sourceTitle: z.string().optional(),
  sourceUrl: z.string().optional(),
  tags: z.array(z.string()).default([]),
  related: z.array(z.string()).default([]), // record IDs (not guesses about affiliation)
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
});

function records(base: string) {
  return defineCollection({
    loader: glob({ base, pattern: '**/*.md' }),
    schema: recordSchema,
  });
}

export const collections = {
  people: records('./src/content/people'),
  organizations: records('./src/content/organizations'),
  publications: records('./src/content/publications'),
  legislation: records('./src/content/legislation'),
  events: records('./src/content/events'),
};
