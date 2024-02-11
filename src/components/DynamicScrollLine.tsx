"use client";
import UseScrollContext from "@/hooks/useScrollContext";
import { useEffect, useState } from "react";

interface DynamicScrollLineProps {
    parentRef: React.RefObject<HTMLDivElement>;
}

export default function DynamicScrollLine({ parentRef }: DynamicScrollLineProps) {
    const { scrollY } = UseScrollContext();
    const [gradientValue, setGradientValue] = useState<number>(0);

    if (parentRef) {
        useEffect(() => {
            const element = parentRef.current;
            if (!element) return;

            const rect = element.getBoundingClientRect();

            const y = rect.top + rect.height;
            const distanceFromTop = Math.abs(scrollY - y);

            const upValue = Math.min(distanceFromTop / window.innerHeight, 0.8);
            setGradientValue(upValue);
        }, [scrollY]);
    }
    return (
        <div
            className="absolute bg-gradient-to-b w-1  h-[40rem] right-2/4 z-10"
            style={{
                background: `linear-gradient(to bottom,transparent, rgba(255, 255, 255, ${gradientValue}), transparent)`,
                transform: `translateY (${gradientValue}px)`,
            }}
        ></div>
    );
}
