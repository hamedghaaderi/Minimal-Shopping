/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "outfit": "outfit"
      },
      height: {
        "remain": "256.5px",
        "cart": "489px",
        "cartdetail": "391.4px"
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
        "transparent": "rgba(0 ,0 ,0 ,0.25)",
        "grayback": "rgba(123, 123, 123, 0.06)",
        "quantity": "#D9D9D9"
      },
      animation: {
        "loading": "loading 3s cubic-bezier(0.52, 0.06, 0.32, 0.99) 0s infinite normal forwards",
        "opacityin": "opacityIn 0.3s",
        "opacityout": "opacityOut 0.3s",
        "translatein": "translateIn 0.3s",
        "translateout": "translateOut 0.3s",
        "translatein2": "translateIn2 0.3s",
        "translateout2": "translateOut2 0.3s"
      },
      borderRadius: {
        "percent": "100%"
      }
    },
  },
  plugins: [],
};
