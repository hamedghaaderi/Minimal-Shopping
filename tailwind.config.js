/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "outfit": "outfit"
      },
      height: {
        "remain": "256.5px"
      },
      width: {
        "21r": "21rem"
      },
      maxWidth: {
        "whole": "1440px",
      },
      colors: {
        "back": "#f9f9f9",
        "gray": "#000000b3",
        "gray2": "#00000080",
        "orange": "#fe8a00",
        "transparent": "rgba(0 ,0 ,0 ,0.25)"
      },
      gridTemplateColumns: {
        "4cols": "repeat(4, 22.8%)"
      },
      gridTemplateRows: {
        "2rows": "repeat(2, 428px)"
      },
      gap: {
        "32px": "32px 2.9%"
      },
      animation: {
        "loading": "loading 3s cubic-bezier(0.52, 0.06, 0.32, 0.99) 0s infinite normal forwards"
      },
      borderRadius: {
        "percent": "100%"
      }
    },
  },
  plugins: [],
};
