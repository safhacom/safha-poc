import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8F5F1',
        terracotta: '#DAA49A',
        mutedrose: '#A37B73',
        darkcharcoal: '#474044'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      },
      boxShadow: {
        card: '0 4px 6px 0 rgba(0, 0, 0, 0.15)'
      },
      borderRadius: {
        card: '0.5rem'
      }
    },
  },
  plugins: [],
}
export default config