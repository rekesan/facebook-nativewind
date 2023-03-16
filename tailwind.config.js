/** @type {import('tailwindcss').Config} */

const nativewind = require("nativewind/tailwind")

module.exports = {
  content: ["./app/**/*.{html,js,jsx,ts,tsx}", "./components/**/*.{html,js,jsx,ts,tsx}"],
  presets: [nativewind],
  theme: {
    extend: {},
  },
  plugins: [],
};
