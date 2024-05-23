"use client";
import Link from "next/link";

export default function SideBar() {
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
                    className="glitch glitch-text text-primary font-bold font-inter text-md transition-all duration-500 hover:text-accent uppercase"
                    href={`#${property}`}
                >
                    {homeNav[property]}
                </Link>
            );
        }
        return links;
    };

    return (
        <div className="fixed left-0 h-screen bg-transparent z-20 px-8   top-0 bottom-0">
            <div className="space-y-10 text-base flex-col flex  justify-center h-full ">
                {navRender()}
            </div>
        </div>
    );
}
