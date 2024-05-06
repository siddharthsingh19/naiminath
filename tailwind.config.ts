// tailwind.config.js

// Import necessary types
import type { Config } from "tailwindcss";

// Define the configuration for Tailwind CSS
const tailwindConfig: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   // "./node_modules/flowbite-react/**/*.js", // Add the content from the first config
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#18222f",
        page: "#2b3441",
        card: "#47566a",
        "card-hover": "#4f5e74",
        "default-text": "#f1f3f5",
        "blue-accent": "#0084d4",
        "blue-accent-hover": "#009fff",
      },
    },
    
  },
  plugins: [
    
    // Add the plugins from both configs
   // require("flowbite/plugin"),
  ],
};

// Export the merged configuration
export default tailwindConfig;
