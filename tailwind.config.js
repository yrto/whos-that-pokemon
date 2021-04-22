const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [`Heebo`, ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        "offset-black": "-2px 2px black",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
