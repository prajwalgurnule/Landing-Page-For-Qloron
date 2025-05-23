/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        "primary": "#141414",
        "secondary": "#26C6DA"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem'
        },

      }
    },
  },
  plugins: [],
}

