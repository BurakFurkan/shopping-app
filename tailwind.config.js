/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors:{
      white: "#E2DFD2",
      blurredWhite:"rgba(255, 255, 255, 0.1)",
      blurredBorder:"rgba(255, 255, 255, 0.22)",
      greyText:"rgb(128,128,128)"
    },
    fontFamily:{
      mainFont:['Ubuntu', "sans-serif"]
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      transitionProperty: {
        'width': 'width',
      },
      dropShadow: {
        '4xl': [
            '-5px 13px 28px rgba(221, 156, 196, 1)',
            '-5px 13px 44px rgba(221, 156, 196, 1)'
        ]
      },
    },
  },
  plugins: [],
}
