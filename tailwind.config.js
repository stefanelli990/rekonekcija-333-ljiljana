/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'very-dark-color': '#222222',
        'dark-color': '#272727'
      }
    }
  },
  plugins: [],
}

