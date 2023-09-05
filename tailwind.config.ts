import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			xl: '1200px',
			smOnly: { max: '767.98px' },
			mdOnly: { min: '768px', max: '1199.98px' },
			notXl: { max: '1199.98px' },
		},
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '1.25rem',
					sm: '1.25rem',
					md: '2rem',
					xl: '44px',
				},
			},
			colors: {
				primary: '#1A1A1F',
				secondary: '#4B4B4B',
				label: '#333333',
				hover: '#FF5800',
				accent: '#FF5800',
				error: '#F43F5E',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
export default config;
