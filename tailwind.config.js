/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        background: 'var(--background)',
        surface: 'var(--surface)',
        'surface-raised': 'var(--surface-raised)',
        /* Alias kept for backwards compatibility with existing components */
        'card-dark': 'var(--surface)',
        foreground: 'var(--text)',
        muted: 'var(--text-muted)',
        border: 'var(--border)',
        'border-muted': 'var(--border-muted)',
        glow: 'var(--glow)',
        'accent-warn': '#f59e0b',
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", 'monospace'],
        display: ["'Space Grotesk'", 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        card: 'var(--shadow-card)',
        glow: 'var(--shadow-glow)',
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in-out',
        slideInBottom: 'slideInBottom 0.5s ease-out',
        'spin-slow': 'spin 8s linear infinite',
        float: 'float 14s ease-in-out infinite',
        enter: 'enter 0.5s ease-out forwards',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
        slideInBottom: {
          '0%': {transform: 'translateY(20px)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'},
        },
        float: {
          '0%, 100%': {transform: 'translate(0, 0) scale(1)'},
          '33%': {transform: 'translate(24px, -16px) scale(1.04)'},
          '66%': {transform: 'translate(-16px, 24px) scale(0.97)'},
        },
        enter: {
          from: {opacity: '0', transform: 'translateY(16px) scale(0.98)'},
          to: {opacity: '1', transform: 'translateY(0) scale(1)'},
        },
        pulseSoft: {
          '0%, 100%': {opacity: '1'},
          '50%': {opacity: '0.35'},
        },
      },
    },
  },
  plugins: [],
};
