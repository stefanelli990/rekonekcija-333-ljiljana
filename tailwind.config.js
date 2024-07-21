/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        primaryColor: '#E883AD',
        darkColor: '#1C1C1C',
        offWhite1: '#FCFCFC',
        offWhite2: '#F7F7F7'
      }
    },
  },
  plugins: [],
}

