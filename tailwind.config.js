/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0A0B0F",
          surface: "#121319",
          raised: "#181A21",
          border: "#23262E",
        },
        ink: {
          DEFAULT: "#F3F4F6",
          muted: "#9AA1AC",
          faint: "#5B616D",
        },
        accent: {
          DEFAULT: "#6E56CF",
          soft: "#8B76E0",
          dim: "#3D3164",
        },
        signal: {
          DEFAULT: "#33D6A6",
          soft: "#5FE8BE",
        },
        warn: "#E0B341",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(110,86,207,0.08), transparent 60%)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(110,86,207,0.18), transparent 55%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(110,86,207,0.25)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};
