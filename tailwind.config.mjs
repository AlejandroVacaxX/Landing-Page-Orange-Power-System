/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F97316',
          navy: '#0B1220',
          light: '#E5E7EB',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        rotateY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        }
      },
      animation: {
        'spin-slow-y': 'rotateY 20s linear infinite',
      }
    },
  },
  plugins: [],
}

