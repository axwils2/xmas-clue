import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'xmas-red': '#C30F16',
        'xmas-green': '#143306',
        'xmas-gold': '#FFD700',
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
