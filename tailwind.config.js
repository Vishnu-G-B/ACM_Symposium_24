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
        primary: "#82cfff",
        onPrimary: "#00344b",
        primaryContainer: "#004c6b",
        onPrimaryContainer: "#c6e7ff",
        surface: "#191c1e",
        onSurface: "#e2e2e5",
      },
      fontFamily: {
        outwardBlock: ["Outward-Block", "Helvetica"],
        subjectivityMedSlant: ["Subjectivity-medSlant", "Helvetica"],
        humaneSemiBold: ["Humane-SemiBold","Helvetica"],
        basebornSans: ["BaseBornSans","Helvetica"],
        TWK: ["TWK","Helvetica"]
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
