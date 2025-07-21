import type { Config } from "tailwindcss"
import defaultConfig from "shadcn/ui/tailwind.config"

const config: Config = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        ...defaultConfig.theme.extend.colors,
        // MAM Delivery Color Palette
        "mam-white": "#FFFFFF",
        "mam-sky": "#00B0E4",
        "mam-blue": "#3583DD",
        "mam-purple": "#7C46D3",
        "mam-dark-purple": "#962FCF",
        "mam-black": "#060116",
      },
      fontFamily: {
        conthrax: ["Arial", "sans-serif"], // Fallback since Conthrax isn't web-safe
        "arial-rounded": ["Arial Rounded MT Bold", "Arial", "sans-serif"],
        "source-sans": ["Source Sans Pro", "sans-serif"],
      },
      animation: {
        gradient: "gradient 3s ease infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}

export default config
