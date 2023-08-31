const { nextui } = require("@nextui-org/react");
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Oswald"],
      two: ["Open Sans"],
      abc: ["Lato", "sans-serif"],
      reem: ["Reem Kufi", "sans-serif"],
  },
  },
  darkMode: "class",
  plugins: [nextui()],
}

