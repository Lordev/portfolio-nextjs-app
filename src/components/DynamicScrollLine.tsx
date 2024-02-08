"use client";
import UseScrollContext from "@/hooks/useScrollContext";
import { useEffect, useRef, useState } from "react";

export default function DynamicScrollLine() {
    const { scrollY } = UseScrollContext();
    const refContainer = useRef<HTMLDivElement>(null);
    const [gradientValue, setGradientValue] = useState<number>(0);

    useEffect(() => {
        const element = refContainer.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();

        const y = rect.top + rect.height / 2 + window.innerHeight;

        const distanceFromTop = Math.abs(scrollY - y);

        const upValue = Math.min(distanceFromTop / window.innerHeight, 0.8);
        setGradientValue(upValue);
    }, [scrollY]);

    return (
        <div
            ref={refContainer}
            className="absolute bg-gradient-to-b w-1 -bottom-[20rem] h-[40rem] right-2/4 z-10"
            style={{
                background: `linear-gradient(to bottom,transparent, rgba(255, 255, 255, ${gradientValue}), transparent)`,
            }}
        ></div>
    );
}
