/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#e74c3c",
        background: "#f4f4f4",
        text: "#333333",
      },
    },
  },
  plugins: [],
};
