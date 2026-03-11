import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{ts,tsx,tsx,mdx}',
    './src/components/**/*.{ts,tsx,tsx,mdx}',
    './src/app/**/*.{ts,tsx,tsx,mdx}',
    './src/**/*.{ts,tsx,tsx,mdx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
      colors: {
        border: "#414868",
        input: "#414868",
        ring: "#7aa2f7",
        background: "#1a1b26", /* Authentic Tokyo Night Background */
        foreground: "#c0caf5", /* Authentic Tokyo Night Foreground */
        primary: {
          DEFAULT: "#7aa2f7", /* Tokyo Night Blue */
          foreground: "#1a1b26",
        },
        secondary: {
          DEFAULT: "#bb9af7", /* Tokyo Night Purple */
          foreground: "#1a1b26",
        },
        destructive: {
          DEFAULT: "#f7768e", /* Tokyo Night Red */
          foreground: "#1a1b26",
        },
        muted: {
          DEFAULT: "#24283b", /* Tokyo Night Darker BG */
          foreground: "#a9b1d6", /* Tokyo Night Muted Text */
        },
        accent: {
          DEFAULT: "#24283b",
          foreground: "#c0caf5",
        },
        popover: {
          DEFAULT: "#16161e", /* Tokyo Night Darkest BG */
          foreground: "#c0caf5",
        },
        card: {
          DEFAULT: "#16161e",
          foreground: "#c0caf5",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
