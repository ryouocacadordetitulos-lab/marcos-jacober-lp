/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        gold: '#F4C70F',
        amber: '#FFB000',
        brown: '#110A02',
        stone: '#F3EEDD',
        olive: '#676F3D',
        burnt: '#B5531F',
        midnight: '#01101F',
        greenblack: '#01120E',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Erstoria', 'serif'],
        body: ['Inter', '"Helvetica Neue"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
