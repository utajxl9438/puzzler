/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/problems/**/*.jsx",
    "./src/components/**/*.jsx",
  ],
  theme: { extend: {} },
  plugins: [],
  safelist: ["p-2"], // force p-2 if content scan misses it (e.g. dynamic classes)
};
