/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'custom-black': '#16131B',
				'custom-black-2': '#28292B',
				'custom-gray': '#B1B7BD',
				'gray-transparent': 'rgba(255, 255, 255, 0.30)',
			},
			fontFamily: {
				space: ['Space Grotesk'],
			},
			background: {
				'modal-bg': 'rgba(255, 255, 255, 0.30)',
			},
		},
	},
	plugins: [],
};
