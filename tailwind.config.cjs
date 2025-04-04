/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'badge-secondary': 'hsl(var(--b2))'
			}
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("daisyui")
	],
	daisyui: {
		themes: [
			"light",
			"dark",
			"pastel",
			{
			  pastelDark: {
				"primary": "#d1c1d7",
				"secondary": "#e0b2a4",
				"accent": "#c4c3f7",
				"neutral": "#2b3440",
				"base-100": "#1E1E24",   
				"base-200": "#1A1A20",   
				"base-content": "#ffffff", 
				"info": "#86d3f4",
				"success": "#b4f7c1",
				"warning": "#f6d86b",
				"error": "#fc9090",
			  },
			},
		  ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}
