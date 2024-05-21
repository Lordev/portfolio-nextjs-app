import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/sections/Header";
import "./globals.scss";
import ScrollObserver from "@/utils/ScrollObserver";

const inter = Inter({
    subsets: ["latin"],
    weight: ["300"],
    variable: "--font-inter",
});
const JetBrains = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-jetBrains",
});

export const metadata: Metadata = {
    title: "Web-dev Portfolio",
    description: "Web Developer: Lorenzo Sallons",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ScrollObserver>
            <html lang="en">
                <body
                    className={`
                    ${inter.variable} 
                    ${JetBrains.variable} 
                    font-jetBrains
                    `}
                >
                    <Header />
                    {children}
                </body>
            </html>
        </ScrollObserver>
    );
}
