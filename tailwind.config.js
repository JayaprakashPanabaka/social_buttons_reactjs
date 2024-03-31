/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        socialButtonsBg:          "url('https://assets.ccbp.in/frontend/react-js/social-buttons-bg.png')",
      },
    },
  },
  plugins: [],
};
