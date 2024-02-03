const { nextui } = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
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
      ubuntu: ['Ubuntu', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
      generalSans: ['General Sans', 'sans-serif'],
      allison: ['Allison', 'cursive'],
  },
  },
  darkMode: "class",
  plugins: [nextui(), require("@xpd/tailwind-3dtransforms")],
})

