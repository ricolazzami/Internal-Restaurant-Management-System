import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed": "#2e1500",
        "on-primary-container": "#858383",
        "tertiary": "#000000",
        "on-tertiary-fixed-variant": "#474745",
        "error": "#ba1a1a",
        "primary-fixed": "#e5e2e1",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#fbf2eb",
        "on-secondary": "#ffffff",
        "tertiary-fixed": "#e4e2df",
        "surface-tint": "#5f5e5e",
        "primary-container": "#1c1b1b",
        "outline": "#747878",
        "on-tertiary": "#ffffff",
        "tertiary-fixed-dim": "#c8c6c4",
        "surface-bright": "#fff8f4",
        "on-background": "#1f1b17",
        "primary-fixed-dim": "#c8c6c5",
        "surface-container": "#f5ece6",
        "secondary": "#7f5531",
        "on-primary-fixed": "#1c1b1b",
        "error-container": "#ffdad6",
        "on-tertiary-fixed": "#1b1c1a",
        "primary": "#000000",
        "surface-container-highest": "#eae1da",
        "surface": "#fff8f4",
        "on-error-container": "#93000a",
        "on-tertiary-container": "#848481",
        "surface-container-high": "#f0e6e0",
        "on-secondary-fixed-variant": "#643e1c",
        "on-surface": "#1f1b17",
        "on-primary-fixed-variant": "#474746",
        "secondary-fixed-dim": "#f3bb90",
        "surface-dim": "#e1d8d2",
        "surface-variant": "#eae1da",
        "secondary-container": "#ffc69a",
        "inverse-on-surface": "#f8efe8",
        "on-primary": "#ffffff",
        "on-error": "#ffffff",
        "secondary-fixed": "#ffdcc2",
        "inverse-primary": "#c8c6c5",
        "tertiary-container": "#1b1c1a",
        "inverse-surface": "#34302b",
        "outline-variant": "#c4c7c7",
        "background": "#fff8f4",
        "on-surface-variant": "#444748",
        "on-secondary-container": "#7a512d"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "margin-page": "20px",
        "padding-card": "20px",
        "radius-sm": "12px",
        "radius-default": "20px",
        "gutter-stack": "16px"
      },
      fontFamily: {
        "label-caps": ["Plus Jakarta Sans"],
        "display-lg": ["Playfair Display"],
        "headline-md": ["Playfair Display"],
        "body-md": ["Plus Jakarta Sans"],
        "price-display": ["Plus Jakarta Sans"],
        "body-lg": ["Plus Jakarta Sans"],
        "headline-sm": ["Playfair Display"]
      },
      fontSize: {
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "700" }],
        "display-lg": ["40px", { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "price-display": ["20px", { lineHeight: "24px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "500" }],
        "headline-sm": ["22px", { lineHeight: "28px", fontWeight: "600" }]
      }
    },
  },
  plugins: [forms, containerQueries],
}
