/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      formular: 'Formular',
    },
    extend: {
      colors: {
        pizza: '#123456', // use bg-pizza
        lightgray: '#F5F8FC',
        extragray: '#566879',
        border: '#E2E9F2',
        green: '#15A524',
        red: '#E31E24',
      },
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }], // use text-huge
      },
      height: {
        screen: '100dvh', // use h-screen, overwrited 100vh to 100dvh dynamic view height
      },
      borderRadius: {
        DEFAULT: '5px',
      },
    },
  },
  plugins: [],
};
