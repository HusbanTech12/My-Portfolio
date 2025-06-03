/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
  "./app/**/*.{js,ts,jsx,tsx}",       // ← Next.js app directory (for Next 13+)
  "./pages/**/*.{js,ts,jsx,tsx}",     // ← traditional pages directory
  "./components/**/*.{js,ts,jsx,tsx}",// ← reusable components
  "./src/**/*.{js,ts,jsx,tsx}",       // ← if you use /src structure
],

  theme: {
    extend: {},
  },
  plugins: [],
}

