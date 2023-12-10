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
        pinky: "#FF90BC ",
        sun: "#F9F9E0",
        sky: "#8ACDD7",
      },
      fontFamily: {
        silkscreen: ["Silkscreen", "monospace"],
      },
    },
  },
  plugins: [],
}
export default config
