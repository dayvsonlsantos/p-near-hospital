/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}", 
    "./pages/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'green-near-light' : '#88C625',
        'green-near-dark': '#2A8632',
        'gray-near': '#70757A'
      },
      backgroundColor:{
        'green-near-light' : '#88C625',
        'green-near-light-opacity' : '#rgba(136, 198, 37, 0.2)',
        'green-near-dark': '#2A8632',
        'gray-near': '#70757A',
      }

    },
  },
  plugins: [],
}

