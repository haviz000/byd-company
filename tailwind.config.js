/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Dancings: ["Dancings", "cursive"],
        Motterdam: ["Motterdam", "cursive"],
        Motterdam2: ["Motterdam2", "cursive"],
        Brother: ["Brother", "cursive"],
      },
    },
  },
  plugins: [],
};
