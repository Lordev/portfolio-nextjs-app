"use client";
import Link from "next/link";
import { ScrollContext } from "@/utils/ScrollObserver";
import { useContext, useEffect, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useContext(ScrollContext);

    useEffect(() => {
        const viewportHeight = window.innerHeight;
        const scrollThreshold = viewportHeight * 0.1;
        scrollY > scrollThreshold ? setScrolled(true) : setScrolled(false);
    }, [scrollY]);

    const homeNav: { [key: string]: string } = {
        about: "About",
        projects: "Project",
        skills: "Skills",
        experience: "Experience",
        contact: "Contact",
    };

    console.log(homeNav.about);

    return (
        <div className="w-full fixed text-white z-10">
            <nav
                className={`container relative flex flex-wrap items-center justify-between mx-auto py-3 px-20   m-5 transition-all duration-500 ${
                    scrolled
                        ? "bg-black opacity-50 blur-1 border-2 border-stone-300 rounded-full"
                        : "transparant border-2 border-transparent rounded-full"
                }`}
            >
                <Link href="/" className="font-bond text-normal">
                    Home
                </Link>
                <div className="space-x-10 text-base">
                    <Link href="#about">About</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#skills">Skills</Link>
                    <Link href="#experience">Experience</Link>
                    <Link href="#contact">Contact</Link>
                </div>
            </nav>
        </div>
    );
}
