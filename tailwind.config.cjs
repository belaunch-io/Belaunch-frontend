/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mini: "400px",
        // => @media (min-width: 400px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        medium: "1050px",
        // => @media (min-width: 1050px) { ... }
        tablet: "1180px",
        // => @media (min-width: 1180px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        xxl: "1600px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
