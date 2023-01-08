const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
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
      fontFamily: {
        sans: ['var(--font-pt-sans)', ...fontFamily.sans],
        mono: ['var(--font-fira-mono)', ...fontFamily.mono],
        spicy: ['var(--font-acme)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
