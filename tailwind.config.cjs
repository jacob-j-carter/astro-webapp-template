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
		},
		borderWidth: {
			'1': '1px',
			'3': '3px'
		},
		fontSize: {
			'8': ['calc(8rem / 16)', '140%'],
			'10': ['calc(10rem / 16)', '140%'],
			'12': ['calc(12rem / 16)', '140%'],
			'14': ['calc(14rem / 16)', '140%'],
			'16': ['calc(16rem / 16)', '140%'],
			'18': ['calc(18rem / 16)', '140%'],
			'20': ['calc(20rem / 16)', '140%'],
			'24': ['calc(24rem / 16)', '125%'],
			'28': ['calc(28rem / 16)', '125%'],
			'32': ['calc(32rem / 16)', '110%'],
			'36': ['calc(36rem / 16)', '110%'],
			'40': ['calc(40rem / 16)', '110%'],
			'44': ['calc(44rem / 16)', '110%'],
			'48': ['calc(48rem / 16)', '110%'],
			'56': ['calc(56rem / 16)', '110%'],
			'60': ['calc(60rem / 16)', '110%'],
			'64': ['calc(64rem / 16)', '110%'],
			'72': ['calc(72rem / 16)', '110%'],
			'80': ['calc(80rem / 16)', '110%'],
			'84': ['calc(84rem / 16)', '110%'],
			'96': ['calc(96rem / 16)', '110%'],
			'100': ['calc(100rem / 16)', '110%'],
			'116': ['calc(116rem / 16)', '110%'],
			'128': ['calc(128rem / 16)', '110%'],
			'144': ['calc(144rem / 16)', '110%'],
			'160': ['calc(160rem / 16)', '110%']
			
		}
	},
	plugins: [],
}
