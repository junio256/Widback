module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          800: 'rgba(153,109,255,0.4)',
          500: '#8257e6',
          300: '#996DFF',
        },
        lightSurface: {
          100: '#EFF2F8',
          400: '#DCE3F1',
          600: '#C3BAC6',
        },
        darkSurface: {
          900: '#161320',
          800: '#1E1E2E',
          700: '#575268',
          600: '#6E6C7E',
          100: '#F4F4F5',
        },
        lightText: {
          900: '#161320',
          600: '#575268',
        },
        darkText: {
          100: '#D9E0EE',
          400: '#6E6C7E',
          800: '#202036'
        }

      },
      borderRadius: {
        md: '4px',
      },
      fontFamily: {
        inter: ['"inter"', 'helvetica', 'arial', 'sans-serif']
      }
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}