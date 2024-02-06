import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#353b48",
        primaryText: "#f5f6fa",
        primaryBtn: "#00a8ff",
        primaryAccent: "#0097e6",
      },
    },
  },
  plugins: [],
};
export default config;
