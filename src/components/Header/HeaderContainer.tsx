"use client";
import { PropsWithChildren, useEffect, useState } from "react";

export default function HeaderContainer({ children }: PropsWithChildren) {
    const [scrolled, setScrolled] = useState(false);
    const [color, setColor] = useState("primary");
    const [borderColor, setBorderColor] = useState("");

    const backgroundClasses: Record<string, string> = {
        primary: "bg-primary text-secondary",
        secondary: "bg-secondary text-primary",
    };

    const borderClasses: Record<string, string> = {
        primary: "border-b-2 border-zinc-500/20",
        secondary: "border-b-2 border-zinc-500/20",
    };

    const bgColor = backgroundClasses[color];
    const borderClass = borderClasses[borderColor];

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("about");
            const contactSection = document.getElementById("contact");
            const nav = document.querySelector("nav");

            if (aboutSection && contactSection && nav) {
                const aboutSectionTop = aboutSection.getBoundingClientRect().top;

                const aboutSectionBottom = aboutSection.getBoundingClientRect().bottom;

                const contactSectionTop = contactSection.getBoundingClientRect().top;

                if (aboutSectionTop < 0 && contactSectionTop >= 0) {
                    setScrolled(true);
                    setColor("primary");
                    setBorderColor("primary");
                } else if (contactSectionTop < 0) {
                    setScrolled(true);
                    setColor("secondary");
                    setBorderColor("secondary");
                    nav.style.transition = "background-color 0.1s ease-in";
                } else {
                    setScrolled(false);
                    setColor("secondary");
                    setBorderColor("");
                    nav.style.transition = "background-color 0s";
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`grid grid-cols-[1fr_auto_1fr] items-center py-2 px-16 w-full z-50 
            ${scrolled ? "fixed shadow-sm" : "absolute"}
            ${bgColor}
            ${borderClass}
            `}
        >
            {children}
        </nav>
    );
}
