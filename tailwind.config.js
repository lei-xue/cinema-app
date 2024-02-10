/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "other": { 'min': '340px', 'max': '640px' },
      },
      colors: {
        darkbg: "#2D3250",
      },
      minHeight: {
        "80": "15rem",
      },
    },
    plugins: [],
  }
}

