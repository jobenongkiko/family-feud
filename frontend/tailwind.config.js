/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#151c39',
        primaryOrange: '#f89c1e',
        numberBlue: '#233f80',
      },
      keyframes: {
        scaleFade: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '10%': { transform: 'scale(1)', opacity: '1' },
          '90%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        },
      },
      animation: {
        'spin-slow': 'spin 84s linear infinite',
        'scale-fade': 'scaleFade 3s forwards',
      },
    },
  },
  plugins: [],
}