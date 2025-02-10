/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Krungthep", "sans-serif"],
        text: ["Krub", "sans-serif"],
      },

      colors: {
        orange: {
          primary: "#ff8c00",
          secondary: "#8402ff",
          bg: "#050c1a",
          text: "#e3fff4",
        },
        red: {
          primary: "#ff0062",
          secondary: "#00ffb3",
          bg: "#050c1a",
          text: "#e3fff4",
        },
        blue: {
          primary: "#00bbff",
          secondary: "#8402ff",
          bg: "#050c1a",
          text: "#e3fff4",
        },
        green: {
          primary: "#00E600",
          secondary: "#8402ff",
          bg: "#050c1a",
          text: "#e3fff4",
        },
        purple: {
          primary: "#8402ff",
          secondary: "#00ffb3",
          bg: "#050c1a",
          text: "#e3fff4",
        },
        grey: {
          primary: "#B9AB99",
          secondary: "#FF8C00",
          bg: "#050c1a",
          text: "#e3fff4",
        },
      },
    },
  },
  plugins: [],
};
