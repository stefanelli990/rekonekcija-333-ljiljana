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
        serif: ['Garamond', 'serif'],
      },
      colors: {
        'primaryColor': {
          light: '#FBF5F4',
          DEFAULT: '#EA9B8E',
        },
        darkColor: '#0D1B1E',
        offWhite: '#FCFCFC'
      },
      boxShadow: {
        'navbar': 'rgba(17, 17, 26, 0.1) 0px 0px 16px'
      },
    }
  },
  plugins: [],
}

