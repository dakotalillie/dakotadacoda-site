const production = !process.env.ROLLUP_WATCH;

module.exports = {
  darkMode: false,
  purge: {
    content: ["./public/index.html", "./src/**/*.svelte"],
    enabled: production,
  },
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
