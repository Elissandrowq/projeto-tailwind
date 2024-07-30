/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {      
      colors: {
      'blue-facebook': '#1877F2',
      'gray-facebook':  '#F0F2F5',
      'green-facebook': '#006400',
    },
    spacing: {
      '128': '580rem',
      '380': '380px',
    }
  },
  },
  plugins: [],
}

