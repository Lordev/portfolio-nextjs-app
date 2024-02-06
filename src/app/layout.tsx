import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import ScrollObserver from "@/utils/ScrollObserver";

const inter = Inter({ subsets: ["latin"] });

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
                <body className={inter.className}>
                    <Header />
                    {children}
                </body>
            </html>
        </ScrollObserver>
    );
}
