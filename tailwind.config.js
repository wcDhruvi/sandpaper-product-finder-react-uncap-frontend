module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "pf-",
  important: ".product-finder-section",
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      screens: {
        'lgx': '1025px',
      },
    },
  },
  plugins: [],
};