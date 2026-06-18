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
        primary:   "#3B82F6",
        secondary: "#8B5CF6",
        accent:    "#3B82F6",
        "bg-base": "#050505",
        "bg-1":    "#050505",
        "bg-2":    "#0a0a0a",
        "bg-3":    "#111111",
        "border-c":"rgba(255,255,255,0.08)",
        "text-1":  "#FFFFFF",
        "text-2":  "#9CA3AF",
        "text-3":  "#6B7280",
        "card":    "rgba(255,255,255,0.04)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        geist: ["var(--font-geist)", "Inter", "sans-serif"],
        vt323: ["VT323", "monospace"],
      },
      maxWidth: {
        content: "1400px",
      },
      backgroundImage: {
        "grad-main": "linear-gradient(135deg, #3B82F6, #8B5CF6)",
        "grad-alt":  "linear-gradient(135deg, #8B5CF6, #3B82F6)",
        "grad-subtle": "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.08))",
      },
      backdropBlur: {
        glass: "10px",
      },
      animation: {
        float:        "float 8s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "grid-move":  "gridMove 20s linear infinite",
        "glow-pulse": "glowPulse 6s ease-in-out infinite",
        shimmer:      "shimmer 3s ease-in-out infinite",
        "spin-slow":  "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":       { transform: "translateY(-16px)" },
        },
        gridMove: {
          "0%":   { transform: "translateY(0)" },
          "100%": { transform: "translateY(60px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%":       { opacity: "0.7" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
