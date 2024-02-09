/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway400: ['RalewayRegular'],
        raleway600: ['RalewaySemiBold'],
        raleway800: ['RalewayBold'],
        museo400: ['MuseoModernoRegular'],
        museo600: ['MuseoModernoSemiBold'],
        museo800: ['MuseoModernoBold'],
        imfell: ['IMFellEnglishSC'],
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
        textStory: '#C7C7C7',

        // Onboarding colors
        colorStep1: '#B2B5FF',
        colorStep2: '#202733',
        colorStep3: '#cccccc',
        colorStep4: '#4C3E7A',
        colorStep5: '#002A2A',

      },
    },
  },
  plugins: [],
}

