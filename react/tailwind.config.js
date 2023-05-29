/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        titlefont: ['CustomFont', 'alex-brush'],
      }
    },
  },
  plugins: [],
}

