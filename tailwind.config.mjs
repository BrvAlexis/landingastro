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
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				},
				info: {
					DEFAULT: 'hsl(var(--info))',
					foreground: 'hsl(var(--info-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [
					...fontFamily.sans
				],
				heading: [
					'var(--font-heading)',
					'serif'
				],
				body: [
					'var(--font-body)',
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
