module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // Keep dark mode disabled
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#d1e8ff', // Light blue
          DEFAULT: '#1e90ff', // Default blue
          dark: '#0056b3', // Dark blue
        },
        green: {
          light: '#d2f8d2', // Light green
          DEFAULT: '#28a745', // Default green
          dark: '#1c7430', // Dark green
        },
        gray: {
          light: '#f8f9fa', // Light gray for background
          DEFAULT: '#6c757d',
          dark: '#343a40',
        },
        white: {
          DEFAULT: '#ffffff',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
