import React, { useState } from "react";
import Image from "next/image";
import Github from "../svg/Github";
import Twitter from "../svg/Twitter";
import Mail from "../svg/Mail";
import Linkedin from "../svg/Linkedin";

export default function HeroIconsBox() {
    const [hoveredElement, setHoveredElement] = useState<string | null>(null);

    const elements = ["FaGithub", "FaTwitter", "CiMail", "FaLinkedin"];

    const handleHover = (e: string) => {
        setHoveredElement(e);
    };

    return (
        <div className="grid grid-cols-2 gap-4 border-2 border-accent-secondary rounded-full sm:p-12 p-8">
            {elements.map((element) => (
                <div
                    key={element}
                    className={`transition-all cursor-pointer duration-200 ease-in  ${
                        hoveredElement === element ? "scale-150 text-accent" : ""
                    } ${
                        hoveredElement && hoveredElement !== element
                            ? "scale-75 text-zinc-400"
                            : ""
                    }`}
                    onMouseEnter={() => handleHover(element)}
                    onMouseLeave={() => setHoveredElement(null)}
                >
                    {element === "FaGithub" && <Github width={30} height={30} />}
                    {element === "FaTwitter" && <Twitter width={30} height={30} />}
                    {element === "CiMail" && <Mail width={30} height={30} />}
                    {element === "FaLinkedin" && <Linkedin width={30} height={30} />}
                </div>
            ))}
        </div>
    );
}
