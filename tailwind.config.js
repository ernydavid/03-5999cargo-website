/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react"

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      themes: {
        light: {
          // custom colors
          colors: {
            background: {
              50: "#FFFFFF",
              100: "#FDFFFF",
              200: "#F9FEFF",
              300: "#F7FDFF",
              400: "#F2FCFF",
              500: "#E9FAFF",
              600: "#E6F9FF",
              700: "#E0F7FF",
              800: "#D1F4FF",
              900: "#B7EEFF",
              foreground: "#103A6A",
              DEFAULT: "#E9FAFF",
            },
            foreground: "#1A3E66",
            primary: {
              50: "#E3ECF7",
              100: "#B8D0EB",
              200: "#9DBCDE",
              300: "#6E90B5",
              400: "#385E89",
              500: "#1A3E66",
              600: "#F182F6",
              700: "#0B284A",
              800: "#06203E",
              900: "#011021",
              foreground: "#EDF5FE",
              DEFAULT: "#1A3E66",
            },
            secondary: {
              50: "#EDF5FE",
              100: "#B8D5F6",
              200: "#96C0F0",
              300: "#7BA9DC",
              400: "#5083BE",
              500: "#275A94",
              600: "#0F3F76",
              700: "#082C54",
              800: "#032041",
              900: "#011731",
              foreground: "#EDF5FE",
              DEFAULT: "#275A94",
            }
          },
        },
        dark: {
          // custom colors
          colors: {
            background: {
              50: "#0C2877",
              100: "#0C2671",
              200: "#0B2161",
              300: "#0A1E56",
              400: "#06153F",
              500: "#040F2E",
              600: "#040F2D",
              700: "#040D28",
              800: "#030B21",
              900: "#020717",
              DEFAULT: "#040F2E",
              foreground: "#FFFFFF",
            },
            primary: {
              50: "#E3ECF7",
              100: "#B8D0EB",
              200: "#9DBCDE",
              300: "#6E90B5",
              400: "#385E89",
              500: "#1A3E66",
              600: "#F182F6",
              700: "#0B284A",
              800: "#06203E",
              900: "#011021",
              foreground: "#EDF5FE",
              DEFAULT: "#1A3E66",
            },
            secondary: {
              50: "#EDF5FE",
              100: "#B8D5F6",
              200: "#96C0F0",
              300: "#7BA9DC",
              400: "#5083BE",
              500: "#275A94",
              600: "#0F3F76",
              700: "#082C54",
              800: "#032041",
              900: "#011731",
              foreground: "#EDF5FE",
              DEFAULT: "#275A94",
            }
          },
        }
      }
    })
  ],
}

