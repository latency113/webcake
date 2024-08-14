/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html"
  ],
  theme: {
    extend: {
        backgroundImage: {
          'bgcake': "url('/webcake/img/bgcake.jpg')"
        }
    },
  },
  plugins: [],
}

