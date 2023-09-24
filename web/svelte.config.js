import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		csrf: {
			checkOrigin: false
		},
		alias: {
			'$app/stores': './node_modules/@sveltejs/kit/src/runtime/app/stores.js',
			'$database/*': './src/lib/database/*',
			'$animation/*': './src/lib/animation/*',
			'$component/*': './src/lib/components/*',
			packageMain: '../package.json',
			packageWeb: './package.json'
		}
	}
};

export default config;
