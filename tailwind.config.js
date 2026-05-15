/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blackPremium: "#0B0B0C",
        offWhite: "#F5F1EB",
        goldChampagne: "#C6A972",
        grafiteProfundo: "#1A1A1A",
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "serif"],
        body: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}