const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        circle: {
          '0%': {
            'stroke-dasharray': '1, 200',
            'stroke-dashoffset': '0',
          },
          '50%': {
            'stroke-dasharray': '100, 200',
            'stroke-dashoffset': '-15px',
          },
          '100%': {
            'stroke-dasharray': '100, 200',
            'stroke-dashoffset': '-125px',
          },
        },
      },
      animation: {
        'spin-loading': 'spin 1.4s linear 0s infinite normal none running',
        'circle-loading': 'circle 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/line-clamp')],
};
