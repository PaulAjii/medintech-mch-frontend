import type { Config } from 'tailwindcss';

export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#D80101',
					100: '#FBE6E6',
					200: '#F7CCCC',
					300: '#EF9999',
					400: '#E86767',
					500: '#E03E3E',
					600: '#AD0101',
					700: '#820101',
					900: '#560000',
					1000: '#2B0000',
				},
				neutral: {
					DEFAULT: '#FFFFFF',
					100: '#F6F6F6',
					200: '#E7E7E7',
					300: '#D7D7D7',
					400: '#9B9B9B',
					500: '#717171',
					600: '#444444',
					700: '#1B1B1B',
				},
			},
			fontFamily: {
				manrope: ['Manrope', 'serif'],
			},
			fontSize: {
				h1: ['96', { lineHeight: '120px' }],
				h2: ['64px', { lineHeight: '80px' }],
				h3: ['48px', { lineHeight: '60px' }],
				h4: ['40px', { lineHeight: '48px' }],
				h5: ['34px', { lineHeight: '36px' }],
				h6: ['24px', { lineHeight: '28px' }],
			},
			fontWeight: {
				regular: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
				xbold: '800',
			},
		},
	},
	plugins: [],
} satisfies Config;
