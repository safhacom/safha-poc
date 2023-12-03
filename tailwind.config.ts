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
          50: "#f3f8ff", // adjust these values to match your desired royal blue palette
          100: "#e6f0ff",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6", // main royal blue color
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        peach: {
          50: "#fff5eb",
          100: "#ffe4d4",
          200: "#fecdac",
          300: "#fdba89",
          400: "#fb9765",
          500: "#fa7632", // main peach color
          600: "#e66023",
          700: "#cc5016",
          800: "#b34010",
          900: "#973101",
        },
      },
      fontFamily: {
        roboto: ['"Roboto"', "monospace"],
      },
      // Example of glass effect, adjust as needed for your project
      backdropFilter: {
        none: "none",
        blur: "blur(15px)",
      },
      clipPath: {
        parallelogram: "polygon(0 0, 100% 0, 75% 100%, 25% 100%)",
      },
    },
  },
  plugins: [],
}
export default config
