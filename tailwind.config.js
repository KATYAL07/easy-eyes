/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
          "error-container": "#ffdad6",
          "on-surface": "#1c1d05",
          "primary-container": "#2d2013",
          "on-secondary-fixed-variant": "#544528",
          "on-secondary-fixed": "#251a03",
          "on-error-container": "#93000a",
          "secondary": "#6d5c3d",
          "on-secondary": "#ffffff",
          "secondary-fixed": "#f7dfb9",
          "surface-dim": "#dedcb5",
          "on-primary-fixed": "#25190d",
          "tertiary-fixed": "#fcdeb6",
          "surface-container-high": "#eceac3",
          "on-secondary-container": "#716041",
          "secondary-container": "#f4ddb6",
          "primary": "#150a02",
          "on-tertiary-fixed-variant": "#574426",
          "on-background": "#1c1d05",
          "inverse-surface": "#323217",
          "surface-container-low": "#f8f6ce",
          "on-surface-variant": "#4e453e",
          "secondary-fixed-dim": "#dac49e",
          "on-tertiary": "#ffffff",
          "surface-tint": "#6d5b4b",
          "outline-variant": "#d1c4bb",
          "outline": "#7f756d",
          "background": "#fdfbd3",
          "error": "#ba1a1a",
          "on-tertiary-container": "#9f8664",
          "surface-container-lowest": "#ffffff",
          "surface-container-highest": "#e6e4be",
          "inverse-on-surface": "#f5f3cb",
          "on-error": "#ffffff",
          "on-primary-container": "#9a8674",
          "on-primary": "#ffffff",
          "inverse-primary": "#dac2af",
          "surface-container": "#f2f0c8",
          "primary-fixed": "#f7deca",
          "tertiary": "#150b00",
          "surface-bright": "#fdfbd3",
          "primary-fixed-dim": "#dac2af",
          "tertiary-container": "#2f2006",
          "surface-variant": "#e6e4be",
          "surface": "#fdfbd3",
          "on-primary-fixed-variant": "#544435",
          "tertiary-fixed-dim": "#dec29c",
          "on-tertiary-fixed": "#271902"
      },
      "borderRadius": {
          "DEFAULT": "0.125rem",
          "lg": "0.25rem",
          "xl": "0.5rem",
          "full": "0.75rem"
      },
      "spacing": {
          "margin-mobile": "16px",
          "content-gap": "32px",
          "margin-desktop": "48px",
          "gutter": "16px",
          "section-gap": "80px"
      },
      "fontFamily": {
          "headline-md": ["Montserrat"],
          "headline-lg-mobile": ["Montserrat"],
          "label-caps": ["Montserrat"],
          "body-lg": ["Plus Jakarta Sans"],
          "display-lg": ["Montserrat"],
          "headline-lg": ["Montserrat"],
          "body-md": ["Plus Jakarta Sans"]
      },
      "fontSize": {
          "headline-md": ["20px", { "lineHeight": "28px", "letterSpacing": "0.02em", "fontWeight": "600" }],
          "headline-lg-mobile": ["24px", { "lineHeight": "32px", "letterSpacing": "0.05em", "fontWeight": "700" }],
          "label-caps": ["11px", { "lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "700" }],
          "body-lg": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
          "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "0.05em", "fontWeight": "700" }],
          "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "0.05em", "fontWeight": "700" }],
          "body-md": ["14px", { "lineHeight": "22px", "fontWeight": "400" }]
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}
