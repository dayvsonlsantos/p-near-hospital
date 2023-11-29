/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'green-near-light' : '#88C625',
        'green-near-dark': '#2A8632',
      },
      backgroundColor:{
        'green-near-light' : '#88C625',
        'green-near-dark': '#2A8632',
      }

    },
  },
  plugins: [],
}

