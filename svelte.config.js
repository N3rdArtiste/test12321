import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			resolve: {
				alias: {
					base: path.resolve('./src'),
					_config: path.resolve('./src/_config'),
					constants: path.resolve('./src/constants'),
					enums: path.resolve('./src/enums'),
					types: path.resolve('./src/types'),
					components: path.resolve('./src/components'),
					helpers: path.resolve('./src/helpers'),
					modules: path.resolve('./src/modules'),
					services: path.resolve('./src/services'),
					stores: path.resolve('./src/stores'),
					utilities: path.resolve('./src/utilities')
				}
			}
		}
	}
};

export default config;
