/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./mynd.jpg')",
        'footer-texture': "url('./mynd.jpg)",
      }
    },
  },
  plugins: [],
}


