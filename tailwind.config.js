/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Roboto Mono"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      red: colors.rose,
      green: colors.green,
      primary: colors.blue,
      orange: colors.orange,
      blue: colors.blue,
      purple: colors.purple,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
