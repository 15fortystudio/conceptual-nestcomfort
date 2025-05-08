import { defineCollection, z } from 'astro:content';

const portfolioCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		date: z.string(),
		image: z.array(z.string()),
		location: z.string(),
		team: z.array(z.string()),
		categories: z.array(z.string()),
		tags: z.array(z.string()).optional(),
		body: z.string(),
	}),
});

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		date: z.string(),
		image: z.string(),
		author: z.string(),
		categories: z.array(z.string()),
		tags: z.array(z.string()).optional(),
		body: z.string(),
	}),
});

export const collections = {
	posts: blogCollection,
	projects: portfolioCollection,
};
