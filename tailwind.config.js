/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'noise': "url('./src/assets/noise-light.png')",
    },
      colors: {
        'purple': '#BC73F2',
        'black': '#1A1A1A',
        'orange': '#F46036',
        'orangeDark': '#DA4419',
      }
    },
  },
  plugins: [],
}

