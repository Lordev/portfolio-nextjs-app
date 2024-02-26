import { useRef } from "react";
import { useMouseHovered } from "react-use";

export function useMousePositionContext() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { elX, elY } = useMouseHovered(containerRef, {
        bound: false,
        whenHovered: false,
    });

    return { containerRef, elX, elY };
}
