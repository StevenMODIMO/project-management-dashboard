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
        "custom-green": "#213D04",
        "custom-yellow": "#57A30C",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #213D04 15.77%, #57A30C 50.65%)",
      },
    },
  },
  plugins: [],
};
export default config;
