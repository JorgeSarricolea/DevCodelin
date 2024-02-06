/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js}"],
  theme: {
    extend: {
      colors: {
        primaryText: "#0C1620", // Color para la fuente
        primaryBackground: "#0C1620", // Color para el fondo principal
        primary: "#ff7e67",
        secondary: "#6dd5ed",
      },
    },
  },
  variants: {},
  plugins: [],
};
