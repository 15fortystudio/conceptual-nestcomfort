//eslint.config.js

import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		plugins: { js, eslintPluginPrettier },
		extends: ['js/recommended'],
		rules: {
			semi: ['error'],
			quotes: ['error', 'single'],
		},
	},
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		languageOptions: { globals: globals.browser },
	},
	tseslint.configs.recommended,
	...eslintPluginAstro.configs.recommended,
]);
