/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      screens: { sm: '480px' },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      spacing: { big: '45rem' },
    },
  },
  plugins: [],
};
