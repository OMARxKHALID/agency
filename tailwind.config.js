/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "*.{js,js,jsx,jsx,mdx}",
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "studio-gray": "#F8F9FA",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        mundial: ["Mundial", "system-ui", "sans-serif"],
        "mundial-demi": ["Mundial Demi-bold", "system-ui", "sans-serif"],
        "mundial-bold": ["Mundial Bold", "system-ui", "sans-serif"],
        "dm-mono": ["DM Mono", "monospace"],
        schibsted: ["Schibsted Grotesk", "system-ui", "sans-serif"],
      },
      fontWeight: {
        "mundial-regular": "400",
        "mundial-demi": "600",
        "mundial-bold": "700",
        "dm-mono-medium": "500",
        "schibsted-black": "900",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
