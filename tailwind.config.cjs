module.exports = {
  content: ["./index.html", "./src/**/*.svelte"],
  theme: {
    fontFamily: {
      sans: ["Source Sans Pro", "sans-serif"],
    },
    screens: {
      xsm: { max: "639px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};
