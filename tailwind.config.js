/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#090A0F",
          surface: "#11131A",
          raised: "#181B24",
          border: "#202430",
        },
        ink: {
          DEFAULT: "#F3F4F6",
          muted: "#94A3B8",
          faint: "#525866",
        },
        accent: {
          DEFAULT: "#6366F1",
          soft: "#818CF8",
          dim: "#312E81",
        },
        signal: {
          DEFAULT: "#10B981",
          soft: "#34D399",
        },
        warn: "#F59E0B",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(99,102,241,0.06), transparent 60%)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(99,102,241,0.15), transparent 55%)",
      },
      boxShadow: {
        glow: "0 0 35px rgba(99,102,241,0.22)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};
