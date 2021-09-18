module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/components/*.{js,jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel"],
        parisienne: ["Parisienne"],
        inter: ["Inter"],
        allura: ["Allura"],
      },
    },
    // colors: {
    //   gray: {
    //     darker: "#3d3d3d",
    //   },
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
