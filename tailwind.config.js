/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-blue": "0px 0px 16px 0px rgba(38, 132, 255, 0.60)",
      },
    },
    plugins: [],
  },
};
