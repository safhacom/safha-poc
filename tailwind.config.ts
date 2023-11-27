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
        royalblue: {
          500: "#4169e1", // Replace with your preferred royal blue shade
        },
        peach: {
          400: "#ffdab9", // Replace with your preferred peach shade
        },
      },
      fontFamily: {
        "ubuntu-mono": ["Ubuntu Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
export default config
