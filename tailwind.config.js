/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Poppins font
      },
      colors: {
        brand: {
          indigo: '#4F46E5',
          yellow: '#FACC15',
          purple: '#7C3AED',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
