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
        primary: "#50F5AC",
        secondary: "#101223",
      },
      fontFamily: {
        "pf-aljamal": ["pf-aljamal", "monospace"],
      },
    },
  },
  plugins: [],
}
export default config
