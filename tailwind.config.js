/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Standard class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-dark": "var(--secondary-color)",
        background: "var(--background)",
        "card-dark": "var(--card-bg)",
        foreground: "var(--text-color)",
        muted: "var(--text-muted)",
        border: "var(--border-color)",
        "border-muted": "var(--border-muted)",
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
        "spin-slow": "spin 8s linear infinite",
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
