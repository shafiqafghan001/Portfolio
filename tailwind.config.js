/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enable class-based dark mode
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      boxShadow: {
        "custom-white": `0px 4px 20px rgba(255,255,255,0.1)`,
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "black-gradient": "linear-gradient(180deg, #000000, #1a1a1a)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  // optional safelist ensures dark: variants are not purged accidentally
  safelist: [
    // If you use dynamic classes with dark: prefixes, add them here.
    "dark",
    "dark:bg-white",
    "dark:text-black",
    "bg-[#0f1115]",
    "text-white",
  ],
  plugins: [],
};
