module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'epilogue': ['Epilogue', 'sans-serif']
    },
    extend: {
      dropShadow: {
        '3xl': '0 25px 25px rgb(255,255,255)',      
        },
      colors: {
        primary: "#BFEAE0",
        secondary: "#EE671F"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
