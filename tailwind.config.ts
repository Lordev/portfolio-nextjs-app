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
                base: "62.5%",
                small: ["1.4rem", "1.6rem"],
                normal: ["1.6rem", "1.8rem"],
                lg: ["2rem", "2.8rem"],
                xl: ["2.4rem", "3.2rem"],
                "2xl": ["2.8rem", "3.5rem"],
                "3xl": ["3.5rem", "3.9rem"],
                "4xl": ["3.8rem", "4.3rem"],
                "5xl": ["4.2rem", "4.6rem"],
                "6xl": ["4.6rem", "5rem"],
                "7xl": ["5rem", "5.4rem"],
                "8xl": ["5.5rem", "6rem"],
                "9xl": ["7rem", "8.5rem"],
                "10xl": ["8rem", "9rem"],
            },
            backgroundImage: {
                "radial-accent":
                    "linear-gradient(-45deg, var(--primary), var(--accent), var(--accent2), var(--secondary))",
                "about-section": "url('/public/jpg.jpeg')",
            },
            colors: {
                "color-primary": "#0a0d11",
                "color-secondary": "#f5f5f5",
                "color-accent": "#2bbbad",
                "color-accent-2": "#ea580c",
            },
            dropShadow: {
                doubler: "-1px 1px 0px var(--accent2)",
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
    plugins: [],
};
export default config;
