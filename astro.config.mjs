// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://truongnat.github.io',
	integrations: [mdx(), sitemap()],
	build: {
		// Set base path to '/' to avoid the `/blog` folder in the deployed URL
		base: '/',
	  },
});
