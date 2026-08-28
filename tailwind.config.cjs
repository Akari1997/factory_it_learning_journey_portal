/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        legoBlue: '#0b5fff',
        legoLime: '#c5d86d',
        legoOrange: '#ff7a00',
        legoPurple: '#8b5cf6'
      }
    }
  },
  plugins: [],
}
