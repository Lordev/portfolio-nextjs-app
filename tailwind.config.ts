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
                "6xl": ["4.6rem", "5rem"],
                "7xl": ["5rem", "5.4rem"],
                "8xl": ["5.5rem", "6rem"],
                "9xl": ["7rem", "8.5rem"],
                "10xl": ["8rem", "9rem"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: "#F59E0B",
                primary1: "#D18C08",
                primary2: "#AF7905",
                primary3: "#8D6602",
                primary4: "#6B5300",
                primary5: "#493000",
            },
        },
    },
    plugins: [],
};
export default config;
