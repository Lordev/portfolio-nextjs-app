"use client";
import { useMousePositionContext } from "@/hooks/useMousePositionContext";

interface HoverContainerProps {
    children: React.ReactNode;
}

export default function HoverContainer({ children }: HoverContainerProps) {
    const { containerRef, elX, elY } = useMousePositionContext();

    return (
        <div className="relative overflow-hidden w-full h-full" ref={containerRef}>
            <div
                className={`absolute w-[800px] h-[800px] rounded-full bg-hover-gradient opacity-20 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-radial-gradient-accent`}
                style={{
                    left: elX,
                    top: elY,
                }}
            ></div>
            {children}
        </div>
    );
}
