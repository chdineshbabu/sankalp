/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:  "class",
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

    },
    extend: {
      fontFamily: {
        Rymaneco: "Rymaneco",
        Merriweather: "'Merriweather', serif",
        Roboto : "'Roboto', sans-serif"
      },
      colors: {
        'custom-purple': '#7E57C2',
        'sustally-violet': '#8e4dff',
        'custom-dark' : '#181818',
        'custom-grey': '#e7e7e7',
    },
    },
  },
  plugins: [],
}