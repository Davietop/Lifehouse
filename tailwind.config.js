/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        vr_Img: "url('../public/virtual.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
