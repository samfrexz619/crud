/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray_10: '#E6EBED',
        pry: '#133E53'
      }
    },
  },
  plugins: [],
}

