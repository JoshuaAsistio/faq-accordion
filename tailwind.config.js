/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      screens: {
        md: "720px",
        // => @media (min-width: 720px) { ... }
      },
      backgroundImage: {
        "mobile-pattern": "url('images/background-pattern-mobile.svg')",
        "desktop-pattern": "url('images/background-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
};
