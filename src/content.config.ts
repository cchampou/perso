import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const cv = defineCollection({
  loader: file('src/data/cv.json'),
  schema: ({image}) => z.object({
    company: z.string(),
    position: z.string(),
    location: z.string(),
    start: z.string().transform((str: string) => new Date(str)),
    end: z.string().optional().transform((str: string) => (str ? new Date(str) : undefined)),
    description: z.string().optional(),
    keypoints: z.array(z.string()).optional(),
    logo: image().optional(),
  }),
});

export const collections = {
  cv,
};
