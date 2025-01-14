import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				'a11y-zoom-level-1': '320px',
				'a11y-zoom-level-2': '270px'
			}
		}
	},

	plugins: []
} satisfies Config;
