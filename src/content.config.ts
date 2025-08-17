import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const cv = defineCollection({
  loader: file('src/data/cv.json'),
  schema: z.object({
    company: z.string(),
    position: z.string(),
    start: z.string().transform((str: string) => new Date(str)),
    end: z.string().optional().transform((str: string) => (str ? new Date(str) : undefined)),
  }),
});

export const collections = {
  cv,
};
