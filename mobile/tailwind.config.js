/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      
      colors: {
        // Background colors
        green: '#3A7156',
        red: '#9E4848',
        blue: '#007D7D',
        purple: '#59418C',
        filter: '#414141',
        filterDisabled: '#303030',
        black: '#0D0D0D',

        // Text colors
        textDisabled: '#6A6A6F',
        textStory: '#C7C7C7'
      },
    },
  },
  plugins: [],
}

