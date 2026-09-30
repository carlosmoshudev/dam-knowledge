// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
	site: isGithubPages
		? 'https://carlosmoshudev.github.io'
		: 'http://localhost:4123',

	base: isGithubPages 
		? '/dam-knowledge' 
		: '/',

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
