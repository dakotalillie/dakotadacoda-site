const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    content: ["./public/index.html", "./src/**/*.svelte"],
    enabled: production,
  },
  darkMode: false, // or 'media' or 'class'
};
