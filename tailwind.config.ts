import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'christmas-red': '#FF0000',
        'christmas-green': '#00FF00',
        'christmas-gold': '#FFD700',
      },
      fontFamily: {
        'dancing-script': ['var(--font-dancing-script)'],
        pacifico: ['var(--font-pacifico)'],
      }
    },
  },
  plugins: [],
}
export default config
