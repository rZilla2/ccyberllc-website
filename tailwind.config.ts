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
        border: "#2a2e32",
        input: "#1e2226",
        ring: "#b07070", /* dusty rose */
        background: "#000000", /* pure black */
        foreground: "#c0c8ce", /* steel gray */
        primary: {
          DEFAULT: "#b07070", /* dusty rose */
          foreground: "#101418",
        },
        secondary: {
          DEFAULT: "#a8b0b8", /* silver gray */
          foreground: "#101418",
        },
        destructive: {
          DEFAULT: "#c44040",
          foreground: "#101418",
        },
        muted: {
          DEFAULT: "#1e2226",
          foreground: "#858d94",
        },
        accent: {
          DEFAULT: "#1e2226",
          foreground: "#c0c8ce",
        },
        popover: {
          DEFAULT: "#161a1e",
          foreground: "#c0c8ce",
        },
        card: {
          DEFAULT: "#161a1e",
          foreground: "#c0c8ce",
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
