/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#0076B6', // ETH blue
          800: '#005485',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 