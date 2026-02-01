/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[class="dark-theme"]'], // Configure class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00FF41",
        "primary-dark": "#00CC33",
        background: "#050505",
        "card-dark": "#0a0a0a",
        "accent-warn": "#FBBF24",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideInBottom: "slideInBottom 0.5s ease-out",
        "cursor-blink": "blink 1s step-end infinite",
        "scan-line": "scanline 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInBottom: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};
