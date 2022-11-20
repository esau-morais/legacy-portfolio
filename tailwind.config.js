/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      'neutral': 'Neutral Face'
    },
    fontSize: {
      base: '1rem',
      lg: '1.414rem',
      xl: '1.999rem',
      '2xl': '2.827rem',
      '3xl': '3.998rem',
      '4xl': '5.653rem'
    },
    colors: {
      'light': '#FFFFFF',
      'dark': '#000000',
      'gray': '#4B5563',
      'dark-blue': '#0052D4',
      "blue": "#4364F7",
      "light-blue": "#6FB1FC"
    },
    letterSpacing: {
      wide: '0.22em'
    },
    spacing: {
      18: '1.125rem',
      150: '7.813rem',
      300: '18.75rem',
      ...defaultTheme.spacing
    },
    screens: {
      sm: '580px',
      md: '960px',
      lg: '1366px'
    },
    extend: {
      backgroundImage: {
        'retro': "url('/images/retro.png')"
      }
    },
  },
  plugins: [],
}
