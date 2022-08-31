/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //DONT DELETE THIS 
      // gridTemplateColumns: {
      //   // Simple 16 column grid
      //   'auto-fill': 'repeat(auto-fill, minmax(177px, 1fr))',

      // }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}