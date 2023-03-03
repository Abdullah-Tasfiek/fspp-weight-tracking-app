/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fonts: ["Noto"],
      },
      colors: {
        blue: "#2A64E5", //navbar
        navy: "#23517E", //table header
        lime: "#7CC26E", //buttons
        green: "#93C23B", //text
        grey: "#F5F6F8", //footer
        blueText: "#3874CB",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
