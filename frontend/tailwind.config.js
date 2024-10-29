/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#151c39'
      },
      animation: {
        'spin-slow': 'spin 84s linear infinite', // Adjust the duration as needed
      },
    },
  },
  plugins: [],
}