/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#FAFAFA",
          surface: "#FFFFFF",
          raised: "#F3F4F6",
          border: "#E5E7EB",
        },
        ink: {
          DEFAULT: "#111827",
          muted: "#4B5563",
          faint: "#9CA3AF",
        },
        accent: {
          DEFAULT: "#FF5722",
          soft: "#FF7A50",
          dim: "#EA580C",
        },
        signal: {
          DEFAULT: "#16A34A",
          soft: "#22C55E",
        },
        warn: "#D97706",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(255,87,34,0.04), transparent 60%)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(255,87,34,0.08), transparent 55%)",
      },
      boxShadow: {
        glow: "0 2px 20px rgba(255,87,34,0.18)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};
