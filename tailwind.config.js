/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.css",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#E9E3FF",
          200: "#422AFB",
          300: "#422AFB",
          400: "#7551FF",
          500: "#422AFB",
          600: "#3311DB",
          700: "#02044A",
          800: "#190793",
          900: "#11047A",
        },
        navy: {
          50: "#d0dcfb",
          100: "#aac0fe",
          200: "#a3b9f8",
          300: "#728fea",
          400: "#3652ba",
          500: "#1b3bbb",
          600: "#24388a",
          700: "#1B254B",
          800: "#111c44",
          900: "#0b1437",
        },
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}