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
        spiky: "#50f5ac",
        floor: "#101223",
      },
      fontFamily: {
        "ubuntu-mono": ["Ubuntu Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
export default config
