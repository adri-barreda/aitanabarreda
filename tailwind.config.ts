import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rosa: {
          light: '#F2D7D9',
          DEFAULT: '#E8B4B8',
        },
        verde: {
          light: '#B8D4C8',
          DEFAULT: '#8FB996',
        },
        fondo: '#FAFAF8',
        texto: '#2D2D2D',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
