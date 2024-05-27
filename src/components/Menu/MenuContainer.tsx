import { PropsWithChildren, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useMenu } from "@/context/useMenuContext";
import MenuButton from "./MenuButton";

interface MenuContainerProps extends PropsWithChildren {
    activeLink: string | null;
}

export default function MenuContainer({ activeLink, children }: MenuContainerProps) {
    const { isMenuOpen } = useMenu();
    const navControls = useAnimation();
    const ulControls = useAnimation();

    const handleChangeClasses = (init: string, onChange: string) => {
        if (activeLink && !["about", "projects"].includes(activeLink)) {
            return init;
        } else {
            return onChange;
        }
    };

    const navAnimation = {
        open: {
            scale: 1,
            opacity: 1,
            x: "30%",
            y: "-30%",
            transition: { type: "spring", stiffness: 120, damping: 15 },
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
            <motion.div
                className="fixed top-0 right-0 z-40 w-[500px] h-[500px]"
                initial="closed"
                animate={navControls}
                variants={navAnimation}
            >
                <nav
                    className={`rounded-full w-full h-full transition-colors duration-200 ease-in shadow-xl ${handleChangeClasses(
                        "bg-accent-secondary",
                        "bg-accent"
                    )}`}
                >
                    <motion.ul
                        className={`justify-center items-center gap-y-4 fixed top-40 left-20 flex flex-col w-[250px] h-[250px] z-50
                    ${handleChangeClasses("text-secondary", "text-primary")}`}
                        initial="closed"
                        animate={ulControls}
                        variants={ulAnimation}
                    >
                        {children}
                    </motion.ul>
                </nav>
            </motion.div>
        </>
    );
}
