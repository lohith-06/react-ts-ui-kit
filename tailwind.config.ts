import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0efff',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af'
        }
      }
    }
  },
  plugins: []
} satisfies Config