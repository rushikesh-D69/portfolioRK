import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:   "#3b82f6",
        secondary: "#8b5cf6",
        accent:    "#06b6d4",
        "bg-1":    "#0f172a",
        "bg-2":    "#1e293b",
        "bg-3":    "#334155",
        "border-c":"#475569",
        "text-1":  "#ffffff",
        "text-2":  "#94a3b8",
        "text-3":  "#64748b",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        vt323: ["VT323", "monospace"],
      },
      backgroundImage: {
        "grad-main": "linear-gradient(135deg, #3b82f6, #8b5cf6)",
        "grad-alt":  "linear-gradient(135deg, #06b6d4, #3b82f6)",
      },
      animation: {
        "float":  "float 6s ease-in-out infinite",
        "blink":  "blink 1s infinite",
        "bounce-scroll": "bounceScroll 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%":       { transform: "translateY(-20px) rotate(180deg)" },
        },
        blink: {
          "0%, 50%":   { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        bounceScroll: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "40%": { transform: "translateX(-50%) translateY(-10px)" },
          "60%": { transform: "translateX(-50%) translateY(-5px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
