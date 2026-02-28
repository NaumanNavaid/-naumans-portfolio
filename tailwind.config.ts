import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        'muted-light': "var(--muted-light)",
        accent: "var(--accent)",
        'accent-hover': "var(--accent-hover)",
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.03)",
          dark: "rgba(0, 0, 0, 0.2)",
          border: "rgba(255, 255, 255, 0.08)",
          'border-dark': "rgba(255, 255, 255, 0.05)",
        }
      },
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
        '3xl': '60px',
      },
      boxShadow: {
        'spatial-sm': '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
        'spatial-md': '0 20px 48px -12px rgba(0, 0, 0, 0.2), 0 8px 24px -8px rgba(0, 0, 0, 0.1)',
        'spatial-lg': '0 40px 80px -20px rgba(0, 0, 0, 0.3), 0 12px 32px -12px rgba(0, 0, 0, 0.1)',
        'glass-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-dark': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)',
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter: '-0.02em',
        tight: '-0.01em',
        relaxed: '0.01em',
        wide: '0.025em',
      },
      fontSize: {
        'display-lg': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '800' }],
        'display-md': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-sm': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
