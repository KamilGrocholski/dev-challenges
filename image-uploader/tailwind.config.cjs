/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'bounce-horizontal': {
          '0%, 100%': {
            transform: 'translateX(-100%)',
            // 'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateX(100%)',
            // 'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
      },

      animation: {
        'bounce-horizontal': 'bounce-horizontal 3s linear infinite'
      }
    },
  },
  plugins: [],
}
