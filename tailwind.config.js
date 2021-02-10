const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: {
    enabled: true,
    content: ['index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cyan': '#00c5a9'
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        serif: ["Libre Baskerville", ...defaultTheme.fontFamily.serif]
      }
    },
    backgroundImage: theme => ({
      'white-texture': "url('/img/white_texture/white_texture.png')",
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}