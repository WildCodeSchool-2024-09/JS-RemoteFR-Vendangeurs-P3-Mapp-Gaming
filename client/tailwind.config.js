/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: ["Krungthep", "sans-serif"],
      text: ["Krub", "sans-serif"],
    },
    colors: {
      background: "#050C1A",
      primary: "#E3FFF4",
      secondary: {
        100: "#8402FF",
        150: "#FF8C00",
        200: "#FF0062",
        250: "#00FFB3",
        300: "#00BBFF",
        350: "#B9AB99",
      },
    },
    screens: {
      laptop: "1024px",
      desktop: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
