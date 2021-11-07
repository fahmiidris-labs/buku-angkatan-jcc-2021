const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // "media" or "class" or false
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", ...defaultTheme.fontFamily.sans],
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        red: colors.rose,
        blue: colors.sky,
        gray: colors.coolGray,
        teal: colors.teal,
        orange: colors.orange,
        violet: colors.violet,
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
      },
    },
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [],
}
