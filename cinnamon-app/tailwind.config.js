/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5135FF",
        secondary: "#CFCFCF",
        normal: "#666666",
        light: "#222222",
        lighter: "#525252",
        lightgreen: "#91F1C3",
        darkpurple: "#52247f",
        darkyellow: "#ffcb49",
        darkblack: "#1C1C1C",
        lightgray: "#f6f6f6",
        yellow: "#FFCB47",
      },
      fontFamily: {
        sans: ["Mont", "arial"],
        MontHeavy: ["MontHeavy", "arial"],
        MontSemiBold: ["MontSemiBold", "arial"],
        MontBold: ["MontBold", "arial"],
      },
    },
  },
  plugins: [],
};
