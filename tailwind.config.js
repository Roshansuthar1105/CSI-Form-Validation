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
        },
      },
    },
    plugins: [],
  }