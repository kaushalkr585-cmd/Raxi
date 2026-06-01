/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Geist", "Satoshi", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: {
          950: "#09090B",
          900: "#0D0F14",
          850: "#111827",
          800: "#18181B",
          750: "#1F2937"
        }
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.38)",
        violet: "0 20px 70px rgba(124, 58, 237, 0.18)"
      },
      backgroundImage: {
        "radial-soft": "radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.20), transparent 42%)"
      }
    }
  },
  plugins: []
};
