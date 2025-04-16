/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

export default {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./app/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				jet: {
					DEFAULT: '#353535',
					100: '#0b0b0b',
					200: '#151515',
					300: '#202020',
					400: '#2b2b2b',
					500: '#353535',
					600: '#5e5e5e',
					700: '#868686',
					800: '#aeaeae',
					900: '#d7d7d7'
				},
				caribbean: {
					DEFAULT: '#3c6e71',
					100: '#0c1617',
					200: '#182c2d',
					300: '#244344',
					400: '#30595b',
					500: '#3c6e71',
					600: '#539a9e',
					700: '#7bb6b9',
					800: '#a7ced1',
					900: '#d3e7e8'
				},
				white: {
					DEFAULT: '#ffffff',
					100: '#333333',
					200: '#666666',
					300: '#999999',
					400: '#cccccc',
					500: '#ffffff',
					600: '#ffffff',
					700: '#ffffff',
					800: '#ffffff',
					900: '#ffffff'
				},
				platinum: {
					DEFAULT: '#d9d9d9',
					100: '#2b2b2b',
					200: '#575757',
					300: '#828282',
					400: '#adadad',
					500: '#d9d9d9',
					600: '#e0e0e0',
					700: '#e8e8e8',
					800: '#f0f0f0',
					900: '#f7f7f7'
				},
				indigo: {
					DEFAULT: '#284b63',
					100: '#080f14',
					200: '#101e27',
					300: '#182d3b',
					400: '#203c4e',
					500: '#284b63',
					600: '#3e7397',
					700: '#6099be',
					800: '#95bbd4',
					900: '#cadde9'
				},
				primary: {
					DEFAULT: '#284b63',
					foreground: '#ffffff'
				},
				secondary: {
					DEFAULT: '#3c6e71',
					foreground: '#ffffff'
				},
				destructive: {
					DEFAULT: '#D64045',
					foreground: '#ffffff'
				},
				success: {
					DEFAULT: '#287D3C',
					foreground: '#ffffff'
				},
				warning: {
					DEFAULT: '#F5A623',
					foreground: '#1A1A1A'
				},
				info: {
					DEFAULT: '#3e7397',
					foreground: '#ffffff'
				},
				muted: {
					DEFAULT: '#d9d9d9',
					foreground: '#353535'
				},
				accent: {
					DEFAULT: '#3c6e71',
					foreground: '#ffffff'
				},
				popover: {
					DEFAULT: '#ffffff',
					foreground: '#353535'
				},
				card: {
					DEFAULT: '#ffffff',
					foreground: '#353535'
				},
				chart: {
					'1': '#284b63',
					'2': '#3c6e71',
					'3': '#d9d9d9',
					'4': '#6099be',
					'5': '#a7ced1'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [
					'var(--font-sans)',
					...fontFamily.sans
				],
				heading: [
					'Playfair Display',
					'serif'
				],
				body: [
					'Source Sans Pro',
					'sans-serif'
				]
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
