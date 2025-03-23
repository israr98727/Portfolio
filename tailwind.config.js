/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        flicker: {
          '0%': { 
            opacity: '0.6',
            transform: 'scale(1)'
          },
          '25%': {
            opacity: '0.8',
            transform: 'scale(1.05)'
          },
          '50%': {
            opacity: '0.7',
            transform: 'scale(0.95)'
          },
          '75%': {
            opacity: '0.9',
            transform: 'scale(1.1)'
          },
          '100%': {
            opacity: '0.8',
            transform: 'scale(1)'
          }
        }
      },
      animation: {
        wave: 'wave 0.6s ease-in-out infinite',
        flicker: 'flicker 1.5s infinite alternate'
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
