const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
        mono: ["'Fira Code'", ...defaultTheme.fontFamily.mono],
        coolvetica: ['Coolvetica', 'sans-serif'],
      },
      height: {
        'screen-minus-header': 'calc(100vh - 88px)',
      },
      backgroundImage: {
        'white-darkblue-gradient': 'linear-gradient(to bottom, #FFFFFF 0%, #00031f 100%)',
        'white-lightblue-gradient': 'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 70%, #b5d0f8 100%)'
      }
    },
  },
  plugins: [],
}