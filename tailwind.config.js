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
        'primaryColor': {
          light: 'hsl(335deg 69% 77%)',
          DEFAULT: 'hsl(335.05deg 68.71% 71.18%)',
        },
        darkColor: '#1C1C1C',
        offWhite1: '#FCFCFC',
        offWhite2: '#F7F7F7'
      },
      boxShadow: {
        'navbar': 'rgba(17, 17, 26, 0.1) 0px 0px 16px'
      },
    }
  },
  plugins: [],
}

