import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontSize: {
                small: ["1.2rem", "1.4rem"],
                normal: ["1.4rem", "1.6rem"],
                lg: ["1.8rem", "2.5rem"],
                xl: ["2.1rem", "2.7rem"],
                "2xl": ["2.5rem", "3.1rem"],
                "3xl": ["3.1rem", "3.5rem"],
                "4xl": ["3.4rem", "3.9rem"],
                "5xl": ["3.8rem", "4.2rem"],
                "6xl": ["4.2rem", "4.6rem"],
                "7xl": ["4.6rem", "5rem"],
                "8xl": ["5rem", "5.4rem"],
                "9xl": ["6.4rem", "7.7rem"],
                "10xl": ["7.7rem", "8.7rem"],
            },

            fontFamily: {
                inter: ["var(--font-inter)", "sans-serif"],
                jetBrains: ["var(--font-jetBrains)", "monospace"],
            },
            backgroundImage: {
                "radial-accent":
                    "linear-gradient(-45deg, var(--primary), var(--accent), var(--accent-secondary), var(--secondary))",
                "about-section": "url('/public/jpg.jpeg')",
            },
            colors: {
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                accent: "var(--accent)",
                "accent-secondary": "var(--accent-secondary)",
            },
            dropShadow: {
                doubler: "-1px 1px 0px var(--accent)",
                "doubler-inverse": "-1px 1px 0px var(--accent)",
            },

            keyframes: {
                gradient: {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
            },

            backgroundSize: {
                "400%": "400% 400%",
            },

            animation: {
                gradient: "gradient 15s ease infinite",
            },
        },
    },
    plugins: [require("@xpd/tailwind-3dtransforms")],
};
export default config;
