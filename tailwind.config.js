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
          '50%': { transform: 'translateY(-15px)' }, // Adjust for wave height
        },
      },
      animation: {
        wave: 'wave 0.6s ease-in-out infinite',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'], // Set IBM Plex Mono as the default monospaced font
      },
    },
  },
  plugins: [],
}

