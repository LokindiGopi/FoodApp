/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 10px rgb(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
