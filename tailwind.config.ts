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
        purple: "#610C9F",
        pinky: "#940B92",
        raw: "#E95793",
      },
      fontFamily: {
        rubik_bubbles: ["Rubik Bubbles", "cursive"],
      },
    },
  },
  plugins: [],
}
export default config
