import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    section: z.enum(['markets', 'macro', 'earnings-watch', 'strategy-notes']),
    // Not in the original PRD frontmatter table — added so the homepage can tell
    // short wire dispatches ("The Brief") apart from long-form essays. Defaults
    // to "essay" so existing-style frontmatter without the field still works.
    format: z.enum(['brief', 'essay']).default('essay'),
    // Stored for future-proofing per the PRD — not enforced anywhere in this
    // build. A "Premium" tag renders on the article but content stays open.
    tier: z.enum(['free', 'premium']).default('free'),
    author: z.string(),
    dateline: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { articles };
