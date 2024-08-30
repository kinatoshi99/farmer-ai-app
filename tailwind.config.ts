import type { Config } from "tailwindcss";

const config: Config = {
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
    },
  },
  // add daisyUI plugin
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: {
      mytheme: {
        primary: "#ff00ff",
        secondary: "#0000ff",
        accent: "#00ff00",
        neutral: "#ff00ff",
        "base-100": "#ff00ff",
        info: "#0000ff",
        success: "#00ff00",
        warning: "#00ff00",
        error: "#ffff00",
      },
    },
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;
