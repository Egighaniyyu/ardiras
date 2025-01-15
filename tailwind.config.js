/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "system-ui"],
    },
    extend: {
      colors: {
        "light-pink": "#F6676F",
        "dark-pink": "#86212A",
        "light-blue": "#40A7F0",
        "dark-blue": "#0F5484",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
