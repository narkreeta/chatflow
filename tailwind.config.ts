// import type { Config } from "tailwindcss";     //TypeScript type imports are not allowed in JavaScript [E0270]

const config = {     //TypeScript type annotations are not allowed in JavaScript code [E0224]
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        "cf-primary" : "#1a222b",
        "cf-secondary" : "#57A6A1"
      }
    },
  },
  plugins: [],
};
export default config;