/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans"],
      },
      fontSize: {
        xs: "0.6rem", // Ukuran font ekstra kecil
        sm: "0.75rem", // Ukuran font kecil
        base: ".9rem", // Ukuran font dasar
        lg: "1.125rem", // Ukuran font besar
        xl: "1.25rem", // Ukuran font ekstra besar
        "2xl": "1.5rem", // Ukuran font sangat besar
      },
    },
  },
  plugins: ["tw-elements/dist/plugin.cjs"],
  darkMode: "class",
};
