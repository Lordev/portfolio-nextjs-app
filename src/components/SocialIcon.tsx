import { IconType } from "react-icons";

interface IconsProps {
    icon: IconType;
    hoverColor?: keyof typeof HoverColors;
    size: number;
}

const HoverColors = {
    primary: "hover:text-primary",
    accent: "hover:text-accent",
    zinc: "hover:text-zinc",
    white: "hover:text-white",
};

export default function SocialIcon({
    icon: Icon,
    hoverColor = "accent",
    size,
}: IconsProps) {
    const IconHoverColor = HoverColors[hoverColor];

    return (
        <Icon
            size={size}
            className={`transition-colors duration-200 cursor-pointer text-zinc-400 ${IconHoverColor} hover:scale-110`}
        />
    );
}
