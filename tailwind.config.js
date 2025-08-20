/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",       // all HTML files in root
    "./**/*.{js,ts}"  // all JS/TS files in subfolders
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1DA1F2",   // custom color (Twitter blue)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // custom font
      },
    },
  },
  plugins: [],
}
