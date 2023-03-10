module.exports = {
	root: true,
	extends: ['./../.eslintrc'],
	plugins: ['svelte3'],
	ignorePatterns: ['*.cjs'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
			rules: {
				'@typescript-eslint/ban-ts-ignore': 1,
				'@typescript-eslint/no-unused-vars': 1,
				'@typescript-eslint/ban-ts-comment': 1,
				'@typescript-eslint/no-explicit-any': 1
			}
		}
	],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
