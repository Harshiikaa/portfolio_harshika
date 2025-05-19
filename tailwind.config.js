/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // optional if you want to toggle themes later
  theme: {
    extend: {
      colors: {
        // Vibrant Theme Colors Based on Your Home Section
        dark: '#0F172A',               // general background (near dark blue)
        light: '#F9FAFB',              // light text
        primary: '#DC2626',            // red accent
        secondary: '#DB2777',
        tertiary: '#F9A8D4',        // pink-ish accent
        muted: '#9CA3AF',              // softer gray for subtext
        accent: '#4F46E5',             // vibrant blue accent
        error: '#EF4444',
        gray: {
          750: '#2D2D2D',              // additional dark gray
        },
        gradientStart: '#6B21A8',      // purple-800
        gradientMid: '#DB2777',        // pink-600
        gradientEnd: '#312E81',        // indigo-900
      },
      backgroundImage: {
        'home-gradient': 'linear-gradient(to bottom right, #6B21A8, #DB2777, #312E81)',
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        confetti: 'confetti 1s ease-out forwards',
        jump: 'jump 0.5s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        confetti: {
          '0%': { opacity: 1, transform: 'translateY(0) scale(1)' },
          '100%': { opacity: 0, transform: 'translateY(-100px) scale(0.5)' },
        },
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};



// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#DC2626',        
//         secondary: '#0F766E',
//         dark: '#1F2937',
//         light: '#F9FAFB',
//         muted: '#6B7280',
//         accent: '#4F46E5',       
//         error: '#EF4444',
//         gray: {
//           750: '#2d2d2d'
//         },
//       },
//       animation: {
//         float: 'float 6s ease-in-out infinite',
//         confetti: 'confetti 1s ease-out forwards',
//         jump: 'jump 0.5s ease-in-out'
//       },
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-20px)' }
//         },
//         confetti: {
//           '0%': { opacity: 1, transform: 'translateY(0) scale(1)' },
//           '100%': { opacity: 0, transform: 'translateY(-100px) scale(0.5)' }
//         },
//         jump: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-10px)' }
//         }
//       },
//       fontFamily: {
//         roboto: ["Roboto", "sans-serif"],
//         poppins: ["Poppins", "sans-serif"],
//       }
//     },
//   },
//   plugins: [],
// }