/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
          'gradient' : 'gradient 3s linear infinite',
      },
      fontFamily: {
        'erel': ['Poppins', 'sans-serif']
      },
      keyframes: {
        'gradient' : {
          to: { 'background-position': '200% center' },
        }
      },
      boxShadow: {
        'red-shadow': '0px 15px 5px 3px rgba(10, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
}