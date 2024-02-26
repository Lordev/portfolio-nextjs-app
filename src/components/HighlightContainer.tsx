import { useRef } from "react";
import { useMouse } from "react-use";

interface HighlightContainerProps {
    children: React.ReactNode;
}

export default function HighlightContainer({ children }: HighlightContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { elX, elY } = useMouse(containerRef);

    console.log(elX, elY);
    return (
        <div className="container-highlight" ref={containerRef}>
            <div className="highlight" style={{ left: elX, top: elY }}></div>
            {children}
        </div>
    );
}
