import React, { useState } from "react";
// Import your CSS file where you define hover effect styles

interface IconsProps {
    icon: any; // Assuming the icon type is any for now
    color: string;
}

export default function Icons({ icon: Icon, color }: IconsProps) {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`icon-container ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Icon
                size={50}
                className="transition-colors duration-200 cursor-pointer opacity-45"
                style={{ color: isHovered ? color : "gray" }}
            />
        </div>
    );
}
