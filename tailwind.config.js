/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#002B5B',
          container: '#046BD2',
          fixed: '#D6E3FF',
        },
        secondary: {
          DEFAULT: '#006B55',
          cyan: '#06D3AA',
          fixed: '#57FCD1',
        },
        surface: {
          DEFAULT: '#F9F9FF',
          low: '#F0F3FF',
          lowest: '#FFFFFF',
          dim: '#CFDAF2',
          variant: '#D8E3FB',
        }
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        ambient: '0 12px 32px -4px rgba(17, 28, 45, 0.06)',
      }
    },
  },
  plugins: [],
}
