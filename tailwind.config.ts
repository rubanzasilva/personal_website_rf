import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F39C12',
          50: '#FEF5E7',
          100: '#FDEBD0',
          200: '#FAD7A0',
          300: '#F8C471',
          400: '#F5B041',
          500: '#F39C12',
          600: '#E67E22',
          700: '#D35400',
          800: '#BA4A00',
          900: '#A04000',
        },
        secondary: {
          DEFAULT: '#3498DB',
          50: '#EBF5FB',
          500: '#3498DB',
          600: '#2980B9',
          700: '#21618C',
        }
      },
      fontFamily: {
        'mono': ['Consolas', 'Monaco', 'Courier New', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config