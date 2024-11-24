/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'shine': 'shine 2s infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '50%, 100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};