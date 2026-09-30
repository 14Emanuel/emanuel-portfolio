import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pond: {
          white: "#ffffff",
          mist: "#f8fafc",
          spring: "#f0fdfa",
          border: "rgba(13, 148, 136, 0.18)",
          teal: "#0d9488",
          mint: "#059669",
          emerald: "#047857",
          cyan: "#0284c7",
          ripple: "#14b8a6",
        },
        lotus: {
          soft: "#fff1f2",
          petal: "#f43f5e",
          pink: "#e11d48",
          glow: "#be123c",
        },
        lily: {
          leaf: "#065f46",
          pad: "#10b981",
          vibrant: "#16a34a",
        },
        amphibian: {
          lime: "#65a30d",
          olive: "#4d7c0f",
        },
      },
      backgroundImage: {
        "pond-white-gradient": "linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #f0fdfa 100%)",
        "lotus-radial-white": "radial-gradient(circle at center, rgba(244, 63, 94, 0.08) 0%, transparent 70%)",
        "ripple-radial-white": "radial-gradient(circle at center, rgba(13, 148, 136, 0.08) 0%, transparent 60%)",
      },
      animation: {
        "float-gentle": "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
        "ripple-pulse": "ripplePulse 4s ease-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-6px) rotate(1deg)" },
        },
        ripplePulse: {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "50%": { transform: "scale(1.2)", opacity: "0.2" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
