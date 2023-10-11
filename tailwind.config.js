/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'blue-gray-800': '#3b4252',
        'blue-gray-900': '#2e3440',
      }
    },
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /node_modules/, // Izinkan impor file CSS dari node_modules
        use: ['style-loader', 'css-loader'],
      },
      // ...
    ],
  },
}

