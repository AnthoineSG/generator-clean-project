/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@anthoinesg/lib/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F056B',
          v1: '#2B1CB8',
          v2: '#1605B8',
        },
        secondary:{
          DEFAULT: '#6B5C05',
          v1: '#B89D00',
        },
      },
    },
  },
  plugins: [],
};
