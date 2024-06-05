/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Raleway', sans-serif",
        Inter: "Inter', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
