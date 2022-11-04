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
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}
