/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#b88b40",
          light: "#dbc8a9",
          dark: "#8a6520",
        },
        charcoal: {
          DEFAULT: "#1a1a1a",
          light: "#2d2d2d",
        },
        cream: {
          DEFAULT: "#faf7f2",
          dark: "#f0ebe0",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #b88b40 0%, #dbc8a9 50%, #b88b40 100%)",
        "dark-gradient": "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
      },
    },
  },
  plugins: [],
};


