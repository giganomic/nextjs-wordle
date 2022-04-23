module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
          shake: {
            '10%, 90%': {
                transform: 'translate(-1px, 0)'
            },
            '20%, 80%': {
                transform: 'translate(2px, 0)'
            },
            '30%, 50%, 70%': {
                transform: 'translate(-4px, 0)'
            },
            '40%, 60%': {
                transform: 'translate(4px, 0)'
            },
        },
        fadeInOut: {
          '0%, 100%': {
            opacity: 0
          },
          '30%, 70%': {
            opacity: 1
          }
        },
        fontSize: {
          '0%': {
            transform: 'scale(0.5)'
          },
          '100%': {
            transform: 'scale(1.5)'
          }
        }
      },
      animation: {
          shake: 'shake 820ms cubic-bezier(.36,.07,.19,.97) both',
          fadeInOut: 'fadeInOut 4s, fontSize 4s'
      }
    },
  },
  plugins: [],
}
