/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#6366F1',
        'accent-color': '#3f83f8',
        'text-color': '#333333',
        'link-color': '#2563eb',
        'background-color': '#ffffff',
        'light-gray': '#f0f0f0',
        'gray': '#808080',
        'dark-gray': '#555',
      },
    },
  },
  plugins: [],
}