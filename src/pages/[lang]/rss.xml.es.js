// src/pages/rss.xml.es.js

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_DATA } from '../config/consts.ts';

const { TITLE, DESCRIPTION } = SITE_DATA.es;

export async function GET(context) {
	// Obtener posts y proyectos
	const posts = await getCollection('posts');
	const projects = await getCollection('projects');

	// Filtrar posts y proyectos en español
	const spanishPosts = posts.filter((p) => p.data.lang === 'es');
	const spanishProjects = projects.filter((p) => p.data.lang === 'es');

	// Combinar posts y proyectos en un solo arreglo de items
	const items = [
		...spanishPosts.map((post) => ({
			title: post.data.title,
			pubDate: new Date(post.data.date),
			link: `/posts/${post.slug}/`,
		})),
		...spanishProjects.map((project) => ({
			title: project.data.title,
			pubDate: new Date(project.data.date),
			link: `/projects/${project.slug}/`,
		})),
	];

	return rss({
		title: TITLE,
		description: DESCRIPTION,
		site: context.site,
		items: items,
	});
}
