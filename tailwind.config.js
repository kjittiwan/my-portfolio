/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ecf0f3',
        content: '#1f2937',
        accent: '#5651e5',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1200px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}
