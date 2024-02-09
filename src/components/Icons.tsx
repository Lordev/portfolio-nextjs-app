import { useState } from "react";
// Import your CSS file where you define hover effect styles

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
                className="transition-colors duration-200 cursor-pointer opacity-45 animate-bouncy"
                style={{ color: isHovered ? color : "gray" }}
            />
        </div>
    );
}
