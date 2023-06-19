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
      "forest",
      "halloween",
      {
        customTheme: {
          
        }
      }
     ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

