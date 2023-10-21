import { camelToKebab } from "./src/utils";
import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const safeColorsList = Object.keys(colors).map(
  (color) => `bg-${camelToKebab(color)}-500`
);

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [...safeColorsList],
  theme: {
    extend: {
      gridTemplateColumns: {
        "size-fruit-color": "repeat(auto-fill, minmax(175px, 1fr))",
        tiles: "repeat(auto-fill, minmax(320px, 1fr))",
      },
      gridAutoRows: {
        tiles: "minmax(80px, 1fr)",
      },
      boxShadow: {
        "sfc-active": "0 0 0 2px #333, 0 0 0 2px #eee inset",
      },
    },
  },
  plugins: [],
};
export default config;
