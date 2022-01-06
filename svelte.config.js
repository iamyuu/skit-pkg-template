import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// https://github.com/sveltejs/svelte-preprocess
	preprocess: preprocess(),

	kit: {
		package: {
			dir: 'dist',
			files: (filepath) => !filepath.endsWith('.stories.svelte')
		}
	}
};

export default config;
