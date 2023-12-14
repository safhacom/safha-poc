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
        green: "#304D30",
        sugar: "#EEF0E5",
        mint: "#B6C4B6",
      },
      fontFamily: {
        silkscreen: ["Silkscreen", "monospace"],
      },
    },
  },
  plugins: [],
}
export default config
