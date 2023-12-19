import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				satoshi: ["Satoshi Regular", "Satoshi Medium"],
				"satoshi-bold": ["Satoshi Bold"],
				"satoshi-light": ["Satoshi Light"],
			},
			colors: {
				dark: "#1C2026",
				"dark-highlight": "#0A0B0D",
				light: "#A4A5A6",
				"light-highlight": "#A4A5A6",
			},
		},
	},
	plugins: [],
};
export default config;
