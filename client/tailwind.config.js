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
          secondary: "#00E5A0",
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
          primary: "#00E5A0",
          secondary: "#8402ff",
          bg: "#050c1a",
          text: "#e3fff4",
        },
        purple: {
          primary: "#8402ff",
          secondary: "#00E5A0",
          bg: "#050c1a",
          text: "#e3fff4",
        },
      },
    },
  },
  plugins: [],
};
