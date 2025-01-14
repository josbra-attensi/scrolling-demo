import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			// Should kick in when people use accessibility settings to zoom in a lot as browser detects small window
			// Should be used sparingly and only for UI that bloats beyond measure, not for game content or required reading
			screens: {
				'a11y-zoom-level-1': '1px',
				'a11y-zoom-level-2': '200px',
				xs: '320px'
			}
		}
	},

	plugins: []
} satisfies Config;
