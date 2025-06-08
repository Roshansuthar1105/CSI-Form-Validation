module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'], // Changed from 'pop' to 'sans' for default
          mono: ['"JetBrains Mono"', 'monospace'],
          cursive: ['"Dancing Script"', 'cursive'],
          concert: ['"Concert One"', 'cursive'],
        },backgroundImage: {
          'dark-gradient': 'linear-gradient(to right, #24243e, #302b63, #0f0c29)',
        },
      },
    },
    plugins: [],
  }