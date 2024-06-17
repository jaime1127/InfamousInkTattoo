import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		sveltePreprocess({
			postcss: true
		}),
		vitePreprocess()
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
