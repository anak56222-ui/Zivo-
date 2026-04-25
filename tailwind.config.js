/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        zivo: {
          primary: "#1A1A2E",
          accent: "#F4A836",
          background: "#F8F7F4",
          success: "#1D9E75",
          danger: "#E24B4A",
        },
      },
      borderRadius: {
        card: "12px",
        button: "8px",
      },
      boxShadow: {
        card: "0 8px 24px rgba(26, 26, 46, 0.08)",
      },
    },
  },
  plugins: [],
};
