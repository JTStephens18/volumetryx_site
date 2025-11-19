// postcss.config.js (or postcss.config.cjs)
export default {
  plugins: {
    // 🛑 Change this line!
    '@tailwindcss/postcss': {}, // <--- Use the new package name
    'autoprefixer': {},
  },
}