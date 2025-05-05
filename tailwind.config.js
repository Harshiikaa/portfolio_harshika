/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DC2626',        
        secondary: '#0F766E',
        dark: '#1F2937',
        light: '#F9FAFB',
        muted: '#6B7280',
        accent: '#4F46E5',       
        error: '#EF4444',
        gray: {
          750: '#2d2d2d'
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        confetti: 'confetti 1s ease-out forwards',
        jump: 'jump 0.5s ease-in-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        confetti: {
          '0%': { opacity: 1, transform: 'translateY(0) scale(1)' },
          '100%': { opacity: 0, transform: 'translateY(-100px) scale(0.5)' }
        },
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}