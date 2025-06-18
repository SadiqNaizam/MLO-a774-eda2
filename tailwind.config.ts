import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
        // Shadcn/Radix style variable mappings
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
        // PRD specific color names (mapped to CSS variables)
        primaryText: 'hsl(var(--foreground))', // PRD: #0F0F0F
        secondaryText: 'hsl(var(--muted-foreground))', // PRD: #6F767E
        accentSecondary: 'hsl(var(--color-accent-secondary))', // PRD: #4CAF50
        success: 'hsl(var(--color-success))', // PRD: #4CAF50

        // Sidebar specific colors
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
          background: 'hsl(var(--sidebar-background))', // Alias for clarity
					foreground: 'hsl(var(--sidebar-foreground))',
          mutedForeground: 'hsl(var(--sidebar-muted-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					primaryForeground: 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					accentForeground: 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
        // Corresponds to --radius variable in CSS (0.5rem)
				lg: 'var(--radius)', // -> 0.5rem (becomes `rounded-lg`)
				md: 'calc(var(--radius) - 2px)', // -> 0.375rem (becomes `rounded-md`)
				sm: 'calc(var(--radius) - 4px)' // -> 0.25rem (becomes `rounded-sm`)
			},
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
