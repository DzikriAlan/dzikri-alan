import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sora)", "sans-serif"],
        display: ["var(--font-sora)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },

      colors: {
        // === Brand ===
        brand: {
          50: "#F6FFE7",
          100: "#E8FFC2",
          200: "#D6FF8A",
          300: "#C2FF4D",
          400: "#B2FF1F",
          500: "#A3FF12", // Primary
          600: "#8DE10C",
          700: "#6EAF08",
          800: "#4F7D05",
          900: "#314E03",
          DEFAULT: "#A3FF12",
        },

        // === Dark Surface ===
        neutral: {
          950: "#050505",
          900: "#080808",
          850: "#0C0C0C",
          800: "#101010",
          700: "#171717",
          600: "#222222",
          500: "#2F2F2F",
          400: "#5E5E5E",
          300: "#8F8F8F",
          200: "#C9C9C9",
          100: "#ECECEC",
          50: "#FAFAFA",
        },

        // === Glass Card ===
        surface: {
          DEFAULT: "#0E0E0E",
          elevated: "#121212",
          card: "#151515",
          hover: "#1B1B1B",
          border: "#242424",
        },

        // === Accent ===
        success: "#6CFF8D",
        warning: "#FFC857",
        danger: "#FF5F5F",
        info: "#58A6FF",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        chart: {
          1: "#A3FF12",
          2: "#6CFF8D",
          3: "#58A6FF",
          4: "#FFC857",
          5: "#FF5F5F",
        },
      },

      borderRadius: {
        xs: "6px",
        sm: "10px",
        md: "14px",
        lg: "18px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
        full: "9999px",
      },

      boxShadow: {
        glow: "0 0 30px rgba(163,255,18,.25)",
        "glow-lg": "0 0 80px rgba(163,255,18,.35)",
        card: "0 8px 40px rgba(0,0,0,.35)",
        soft: "0 4px 24px rgba(0,0,0,.25)",
      },

      backgroundImage: {
        "grid-dark":
          "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
        "radial-brand":
          "radial-gradient(circle at center, rgba(163,255,18,.25) 0%, rgba(163,255,18,.08) 35%, transparent 70%)",
        "hero-gradient":
          "radial-gradient(circle at top right, rgba(163,255,18,.22), transparent 45%), radial-gradient(circle at bottom left, rgba(163,255,18,.12), transparent 35%)",
      },

      backgroundSize: {
        grid: "48px 48px",
      },

      animation: {
        glow: "glow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        grid: "grid 20s linear infinite",
      },

      keyframes: {
        glow: {
          "0%,100%": {
            boxShadow: "0 0 15px rgba(163,255,18,.18)",
          },
          "50%": {
            boxShadow: "0 0 45px rgba(163,255,18,.45)",
          },
        },

        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },

        grid: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "48px 48px",
          },
        },
      },

      backdropBlur: {
        xs: "2px",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(.22,.61,.36,1)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;