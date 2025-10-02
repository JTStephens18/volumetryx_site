/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Make sure this points to your root HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all relevant files inside src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}