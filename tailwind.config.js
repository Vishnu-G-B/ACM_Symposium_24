/** @type {import('tailwindcss').Config} */

import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import aspectRatio from '@tailwindcss/aspect-ratio';
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'Smobile': '335px',
      'Mmobile': '376px',
      'Lmobile': '440px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#6d30e9",
        onPrimary: "#ffffff",
        primaryContainer: "#e9ddff",
        onPrimaryContainer: "#22005d",
        surface: "#fffbff",
        onSurface: "#1c1b1e",
      },
      fontFamily: {
        outwardBlock: ["Outward-Block", "Helvetica"],
        subjectivityMedSlant: ["Subjectivity-medSlant", "Helvetica"],
        subjectivityRegSlant: ["Subjectivity-regSlant", "Helvetica"],
        humaneSemiBold: ["Humane-SemiBold","Helvetica"],
        humaneThin: ["Humane-Thin","Helvetica"],
      },
    },
  },
  plugins: [
    require("daisyui"),
    aspectRatio,
    addVariablesForColors,
  ],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars
  });
}
