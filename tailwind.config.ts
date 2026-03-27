import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'libre-baskerville': ['var(--font-libre-baskerville)', 'serif'],
        'playfair': ['var(--font-playfair)', 'serif'],
        'plus-jakarta': ['var(--font-plus-jakarta)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        navy: '#0b162c',
        'navy-light': '#0F1D32',
        'navy-dark': '#060F1D',
        gold: '#C8A45A',
        teal: '#2A9D8F',
        'off-white': '#F7F5F0',
        'body-text': '#3A3A3A',
        muted: '#7A7A7A',
      },
      backgroundImage: {
        'noisy-texture': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [],
}
export default config
