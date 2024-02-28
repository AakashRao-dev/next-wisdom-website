/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: { raw: '(min-width: 400px)' },
      },
      colors: {
        blue: '#00B0F5',
        blueLight: '#E5F8FF',
        blueDark: '#263238',
        black: '#1E1E1E',
        gray: '#515151',
        white: '#FFFFFF',
      },
      fontSize: {
        clampMain: 'clamp(1rem, 8vw, 3.4rem)',
        clampSecond: 'clamp(14px, 3vw, 18px)',
        clampThird: 'clamp(1rem, 6vw, 3rem)',
      },
    },
  },
  plugins: [],
};
