/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			animation: {
				text: 'text 4s linear infinite'
			},
			keyframes: {
				text: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': '0%'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': '100%'
					}
				}
			}
		}
	},
	plugins: []
};
