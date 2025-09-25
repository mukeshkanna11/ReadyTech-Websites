/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Poppins font
      },
      colors: {
        brand: {
          indigo: "#4F46E5",
          yellow: "#FACC15",
          purple: "#7C3AED",
          pink: "#EC4899",
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "gradient-y": {
          "0%, 100%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "50% 100%" },
        },
        "gradient-xy": {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
        },
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "gradient-x": "gradient-x 10s ease infinite",
        "gradient-y": "gradient-y 10s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
      },
      backgroundSize: {
        "200%": "200% 200%", // for smooth gradient animations
      },
    },
  },
  plugins: [],
};
