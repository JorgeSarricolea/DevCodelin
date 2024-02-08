/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,js}"],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#0C1620",
        primary: "#9ECDEF",
        secondary: "#0C1620",
        white: "#F0F0F0",
      },
    },
  },
  variants: {},
  plugins: [],
};
