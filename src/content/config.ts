import { defineCollection, z } from 'astro:content';

// Define schema for articles (Assuming fields based on common blog structures)
const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    author: z.string().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
    tags: z.array(z.string()),
    draft: z.boolean().optional().default(false),
  })
});

// Define schema for projects (Assuming fields based on common portfolio structures)
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
    tags: z.array(z.string()),
    url: z.string().url().optional(), // Link to live project or repo
    status: z.enum(['Completed', 'In Progress', 'Archived']).optional().default('Completed'),
    draft: z.boolean().optional().default(false),
  }),
});

// Define schema for prompts
const promptsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    role: z.string(),
    tags: z.array(z.string()).optional(),
    pubDate: z.coerce.date().optional().default(() => new Date()),
    draft: z.boolean().optional().default(false), // Added draft status
  }),
});

export const collections = {
  'articles': articlesCollection,
  'projects': projectsCollection,
  'prompts': promptsCollection,
};