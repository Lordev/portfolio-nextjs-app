import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

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
                    {element === "FaGithub" && (
                        <FaGithub className="sm:w-8 sm:h-8 w-6 h-6" />
                    )}
                    {element === "FaTwitter" && (
                        <FaTwitter className="sm:w-8 sm:h-8 w-6 h-6" />
                    )}
                    {element === "CiMail" && <CiMail className="sm:w-8 sm:h-8 w-6 h-6" />}
                    {element === "FaLinkedin" && (
                        <FaLinkedin className="sm:w-8 sm:h-8 w-6 h-6" />
                    )}
                </div>
            ))}
        </div>
    );
}
