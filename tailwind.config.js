/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cyanHover: 'rgb(175, 255, 255)',
        cyan: 'rgb(0, 226, 226)',
      },
      boxShadow: {
        saweria: '0.4rem 0.4rem 0 #222'
      }
    },
  },
  plugins: [],
}

