/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/*.{js,jsx,ts,tsx}','./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-green': '#0f525a', // Add your custom color here
      },
    },
  },
  plugins: [],
}

