import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
	"./pages/**/*.{js,ts,jsx,tsx,mdx}",
	"./components/**/*.{js,ts,jsx,tsx,mdx}",
	"./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
	  colors: {
		background: 'var(--background)',
		foreground: 'var(--foreground)'
	  },
	  borderRadius: {
		lg: 'var(--radius)',
		md: 'calc(var(--radius) - 2px)',
		sm: 'calc(var(--radius) - 4px)'
	  },
	  animation: {
        move: "move 5s linear infinite",
      },
	  keyframes: {
		move: {
		  '0%': { transform: 'translateX(-200px)' },
		  '100%': { transform: 'translateX(200px)' }
		} as const
	  },
	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;