import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.scss";
import ScrollObserver from "@/utils/ScrollObserver";
import { Suspense } from "react";
import Loading from "./loading";
const inter = Inter({ subsets: ["latin"] });
const JetBrains = JetBrains_Mono({ subsets: ["latin"] });

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
                <body className={`${inter.className} ${JetBrains.className}`}>
                    <Header />
                    {children}
                </body>
            </html>
        </ScrollObserver>
    );
}
