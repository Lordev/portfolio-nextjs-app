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
                normal: ["1.6rem", "1.8rem"],
                lg: ["2rem", "2.8rem"],
                xl: ["2.4rem", "3.2rem"],
                "2xl": ["2.8rem", "3.5rem"],
                "3xl": ["3.5rem", "3.9rem"],
                "4xl": ["3.8rem", "4.3rem"],
                "5xl": ["4.2rem", "4.6rem"],
                "6xl": ["4.5rem", "5rem"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
