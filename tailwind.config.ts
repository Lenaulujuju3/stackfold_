import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cinematic day-to-night gradient palette
        dawn: "#FFEEDD",      // hero background glow
        sunrise: "#FFB97A",   // accent highlights
        zenith: "#FF4F79",    // primary CTA
        dusk: "#2A2D3E",      // glass cards
        midnight: "#0D0F1A",  // body background
        frost: "rgba(255, 255, 255, 0.06)", // glass border

        background: "hsl(var(--background))",
        surface: {
          DEFAULT: "hsl(var(--surface))",
          glass: "rgba(17,17,26,0.45)",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          1: "hsl(var(--accent-teal))",
          2: "hsl(var(--accent-blue))",
          3: "hsl(var(--accent-amber))",
        },
        muted: "hsl(var(--muted))",
      },
      borderRadius: {
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full: "9999px",
      },
      boxShadow: {
        glow: "0 10px 40px rgba(0,0,0,0.35)",
      },
      fontFamily: {
        display: ["var(--font-sf-pro-display)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0px)" },
        },
        meteor: {
          "0%": { transform: "rotate(0deg) translateX(0)" },
          "100%": { transform: "rotate(360deg) translateX(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 600ms ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "slow-pulse": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        meteor: "meteor 12s linear infinite",
      },
    },
  },
  plugins: [animate],
};
export default config;
