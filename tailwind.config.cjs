const defaultTheme = require("tailwindcss/defaultTheme");

/* eslint @typescript-eslint/no-var-requires: "off" */
const { typewindTransforms } = require("typewind/transform");

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: {
    files: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    transform: typewindTransforms,
  },
  darkMode: "class",
  theme: {
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    future: {
      hoverOnlyWhenSupported: true,
    },
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "#fcfcfc",
        foreground: "#1f1e1e",
        aromaGray: {
          50: "#fafafa",
          100: "#efeff0",
          200: "#dbdbde",
          300: "#c8c7cc",
          400: "#95949e",
          500: "#666570",
          600: "#4c4b55",
          700: "#3c3b43",
          800: "#262629",
          900: "#18181b",
        },
        cream: {
          50: "#f8f8f2",
          100: "#f3f3ee",
          200: "#eae2de",
          300: "#dad0ca",
          400: "#af9f94",
          500: "#7e6f64",
          600: "#595249",
          700: "#453f3a",
          800: "#2a2523",
          900: "#1c1917",
        },
        dullBlue: {
          50: "#f8fafc",
          100: "#f0f5fa",
          200: "#e0e7f3",
          300: "#c5d4e9",
          400: "#87a2cc",
          500: "#5a739b",
          600: "#415473",
          700: "#30405b",
          800: "#1d293e",
          900: "#10172a",
        },
      },
    },
  },
  plugins: [],
};
