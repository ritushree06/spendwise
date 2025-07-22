/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",               // Include root HTML
      "./src/**/*.{js,jsx,ts,tsx}"  // Include all React component files
    ],
    theme: {
      extend: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
        colors: {
            darkGreen: '#163200',
            neonGreen: '#96DF66',
            dullGreen: '#A7C0A0',
            yellow: '#BE934E',
        },
      },
    },
    plugins: [],
  }
  
