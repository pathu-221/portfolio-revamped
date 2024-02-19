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
				primary: "#F56E0F",
				dark: "#1B1B1E",
				"dark-highlight": "#151419",
				"dark-shade-2": "#262626",
				light: "#FBFBFB",
				"light-highlight": "#878787",
			},
			animation: {
				"slide-up": "slide-up ease-out",
			},
			keyframes: {
				"slide-up": {
					"0%": { transform: "translateY(100%)" },
					"100%": { transform: "translateY(0)" },
				},
			},
		},
	},
	plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
export default config;
