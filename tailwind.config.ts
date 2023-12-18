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
        burgundy: '#A32C28',
        charcoal: '#2F2F2F',
        caramel: '#C59B76'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      borderRadius: {
        'card': '8px'
      },
      boxShadow2: {
        'card': '0 4px 10px rgba(0, 0, 0, 0.1)'
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
      },
    },
  },
  plugins: [],
}
export default config