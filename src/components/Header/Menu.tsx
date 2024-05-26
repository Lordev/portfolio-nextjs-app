"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useMenu } from "../../context/useMenuContext";
import MenuButton from "./MenuButton";
import { links } from "@/lib/data";
import { useInView } from "@/context/InViewContext";
import LogoCompany from "../svg/Icon";

export default function MenuComponent() {
    const { isMenuOpen } = useMenu();
    const navControls = useAnimation();
    const ulControls = useAnimation();
    const { inViewSection } = useInView();

    const [activeLink, setActiveLink] = useState<string | null>(null);
    const [hover, setHover] = useState<boolean>(false);
    // Update active link based on the inViewSection
    useEffect(() => {
        if (inViewSection) {
            setActiveLink(inViewSection);
        }
    }, [inViewSection]);

    const navAnimation = {
        open: {
            scale: 1,
            opacity: 1,
            x: "30%",
            y: "-30%",
            transition: { type: "spring", stiffness: 100 },
        },
        closed: {
            scale: 0,
            opacity: 0,
            x: "100%",
            y: "-100%",
            transition: { duration: 0.2, ease: "easeIn" },
        },
    };

    const ulAnimation = {
        open: {
            opacity: 1,
            transition: { duration: 0.2, ease: "easeIn", delay: 0.3 },
        },
        closed: {
            opacity: 0,
            transition: { duration: 0 },
        },
    };

    useEffect(() => {
        if (isMenuOpen) {
            navControls.start("open");
            ulControls.start("open");
        } else {
            ulControls.start("closed").then(() => navControls.start("closed"));
        }
    }, [isMenuOpen, navControls, ulControls]);

    return (
        <>
            <motion.nav
                className="fixed top-0 right-0 z-40 w-[500px] h-[500px] bg-accent-secondary flex justify-center items-center rounded-full shadow-lg"
                initial="closed"
                animate={navControls}
                variants={navAnimation}
            ></motion.nav>
            <motion.ul
                className="justify-center items-center gap-y-4 fixed top-4 right-4 flex flex-col w-[250px] h-[250px] z-50 "
                initial="closed"
                animate={ulControls}
                variants={ulAnimation}
            >
                {links &&
                    links.map((property) => (
                        <Link
                            data-text={property.label}
                            key={property.label}
                            className={`font-bold font-inter text-normal transition-transform duration-500 hover:text-accent uppercase ${
                                activeLink === property.label &&
                                `text-accent glitch glitch-text`
                            }
                            `}
                            href={`#${property.href}`}
                        >
                            {property.label}
                        </Link>
                    ))}
            </motion.ul>
            <MenuButton />
            <Link href="#hero" className="cursor-pointer">
                <LogoCompany className="text-zinc-400 w-16 h-16 animate-spinSlow absolute z-50 left-8 top-8" />
            </Link>
        </>
    );
}
