/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       spacing: {
        '128': '32rem',
      },
      colors: {
        black: {
          '900': "#111827",
          '1000': "#302a44",
          '650': "#27272a",
          '750':"#433351",
        }
      }
    },
  },
  plugins: [],
}

