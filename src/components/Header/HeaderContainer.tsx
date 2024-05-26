"use client";
import { PropsWithChildren, useEffect, useState } from "react";
import Menu from "./Menu";
export default function HeaderContainer({ children }: PropsWithChildren) {
    const [scrolled, setScrolled] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("secondary");
    const [borderColor, setBorderColor] = useState("");

    const backgroundClasses: Record<string, string> = {
        primary: "bg-primary text-secondary",
        secondary: "bg-secondary text-primary",
        transparent: "bg-transparent text-primary",
    };

    const borderClasses: Record<string, string> = {
        primary: "border- border-zinc-500/20",
        secondary: "border- border-zinc-500/20",
    };

    const bgColor = backgroundClasses[backgroundColor];
    const borderClass = borderClasses[borderColor];

    // useEffect(() => {
    //     const aboutSection = document.getElementById("about");
    //     const contactSection = document.getElementById("contact");
    //     const nav = document.getElementById("nav");

    //     const handleScroll = () => {
    //         if (aboutSection && contactSection && nav) {
    //             const aboutSectionTop = aboutSection.getBoundingClientRect().top;
    //             const contactSectionTop = contactSection.getBoundingClientRect().top;

    //             if (aboutSectionTop < 0 && contactSectionTop >= 0) {
    //                 setScrolled(true);
    //                 setBackgroundColor("primary");
    //                 setBorderColor("primary");
    //             } else if (contactSectionTop < 0) {
    //                 setScrolled(true);
    //                 setBackgroundColor("secondary");
    //                 setBorderColor("secondary");
    //                 nav.style.transition = "background-color .2s ease-in-out";
    //             } else {
    //                 setScrolled(false);
    //                 setBackgroundColor("transparent");
    //                 setBorderColor("");
    //                 nav.removeAttribute("style");
    //                 nav.style.transition = "";
    //             }
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    return (
        <>
            <Menu />
        </>
    );
}
