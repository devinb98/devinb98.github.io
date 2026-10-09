import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects — each has a media reference and a spec panel of real data.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    summary: z.string(),
    // the identity thread: what this project shows about me
    role: z.enum(['learner', 'builder', 'ai']),
    year: z.number(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    media: z.string().optional(), // path under /public, e.g. /media/record-player/loop.gif
    still: z.string().optional(), // static fallback shown to prefers-reduced-motion users
    diagram: z.string().optional(), // name of an inlined SVG in src/diagrams (theme-aware)
    mediaAlt: z.string().optional(),
    // mono spec panel — label/value pairs of genuine data
    specs: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
  }),
});

// Blog — drop a Markdown file in src/content/blog and it appears.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
