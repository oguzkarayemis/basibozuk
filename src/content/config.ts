import { defineCollection, z } from 'astro:content';

const booksCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    author: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().or(z.string()).optional(),
    manset: z.boolean().optional(),
    price: z.number().or(z.string()),
    coverImage: image().optional(),
    epubLink: z.string().url(),
    pdfLink: z.string().url(),
    zipLink: z.string().url(),
    isbnEpub: z.string().optional(),
    isbnPdf: z.string().optional(),
  }),
});

export const collections = {
  'books': booksCollection,
};
