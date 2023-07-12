/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{html,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.teal,
      },
    },
  },
  plugins: [],
};
