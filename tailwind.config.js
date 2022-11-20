/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    hoverOnlyWhenSupported: true
  },
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      'telegraf': 'Telegraf'
    },
    fontSize: {
      base: '1rem',
      lg: '1.414rem',
      'lg-mb': '1.333rem',
      xl: '1.999rem',
      'xl-mb': '1.777rem',
      '2xl': '2.827rem',
      '2xl-mb': '2.369rem',
      '3xl': '3.998rem',
      '3xl-mb': '2.441rem',
      '4xl': '5.653rem',
      '4xl-mb': '3.052rem'
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
      wide: '0.22em',
      'wide-mb': '0.11em'
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
