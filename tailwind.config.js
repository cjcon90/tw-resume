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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}