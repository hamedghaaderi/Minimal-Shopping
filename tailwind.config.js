/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "outfit": "outfit"
      },
      width: {
        "21r": "21rem"
      },
      maxWidth: {
        "whole": "1440px",
      },
      colors: {
        "back": "#f9f9f9",
        "gray": "#000000b3"
      }
    },
  },
  plugins: [],
};
