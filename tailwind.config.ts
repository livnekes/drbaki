import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand: {
          primary: "#2F6F5E",
          dark: "#1C3B33",
          light: "#EEF6F2",
          accent: "#C2703D",
          "accent-light": "#FBF1E9",
        },
      },
      zIndex: {
        modal: "100",
      },
      maxHeight: {
        modal: "85vh",
        "modal-image": "75vh",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      fontFamily: {
        sans: ["Heebo", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
