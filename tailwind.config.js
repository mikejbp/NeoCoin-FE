module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
        'md': '801px',
        // => @media (min-width: 800px) { ... }
      },
    },
  },
  plugins: [],
};
