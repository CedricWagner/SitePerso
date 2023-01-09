module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#226666",
        secondary: "#AA8439",
        dark: "#303030",
        scale: {
          "-100": "-1",
        },
      },
    },
  },
  plugins: [],
};
