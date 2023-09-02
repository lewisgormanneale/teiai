const colors = require("tailwindcss/colors");

export default {
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Libre Baskerville", "serif"],
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  content: [],
};
