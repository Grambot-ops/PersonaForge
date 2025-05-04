/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[class="dark-theme"]'], // Configure class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideInBottom: "slideInBottom 0.5s ease-out",
        growWidth: "growWidth 1.5s ease-out forwards",
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
        growWidth: {
          "0%": { width: "0%" },
          "100%": {
            /* Width is set dynamically via style prop */
          },
        },
      },
    },
  },
  plugins: [],
};
