/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    fontSize: {
      base: '1rem',
      lg: '1.5rem',
      xl: '2.25rem',
      '2xl': '3.375rem',
      '3xl': '5.063rem',
      '4xl': '7.594rem'
    },
    colors: {
      'light': '#FFFFFF',
      'dark': '#000000',
      'gray': '#4B5563',
      'dark-blue': '#0052D4',
      "blue": "#4364F7",
      "light-blue": "#6FB1FC"
    },
    spacing: {
      18: '1.125rem',
      150: '7.813rem',
      300: '18.75rem',
      ...defaultTheme.spacing
    },
    extend: {
      backgroundImage: {
        'retro': "url('/images/retro.png')"
      }
    },
  },
  plugins: [],
}
