module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackPremium: "#0B0B0B",
        offWhite: "#F5F5F5",
        goldChampagne: "#C7A86B", // mais próximo do post
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Playfair Display", "serif"],
        script: ["Great Vibes", "cursive"], // para textos cursivos
        button: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};