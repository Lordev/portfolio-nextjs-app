import { useState } from "react";
import { IconType } from "react-icons";

interface IconsProps {
    icon: any;
    color: string;
    size: number;
}

export default function Icons({ icon: Icon, color, size }: IconsProps) {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
 
    return (
        <div
            className={`icon-container  ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Icon
                size={size}
                className={`transition-colors duration-200 cursor-pointer animate-bouncy ${
                    !isHovered && "text-zinc-500"
                }`}
                style={{ color: isHovered && color }}
            />
        </div>
    );
}
