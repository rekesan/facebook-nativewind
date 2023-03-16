/** @type {import('tailwindcss').Config} */

const nativewind = require("nativewind/tailwind");

module.exports = {
  content: [
    "./app/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
  ],
  presets: [nativewind],
  theme: {
    extend: {
      width: {
        "9/10": "90%",
      },
      borderWidth: {
        1: "1px",
      },
      flex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
      },
      colors:{
        "bleach-silk": "#f2f2f2",
        "northern-light-grey": "#A5ADB3",
        "bright-navy-blue": "#1a74e4",
        bauhaus: "#404040",
        "carbon-fiber": "#2e2e2e",
        "shadowed-steel": "#4a4a4a",
        "humid-cave": "#c9ccd1",
        "festive-ferret": "#e0e0e4",
        "fly-by-night": "#475a69",
      }
    },
  },
  plugins: [],
};
