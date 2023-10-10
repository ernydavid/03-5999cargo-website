/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {

    }
  },
  plugins: [
    nextui({
      themes: {
        light: {
          // custom colors
          colors: {
            background: {
              50: '#FFFFFF',
              100: '#FDFFFF',
              200: '#F9FEFF',
              300: '#F7FDFF',
              400: '#F2FCFF',
              500: '#E9FAFF',
              600: '#E6F9FF',
              700: '#E0F7FF',
              800: '#D1F4FF',
              900: '#B7EEFF',
              foreground: '#103A6A',
              DEFAULT: '#E9FAFF'
            },
            foreground: '#1A3E66'
          }
        },
        dark: {
          // custom colors
          colors: {
            background: {
              50: '#0C2877',
              100: '#0C2671',
              200: '#0B2161',
              300: '#0A1E56',
              400: '#06153F',
              500: '#040F2E',
              600: '#040F2D',
              700: '#040D28',
              800: '#030B21',
              900: '#020717',
              DEFAULT: '#040F2E',
              foreground: '#FFFFFF'
            }
          }
        }
      }
    })
  ]
}
