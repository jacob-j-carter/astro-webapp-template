/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			heading: ['"Felix"', 'serif'],
			body: ['"Montserrat"', 'sans-serif'],
			button: ['"Montserrat"', 'sans-serif']
		}
	},
	plugins: [],
}
