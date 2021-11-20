module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryC: "#f5f5f5",
        secondaryC: "#ededed",
        tertiaryC: "#334756",
        danger: "#FF4C29",
        success: "#CCFFBD",
        info: "#FFC947",
        textWhite: "#f5f5f5",
        textBlack: "#000000",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
