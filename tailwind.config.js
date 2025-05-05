// tailwind.config.js
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#08513f',     // Classic green
          secondary: '#f1c152',   // Gold
          dark: '#0d0d0d',        // Dark
        },
      },
    },
    plugins: [],
  }
  