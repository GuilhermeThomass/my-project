/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        boxShadow: {
            'inv': '12px 12px 12px rgba(0,0,0,0.1),-12px -12px 10px -10px rgba(255,255,255,0.1)',
          }
    },
  },
  plugins: [],
}
