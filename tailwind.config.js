/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px',
        '4': '4px',
      },
    },
  },
  plugins: [],
}