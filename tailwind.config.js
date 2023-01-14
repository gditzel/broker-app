/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          'baskerville': ['Baskerville', 'sans'],
          'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
