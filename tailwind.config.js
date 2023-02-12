/** @type {import('tailwindcss').Config} */

const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
    ...defaultColors,
    ...{
        "custom-green": {
            "500": "#84C00B",
        },
        "custom-blue": {
          "500": "#006774",
      },
      "custom-grey" : {
        "500": "rgba(145, 143, 143, 0.05)"
      }
    },
}


module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      "colors": colors,
      backgroundImage: {
        'hero': "url('./assets/largeLogo.svg')",
      },
    },
  },
  
  plugins: [],
}