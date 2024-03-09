/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        dark: "#0d0d0d",
        danger: "#fe4a23",
        positive: "#ffd027",
        current: "currentColor",
        white: "#ffffff",
        secondary: "#f0f0f0",
        secondaryalt: "#f9f9f9",
        grayalt: "#CCCCCC",
        graydeep: "#999999",
        alt: "#252525",
        greenalt: "#45C781",
        dangeralt: "#FB7052",
      },
    },
  },
  plugins: [],
};
