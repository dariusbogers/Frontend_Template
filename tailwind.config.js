/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      screens: {
        'mobile': {'min': '0px', 'max': '599px'},
        'tablet': {'min': '600px'},
        'mid': {'min':  '900px'},
        'desktop': {'min': "1200px"}
      }
    },
  },
  plugins: [],
}

