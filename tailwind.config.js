/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        jhg: {
          "primary": "#FFDD0E",
          "secondary": "#0C242D",
          "accent": "#00AEAE",
          "neutral": "rgba(71,89,98,0.24)",
          "base-100": "#ffffff",
          "info": "#ffffff",
          "success": "#009834",
          "warning": "#FF819F",
          "error": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

