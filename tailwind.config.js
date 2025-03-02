/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom blue
      },
      container:{
        center:true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom font
        handwriting: ["Merienda", "cursive"],
      },
    },
  },
  plugins: [],
};
