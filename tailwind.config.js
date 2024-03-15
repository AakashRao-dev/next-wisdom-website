/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

const colors = require('tailwindcss/colors');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        move: 'move 20s linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        move: {
          '0%': {
            left: '100%',
          },
          '100%': {
            left: '-100%',
          },
        },
      },
      screens: {
        xs: { raw: '(min-width: 400px)' },
      },
      colors: {
        blue: '#00B0F5',
        blueLight: '#E5F8FF',
        blueDark: '#263238',
        black: '#1E1E1E',
        blackDark: '#000000',
        gray: '#515151',
        grayLight: '#C8C8C8',
        formItem: '#32475280',
        white: '#FFFFFF',
      },
      fontSize: {
        clampMain: 'clamp(1rem, 8vw, 3.4rem)',
        clampSecond: 'clamp(14px, 3vw, 18px)',
        clampThird: 'clamp(1rem, 6vw, 3rem)',
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
