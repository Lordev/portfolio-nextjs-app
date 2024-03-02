"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import UseScrollContext from "@/hooks/useScrollContext";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = UseScrollContext();

    useEffect(() => {
        const viewportHeight = window.innerHeight;
        const scrollThreshold = viewportHeight * 0.1;
        scrollY > scrollThreshold ? setScrolled(true) : setScrolled(false);
    }, [scrollY]);

    const homeNav: { [key: string]: string } = {
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
    };

    const navRender = () => {
        const links = [];
        for (const key in homeNav) {
            links.push(
                <Link
                    data-text={key}
                    key={key}
                    className=" glitch glitch-text"
                    href={`#${key}`}
                >
                    {homeNav[key]}
                </Link>
            );
        }
        return links;
    };

    return (
        <div className="w-full fixed text-white z-50 ">
            <nav
                className={`container relative flex flex-wrap items-center justify-center mx-auto py-3 px-20 m-5 transition-all duration-500 border-1 rounded-full ${
                    scrolled
                        ? "bg-black/60 blur-1 border-black/10"
                        : "border-transparent rounded-full"
                }`}
            >
                <div className="space-x-10 text-base">{navRender()}</div>
            </nav>
        </div>
    );
}
