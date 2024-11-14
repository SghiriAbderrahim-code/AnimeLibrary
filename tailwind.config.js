/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#34d399',
          dark: '#065f46',
        },
        gray: {
          light: '#f3f4f6',
          dark: '#374151',
        },
      },
    },
  },
  
  plugins: [],
};
