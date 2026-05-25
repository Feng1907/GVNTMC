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
        primary: {
          DEFAULT: "#1B4FBF",
          50: "#EBF0FB",
          100: "#C2D2F4",
          200: "#99B4ED",
          300: "#7096E6",
          400: "#4778DF",
          500: "#1B4FBF",
          600: "#1641A0",
          700: "#0F3A8F",
          800: "#0D3180",
          900: "#0A2560",
        },
        secondary: {
          DEFAULT: "#0F3A8F",
          dark: "#0A2560",
        },
        accent: {
          DEFAULT: "#F97316",
          light: "#FB923C",
          dark: "#EA6C0A",
        },
        neutral: {
          light: "#F8FAFC",
          border: "#E2E8F0",
        },
        text: {
          primary: "#1E293B",
          secondary: "#64748B",
          light: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 16px 0 rgba(27,79,191,0.12)",
        nav: "0 2px 16px 0 rgba(0,0,0,0.08)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #1B4FBF 0%, #0F3A8F 100%)",
        "gradient-hero": "linear-gradient(135deg, #0F3A8F 0%, #1B4FBF 60%, #2563EB 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
