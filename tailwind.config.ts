import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)", "Inter", "sans-serif"],
      display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
      mono: ["var(--font-mono)", "IBM Plex Mono", "monospace"]
    },
    extend: {
      colors: {
        background: "#dcdcd4",
        foreground: "#141412",
        accent: "#62b8b1",
        muted: "#505048",
        card: "#f1f1eb",
        border: "#c8c8bf"
      }
    }
  },
  plugins: []
};

export default config;

