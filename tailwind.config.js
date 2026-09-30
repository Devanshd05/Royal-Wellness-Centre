/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#F7F7F4',
          dark: '#111111',
          gold: '#C6A15B',
          gray: '#6F6F69',
          border: '#DEDED8',
          sage: '#AAB8B2',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      }
    },
  },
  plugins: [],
}
