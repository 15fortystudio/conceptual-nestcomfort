// src/pages/rss.xml.en.js

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_DATA } from '../config/consts.ts';

const { TITLE, DESCRIPTION } = SITE_DATA.en; // Usar los datos en inglés

export async function GET(context) {
	// Obtener posts y proyectos
	const posts = await getCollection('posts');
	const projects = await getCollection('projects');

	// Filtrar posts y proyectos en inglés
	const englishPosts = posts.filter((p) => p.data.lang === 'en');
	const englishProjects = projects.filter((p) => p.data.lang === 'en');

	// Combinar posts y proyectos en un solo arreglo de items
	const items = [
		...englishPosts.map((post) => ({
			title: post.data.title,
			pubDate: new Date(post.data.date),
			link: `/en/posts/${post.slug}/`,
		})),
		...englishProjects.map((project) => ({
			title: project.data.title,
			pubDate: new Date(project.data.date),
			link: `/en/projects/${project.slug}/`,
		})),
	];

	return rss({
		title: TITLE,
		description: DESCRIPTION,
		site: context.site,
		items: items,
	});
}
