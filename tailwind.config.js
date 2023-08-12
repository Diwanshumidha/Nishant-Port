/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        'stylish':'Fleur De Leah'
      },
      fontSize: {
        '-2': 'var(--step--2)',
        '-1': 'var(--step--1)',
        '0': 'var(--step-0)',
        '1': 'var(--step-1)',
        '2': 'var(--step-2)',
        '3': 'var(--step-3)',
        '4': 'var(--step-4)',
        '5': 'var(--step-5)',
      },
      colors: {
        foreground: 'var(--foreground-rgb)',
        'background-start': 'var(--background-start-rgb)',
        'background-end': 'var(--background-end-rgb)',
      },
    },
  },
  plugins: [],
}
