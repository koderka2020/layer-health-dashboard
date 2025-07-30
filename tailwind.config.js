/** @type {import('tailwindcss').Config} */
 export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
        colors: {
          'custom-aqua': '#0FFFF440',
        }
      },
      plugins: [require('daisyui')],
    }

