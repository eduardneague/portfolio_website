/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "../src/**/*.{js,ts,jsx,tsx}",
    "../components/**/*.{js,ts,jsx,tsx}",
    "../components/*.{js,ts,jsx,tsx}",
    "../pages/**/*.{js,ts,jsx,tsx}",
    "../pages/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'very-light-gray': '#F8F8F8',
        'light-gray': '#5E5E5E',
        'light-gray': '#5E5E5E',
        'spotify-green': '#1ED760',
        'linkedin-blue': '#0274B3',
        'linkedin-light-blue': '#78CFFF',
        'custom-pink': '#D779AB',
        'japanese-red': '#FF5959',
        'github-gray': '#494949',
        'meteo-light-blue': '#58E1FF',
        'meteo-dark-blue': '#2A316F',
        'meteo-orange': '#FFC700',
      }
    },
  },
  plugins: [],
}