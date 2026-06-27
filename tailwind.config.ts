import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C4752A',
        'primary-dark': '#8B4E15',
        accent: '#E8B86D',
        dark: '#111111',
        'dark-surface': '#1C1C1E',
        bg: '#F9F6F0',
        surface: '#FFFFFF',
        'text-primary': '#1A1A1A',
        'text-muted': '#6B6460',
        border: '#E8E0D5',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
