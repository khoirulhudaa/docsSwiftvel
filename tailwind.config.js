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
        saweria: '1rem 1rem 0 #ffff'
      },
      textColor: {
        mongo: '#00684A',
        lightMongo: '#00ED64',
        darkMongo: '  ',
      },
      backgroundColor: {
        mongo: '#00ED64',
        darkMongo: '#001E2B',
        hoverMongo: '#00c251',
        bgMongo: '#00684A',
      },
      borderColor: {
        mongo: '#00ED64'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

