/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit, sans-serif'],
      },
      backgroundImage: {
        '112': "url('/src/assets/thumbnails/112/regular/small.jpg')",
        'Beyond-Earth': "url('/src/assets/thumbnails/beyond-earth/regular/small.jpg')",
        
      }
    },
  },
  plugins: [],
}
