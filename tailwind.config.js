/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [ 
      "night",
      {
        customTheme: {
          
        }
      }
     ],
  },
  plugins: [require("daisyui")],
}

