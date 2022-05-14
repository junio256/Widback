module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        brand:{
          500: '#8257e6',
          300: '#996DFF',
          900: 'rgba(153, 109, 255, 0.25)',
        },
        BGdark: {
          900: '#161320',
          500: '#1E1E2E',
        },
        TextLight: {
          100: '#EFF2F8',
          400: '#C3BAC6',
        },
        TextDark: {
          900: '#161320',
        }

      },
      borderRadius: {
        xlg: 20,
        bg: 8,
      },
      fontFamily: {
        'source':['"Source Sans Pro"', 'ui-sans-serif', 'helvetica', 'Arial', 'sans-serif'], 
        'inter':['"Inter"', 'ui-sans-serif', 'helvetica', 'Arial', 'sans-serif'], 
      }
    }
  },
  darkMode: 'class',
  plugins: [],
}
