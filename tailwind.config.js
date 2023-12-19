/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { purple: "#3D00B7", green: "#00AC4F" },
        text: { dark: "#000000", light: "#565656", gray: "#757575" },
      },
    },
  },
  plugins: [],
};
