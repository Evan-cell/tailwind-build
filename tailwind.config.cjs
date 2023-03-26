/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'violet': 'rgb(75,0,130)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
