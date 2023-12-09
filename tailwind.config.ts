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
        'dark-slate': '#2E4053',
        'medium-slate': '#5D6D7E',
        'silver-gray': '#D5D8DC',
        'sky-blue': '#3498DB',
        'brick-red': '#E74C3C',
        'sea-green': '#16A085',
        'sunflower-yellow': '#F1C40F',
        'plum-purple': '#7D3C98',
      },
      fontFamily: {
        "ubuntu-mono": ["Ubuntu Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
export default config