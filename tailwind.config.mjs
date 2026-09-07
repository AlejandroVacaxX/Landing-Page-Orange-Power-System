/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F97316',
          navy: '#000000',
          light: '#E5E7EB',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
      }
    },
  },
  plugins: [],
}

