/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/components/landingcomponents/*.{js,jsx,ts,tsx}",
    "./src/components/storecomponents/*.{js,jsx,ts,tsx}"
    
  ],
  theme: {
    extend: {
      animation : {
        'pulse-bg-once': 'pulse-bg-once 1s  forwards'
      },
      keyframes : {
        'pulse-bg-once': {
          to: {backgroundColor: 'var(--tw-gradient-to)'}
        }
      },
      screens: {
        'mobile': '640px',
        // => @media (min-width: 640px) { ... }
        'laptop': "1024px",
        // => @media (min-width: 1024px) { ... }
        'desktop' : "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      h1: ["2xl"],
      h2: ["xl"],
      h3: ["lg"],

      fontSize: {
        
      }
    },
  },
  plugins: [],
}

