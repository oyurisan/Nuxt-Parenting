module.exports = {
  mode: "jit",
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    visibility: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('tailwind-hamburgers'),
  ]
}
