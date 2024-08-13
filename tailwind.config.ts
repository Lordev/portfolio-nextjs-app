import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontSize: {
				small: ['1.2rem', '1.4rem'],
				normal: ['1.4rem', '1.6rem'],
				lg: ['1.8rem', '2.5rem'],
				xl: ['2.1rem', '2.7rem'],
				'2xl': ['2.5rem', '3.1rem'],
				'3xl': ['3.1rem', '3.5rem'],
				'4xl': ['3.4rem', '3.9rem'],
				'5xl': ['3.8rem', '4.2rem'],
				'6xl': ['4.2rem', '4.6rem'],
				'7xl': ['4.6rem', '5rem'],
				'8xl': ['5rem', '5.4rem'],
				'9xl': ['6.4rem', '7.7rem'],
				'10xl': ['7rem', '7.8rem'],
			},

			fontFamily: {
				inter: ['var(--font-inter)', 'sans-serif'],
				jetBrains: ['var(--font-jetBrains)', 'monospace'],
			},
			backgroundImage: {
				'radial-accent':
					'linear-gradient(-45deg, var(--primary), var(--accent), var(--accent-secondary), var(--secondary))',
				'radial-gradient-accent':
					'radial-gradient(circle, var(--accent) 0%, rgba(0,0,0,0) 60%)',
			},
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				accent: 'var(--accent)',
				muted: 'var(--muted)',
				'accent-secondary': 'var(--accent-secondary)',
			},
			dropShadow: {
				doubler: '-1px 1px 0px var(--accent)',
				'doubler-inverse': '-1px 1px 0px var(--accent)',
			},

			keyframes: {
				typewriter: {
					'0%,50%': {
						opacity: '0',
					},
					'100%': {
						opacity: '0.6',
					},
				},
				movingBlob: {
					'0%': {
						borderRadius: '30% 70% 33% 67% / 53% 51% 49% 47%',
					},
					'20%': {
						borderRadius: '40% 60% 30% 70% / 50% 55% 45% 50%',
					},
					'40%': {
						borderRadius: '35% 65% 45% 55% / 60% 50% 40% 50%',
					},
					'60%': {
						borderRadius: '25% 75% 50% 50% / 45% 60% 55% 40%',
					},
					'80%': {
						borderRadius: '20% 80% 40% 60% / 55% 45% 35% 65%',
					},
					'100%': {
						borderRadius: '30% 70% 33% 67% / 53% 51% 49% 47%',
					},
				},

				gradient: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
				wobble: {
					'0%': {
						transform: 'translateX(0)',
					},
					'20%': {
						transform: ' translateX(-5px) rotate(-2deg)',
					},

					'40%': {
						transform: ' translateX(5px) rotate(2deg)',
					},

					'60%': {
						transform: 'translateX(-5px) rotate(-2deg)',
					},

					'80%': {
						transform: 'translateX(5px) rotate(2deg)',
					},

					'100%': {
						transform: 'translateX(0)',
					},
				},
				Spin: {
					'0%': {
						transform: 'rotate(0deg) scale(1) ',
						opacity: '.1',
					},
					'25%': {
						transform: 'rotate(90deg) scale(1.05)',
						opacity: '.2',
					},
					'50%': {
						transform: 'rotate(180deg) scale(1.15)',
						opacity: '.3',
					},
					'75%': {
						transform: 'rotate(270deg) scale(1.05)',
						opacity: '.2',
					},
					'100%': {
						transform: 'rotate(360deg) scale(1)',
						opacity: '0.1',
					},
				},
				float: {
					'0%, 100%': { transform: 'translateY(0) rotate(0)' },
					'25%': { transform: 'translateY(-4px) rotate(2deg)' },
					'50%': { transform: 'translateY(-2px) rotate(4deg)' },
					'75%': { transform: 'translateY(-4px) rotate(2deg)' },
				},
				floatSlow: {
					'0%, 100%': { transform: 'translateY(0) rotate(0)' },
					'25%': { transform: 'translateY(-2px) rotate(.5deg)' },
					'50%': { transform: 'translateY(-1px) rotate(-1deg)' },
					'75%': { transform: 'translateY(-2px) rotate(.5deg)' },
				},
				spinTilt: {
					from: {
						transform: 'rotateY(0deg)',
					},
					to: {
						transform: 'rotateY(360deg)',
					},
				},
			},

			backgroundSize: {
				'400%': '400% 400%',
		},

			animation: {
				gradient: 'gradient 15s ease infinite',
				bouncy: 'wobble 0.5s ease-in-out;',
				spinSlow: 'Spin 120s linear infinite',
				spinFast: 'Spin 1.5s linear infinite',
				spinFastReverse: 'Spin 1.5s linear infinite reverse',
				float: 'float 4s ease-in-out infinite',
				floatSlow: 'floatSlow 10s ease-in-out infinite',
				typeWriter: 'typewriter 1s steps(40) infinite',
				spinTilt: 'spinTilt 20s linear infinite',
				movingBlob: 'movingBlob 10s linear infinite',
			},
		},
	},
	plugins: [require('@xpd/tailwind-3dtransforms')],
};
export default config;
