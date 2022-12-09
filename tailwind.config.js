/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '120': '30rem'
      },
      height: {
        '120': '30rem'
      },
      margin: {
        '120': '30rem'
      },
      fontSize: {
        '6xl': '4rem',
        '7xl': '5rem'
      }
    },
  },
  plugins: [],
}
