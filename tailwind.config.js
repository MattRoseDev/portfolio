/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./public/**/*.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.rose,
      green: colors.green,
      yellow: colors.amber,
      orange: colors.orange,
      blue: colors.blue,
      purple: colors.purple,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
