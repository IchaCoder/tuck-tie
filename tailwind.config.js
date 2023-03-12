/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#FFD700",
				whiteF: "rgba(255,255,255,0.8)",
			},
			screens: {
				"3xl": "1200px",
				"4xl": "1000px",
				base: "400px",
			},
			fontFamily: {
				Poppins: ["Poppins", "sans-serif"],
				Bungee: ["Bungee", "sans-serif"],
			},
			backgroundImage: {
				"gradient-cc": "radial-gradient(rgba(255, 215, 0,.3),rgb(255,255,255))",
			},
		},
	},
	plugins: [],
};
