/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				'84': '21rem',
				'100': '25rem',
				'128': '32rem',
				'144': '36rem',
			},
			aspectRatio: {
				'portrait': '2 / 3',
			}
		},
		fontFamily: {
			heading: ['Felix', 'serif'],
			body: ['Montserrat', 'sans-serif'],
			button: ['Montserrat', 'sans-serif']
		}
	},
	plugins: [],
}
