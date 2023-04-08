/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideIn: 'slideIn 1s forwards',
        fallDown: 'fallDown 1s forwards',
        rotateBounce: 'rotateBounce 1s forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fallDown: {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        rotateBounce: {
          '0%': { transform: 'translateY(-100%) rotate(-45deg)' },
          '50%': { transform: 'translateY(0%) rotate(-45deg)' },
          '100%': { transform: 'translateY(0%) rotate(0deg)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};