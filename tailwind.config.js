/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9ECDEF",
        secondary: "#0C1620",
        tertiary: "#2A3B4A",
        hover: "#86AAC4",
        focus: "#9ECDEF",
      },
      spacing: {
        36: "36rem",
        cursor: "0.25rem",
        verticalImg: "40rem",
      },
      textShadow: {
        lightBlue: "3px 3px 8px rgba(66, 135, 245, 1)",
      },
      boxShadow: {
        lightBlue: "3px 3px 8px rgba(66, 135, 245, 1)",
      },
      keyframes: {
        slideInFromLeft: {
          "0%": { transform: "translateX(-10%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(10%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideInLeft: "slideInFromLeft 1.5s ease-out forwards",
        slideInRight: "slideInFromRight 1.5s ease-out forwards",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-textshadow")],
};
