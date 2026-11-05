import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          canvas: "var(--color-canvas)",
          surface: "var(--color-surface)",
          subtle: "var(--color-surface-subtle)",
          obsidian: "var(--color-obsidian)",
          obsidianElevated: "var(--color-obsidian-elevated)",
          ink: "var(--color-ink)",
          secondary: "var(--color-ink-secondary)",
          tertiary: "var(--color-ink-tertiary)",
          blue: "var(--color-accent)",
          blueHover: "var(--color-accent-hover)",
          emerald: "var(--color-emerald)",
          border: "var(--border-hairline)",
          btnBg: "var(--color-btn-bg)",
          btnText: "var(--color-btn-text)",
          inputBg: "var(--color-input-bg)",
          inputFocusBg: "var(--color-input-focus-bg)",
        },
      },
      borderRadius: {
        bento: "28px",
        card: "20px",
        control: "12px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
