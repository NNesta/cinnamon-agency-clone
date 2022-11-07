/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBlack: '#1C1C1C',
        primaryDark: '#222222',
        primaryDarkBlack: '#232323',
        primaryWhite: '#F6F6F6',
        primaryGrayLight: '#CFCFCF',
        primaryGrayAccent: '#666666',
        primaryGrayDark: '#525252',
        primaryPink: '#5135FF',
        primaryGreen: '#91F1C3',
        primaryPurple: '#52247F',
        primaryAmber: '#FFCD4E',
      },
      fontFamily:{
        "mont":"Mont,'arial'",
        "mont-semibold":"'MontSemiBold','arial'",
        "mont-bold":"'MontBold','arial'",
        "mont-heavy":"'MontHeavy','arial'"
      },
      animation:{
        blink1: 'blink1 10s linear normal',
        blink2: 'blink2 10s linear normal',
        blink3: 'blink3 10s linear normal',
        blink4: 'blink4 10s linear normal',
        blink5: 'blink5 10s linear normal',
        blink6: 'blink6 10s linear normal',
        blink7: 'blink7 10s linear normal',
        blink8: 'blink8 10s linear normal',
      },
      keyframes:{
         blink1: {
          '0%': {transform: 'translate(2px)',transform:'scale(.5)',transform: 'rotate(10deg)',visibility:'hidden'},
          '1%': {visibility:'hidden'},
          '8%': {transform: 'scale(1)',transform: '-translate(-2px)',transform: 'rotate(0deg)'},
         },
         blink2: {
          '0%': {transform: 'translate(2px)',transform:'scale(.5)',transform: 'rotate(10deg)',visibility:'hidden'},
          '2%': {visibility:'hidden'},
          '8%': {transform: 'scale(1)',transform: '-translate(-2px)',transform: 'rotate(0deg)'},
          
         },
         blink3: {
          '0%': {transform: 'translate(2px)',transform:'scale(.5)',transform: 'rotate(10deg)',visibility:'hidden'},
          '3%': {visibility:'hidden'},
          '8%': {transform: 'scale(1)',transform: '-translate(-2px)',transform: 'rotate(0deg)'},
          
         },
         blink4: {
          '0%': {transform: 'translate(2px)',transform:'scale(.5)',transform: 'rotate(10deg)',visibility:'hidden'},
          '4%': {visibility:'hidden'},
          '8%': {transform: 'scale(1)',transform: '-translate(-2px)',transform: 'rotate(0deg)'},
          
         },
         blink5: {
          '0%': {transform: 'translate(2px)',transform:'scale(.5)',transform: 'rotate(10deg)',visibility:'hidden'},
          '5%': {visibility:'hidden'},
          '8%': {transform: 'scale(1)',transform: '-translate(-2px)',transform: 'rotate(0deg)'},
          
         },
         blink6: {
          '0%': {transform: 'translate(2px)',transform:'scale(.5)',transform: 'rotate(10deg)',visibility:'hidden'},
          '6%': {visibility:'hidden'},
          '8%': {transform: 'scale(1)',transform: '-translate(-2px)',transform: 'rotate(0deg)'},
          
         },
         blink7: {
          '0%': {transform:'scale(.5)',transform: 'translate(2px)',transform: 'rotate(10deg)',visibility:'hidden'},
          '7%': {visibility:'hidden'},
          '8%': {transform: 'scale(1)',transform: 'rotate(0deg)',transform: '-translate(-2px)'},
          
         },
         blink8: {
          '0%': {transform:'scale(.5)',transform: 'rotate(10deg)',transform: 'translate(2px)',visibility:'hidden'},
          '8%': {visibility:'hidden'},
          '9%': {transform: 'scale(1)',transform: '-translate(-2px)',transform: 'rotate(0deg)'},
          
         },
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}
