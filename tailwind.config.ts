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
        lightGray: '#F2F4F3',
        salmonPink: '#DAA49A',
        mutedPurple: '#A6808C',
        darkBlue: '#2E4052',
        deepMaroon: '#5C2751',
        warmYellow: '#F2C14E',
        white: '#FFFFFF'
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.1)'
      },
      backdropBlur: {
        'light': '2px'
      },
      borderWidth: {
        'light': '1px'
      }
    }
  },
  plugins: [],
  variants: {
    extend: {
      borderWidth: ['responsive'],
      boxShadow: ['responsive'],
      backdropBlur: ['responsive']
    }
  }
}
export default config