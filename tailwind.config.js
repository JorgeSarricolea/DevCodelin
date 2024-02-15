/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9ECDEF",
        secondary: "#0C1620",
        white: "#F0F0F0",
        hover: "#86AAC4",
      },
      spacing: {
        36: "36rem",
        cursor: "0.25rem",
      },
      textShadow: {
        lightBlue: "3px 3px 8px rgba(66, 135, 245, 1)",
      },
      boxShadow: {
        lightBlue: "3px 3px 8px rgba(66, 135, 245, 1)",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-textshadow")],
};
