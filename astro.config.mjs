// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';
const site = isGithubPages
	? 'https://carlosmoshudev.github.io'
	: (process.env.ASTRO_SITE_URL ?? 'http://localhost:4321');

export default defineConfig({
	site,

	base: isGithubPages
		? '/dam-knowledge'
		: '/',

	server: {
		host: true,
		port: 4321,
		allowedHosts: ['localhost', '127.0.0.1', 'cali-home'],
	},

	integrations: [
		starlight({
			title: 'DAM Knowledge',

			sidebar: [
				{
					label: 'Programación',
					items: [{ autogenerate: { directory: 'programacion' } }],
				},
				{
					label: 'Bases de Datos',
					items: [{ autogenerate: { directory: 'bases-de-datos' } }],
				},
				{
					label: 'Entorno de Desarrollo',
					items: [{ autogenerate: { directory: 'entornos' } }],
				},
				{
					label: 'Sistemas Informáticos',
					items: [{ autogenerate: { directory: 'sistemas' } }],
				},
				{
					label: 'Competencias Profesionales',
					items: [{ autogenerate: { directory: 'competencias' } }],
				},
				{
					label: 'Sostenibilidad',
					items: [{ autogenerate: { directory: 'sostenibilidad' } }],
				},
				{
					label: 'Lenguajes de Marcas',
					items: [{ autogenerate: { directory: 'lenguajes' } }],
				},
				{
					label: 'Inglés',
					items: [{ autogenerate: { directory: 'ingles' } }],
				},
			],
		}),
	],
});
