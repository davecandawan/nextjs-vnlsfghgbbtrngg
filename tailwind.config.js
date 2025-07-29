/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  corePlugins: {
    preflight: true,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        stratum: ['StratumNo1-Black', 'sans-serif'],
      },
      animation: {
        'custom-pulse': 'custom-pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        'custom-pulse': {
          '0%, 100%': { opacity: '0.736288', transform: 'scale(0.912096)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        'fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      colors: {
        custom: {
          green: '#2afe4e',
        },
        primary: {
          DEFAULT: '#0a0a0a',
          light: '#333333',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#f16500',
          light: '#ff8c42',
          dark: '#b84d00',
        },
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        stratum: ['StratumNo1-Black', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Add other plugins here if needed
  ],
}
