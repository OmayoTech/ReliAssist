/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A4A4A", //black
        secondary: "#6A0DAD", //purple
      },
      fontFamily: {
        Rale: ["Raleway"],
      },
    },
  },
  plugins: [],
};
