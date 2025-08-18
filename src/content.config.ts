import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

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

const blog = defineCollection({
  loader: glob({ base: 'src/content/blog', pattern: '**/*.md' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  cv,
  blog,
};
