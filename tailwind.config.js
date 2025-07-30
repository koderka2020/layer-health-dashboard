/** @type {import('tailwindcss').Config} */
 export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            'custom-aqua': '#0FFFF440',
            'custom-dark-aqua': '#366985',
            'custom-dark-aqua-2': '#113b59'
          }
        },
      },
      plugins: [require('daisyui')],
    }

