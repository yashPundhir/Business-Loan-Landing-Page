/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xs: "480px",
				sm: "600px",
				md: "825px",
				lg: "1024px",
				xl: "1280px",
			},
		},
	},
	plugins: [],
};
