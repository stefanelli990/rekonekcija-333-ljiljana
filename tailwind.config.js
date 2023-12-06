/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#0F418E',
        'darkColor': '#242424'
      },
      backgroundImage: {
        'header-img': "url('./src/assets/currency-bg.jpg')",
      }
    },
  },
  plugins: [],
}

