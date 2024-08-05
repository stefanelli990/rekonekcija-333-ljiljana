/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      }
    },
  },
  plugins: [],
};
