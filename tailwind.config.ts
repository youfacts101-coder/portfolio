import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ffffff",
        accent: "#3b82f6", // Blue accent
        muted: "#4b5563",
      },
      fontFamily: {
        sans: [
          '"Inter"',
          '"Geist"',
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      spacing: {
        18: "4.5rem",
        112: "28rem",
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
        slideInUp: "slideInUp 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideInUp: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      backdropBlur: {
        xl: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
