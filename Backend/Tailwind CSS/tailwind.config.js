/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        indigo: {
          500: "oklch(0.66 0.01 252.25)", // override indigo-500
        },
      },
    },
  },
  plugins: [],
}
