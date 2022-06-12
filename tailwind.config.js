/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: ['Work Sans', 'sans-serif'],
		},
		extend: {
			scale: {
				98: '0.98',
			},
		},
	},
	plugins: [],
};
