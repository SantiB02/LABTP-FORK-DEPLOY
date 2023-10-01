/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      gridTemplateColumns: {
        16: "repeat(10, minmax(0, 1fr))",
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "detail-orange": "#FF550A",
        "detail-salmon": "#FF643C",
        "cream-100": "#FFF9FB",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundColor: {
        "background-cream": "#FF550A",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
