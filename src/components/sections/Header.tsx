"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "@/components/Icons";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import UseScrollContext from "@/hooks/useScrollContext";
import LogoCompany from "../svg/Icon";

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
        for (const property in homeNav) {
            links.push(
                <Link
                    data-text={property}
                    key={property}
                    className="glitch glitch-text text-secondary font-bold font-inter text-md transition-all duration-500 hover:text-accent uppercase"
                    href={`#${property}`}
                >
                    {homeNav[property]}
                </Link>
            );
        }
        return links;
    };

    return (
        <div className="w-full fixed z-50">
            <nav
                className={`relative grid grid-cols-[1fr_auto_1fr] items-center py-1 transition-all duration-500 border-1 px-16 h-full ${
                    scrolled ? "bg-secondary blur-1 border-black/10" : "bg-primary"
                }`}
            >
                <LogoCompany className="text-zinc-400 w-20 h-20 animate-spin" />
                <div className="space-x-10 text-base ">{navRender()}</div>
                <div className="flex space-x-3 justify-self-end">
                    <Icon icon={FaGithub} color="var(--accent)" size={30} />
                    <Icon icon={FaLinkedin} color="var(--accent)" size={30} />
                </div>
            </nav>
        </div>
    );
}
