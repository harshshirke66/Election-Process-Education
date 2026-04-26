/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brutalist: {
          black: '#000000',
          white: '#FFFFFF',
          blue: '#0000FF',
          red: '#FF0000',
          neon: '#39FF14',
        }
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '8': '8px',
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
        'brutal-blue': '4px 4px 0px 0px #0000FF',
        'brutal-red': '4px 4px 0px 0px #FF0000',
      }
    },
  },
  plugins: [],
}
