import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
  	extend: {
  		container: {
  			center: true,
  			padding: '15px'
  		},
  		screens: {
  			'sm': '640px',
  			'md': '768px',
  			'lg': '960px',
  			'xl': '1200px'
  		},
  		fontFamily: {
  			primary: 'var(--font-poppins)'
  		},
  		colors: {
			primary: "#f9f9f9",
			textcolor: "#333333",
			accent: {
				DEFAULT: "#CF0F47",
				hover: "#BFA181",
			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
