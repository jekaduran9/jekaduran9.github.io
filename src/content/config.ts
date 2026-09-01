import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    tools: z.array(z.string()),
    type: z.string(),
    image: z.string(),
    pubDate: z.date(),
    featured: z.boolean().default(false),
    lang: z.enum(['es', 'en']).default('es'),
    category: z.string().default('UX/UI'),
    aspectRatio: z.string().default('aspect-square'),
    heroVideo: z.string().optional(),
    heroImage: z.string().optional(),
    heroAspect: z.string().default('aspect-[4/3]'),
    status: z.string().optional(),
  }),
});

export const collections = { projects };
