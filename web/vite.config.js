import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['..']
		},
		port: 5500,
		strictPort: false,
		host: true
	},
	preview: {
		port: 4399,
		strictPort: false
	}
};

export default config;
