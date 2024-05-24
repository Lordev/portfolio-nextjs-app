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
                "radial-gradient-accent":
                    "radial-gradient(circle, var(--accent) 0%, rgba(0,0,0,0) 60%)",
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
                wobble: {
                    "0%": {
                        transform: "translateX(0)",
                    },
                    "20%": {
                        transform: " translateX(-5px) rotate(-2deg)",
                    },

                    "40%": {
                        transform: " translateX(5px) rotate(2deg)",
                    },

                    "60%": {
                        transform: "translateX(-5px) rotate(-2deg)",
                    },

                    "80%": {
                        transform: "translateX(5px) rotate(2deg)",
                    },

                    "100%": {
                        transform: "translateX(0)",
                    },
                },
                Spin: {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0) rotate(0)" },
                    "25%": { transform: "translateY(-4px) rotate(2deg)" },
                    "50%": { transform: "translateY(-2px) rotate(4deg)" },
                    "75%": { transform: "translateY(-4px) rotate(2deg)" },
                },
                floatSlow: {
                    "0%, 100%": { transform: "translateY(0) rotate(0)" },
                    "25%": { transform: "translateY(-2px) rotate(.5deg)" },
                    "50%": { transform: "translateY(-1px) rotate(-1deg)" },
                    "75%": { transform: "translateY(-2px) rotate(.5deg)" },
                },
            },

            backgroundSize: {
                "400%": "400% 400%",
            },

            animation: {
                gradient: "gradient 15s ease infinite",
                bouncy: "wobble 0.5s ease-in-out;",
                spin: "Spin 120s linear infinite",
                float: "float 4s ease-in-out infinite",
                floatSlow: "floatSlow 10s ease-in-out infinite",
            },
        },
    },
    plugins: [require("@xpd/tailwind-3dtransforms")],
};
export default config;
