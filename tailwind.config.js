/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        '50': '#f3f7f8',
        '100': '#e0eaed',
        '200': '#c5d6dc',
        '300': '#9db9c3',
        '400': '#6d94a3',
        '500': '#527888',
        '600': '#466474',
        '700': '#3e5460',
        '800': '#384852',
        '900': '#323e47',
        '950': '#1e272e',
      },
      ...colors,

    },
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}
