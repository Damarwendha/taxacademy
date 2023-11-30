/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: {
      brand: {
        primary: "var(--color-brand-primary)",
        secondary: "var(--color-brand-secondary)",
        inverted: "var(--color-brand-inverted)",
      },
      classic: {
        white: "var(--color-white)",
        black: "var(--color-black)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
