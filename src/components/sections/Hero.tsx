"use client";
import Title from "@/components/Title";
import { useRef, useState, useEffect } from "react";
import UseScrollContext from "@/hooks/useScrollContext";
import Button from "../Button/Button";

export default function Hero() {
    const [loaded, setLoaded] = useState(false);
    const refContainer = useRef<HTMLDivElement>(null);
    const { scrollY } = UseScrollContext();

    let progress = 0;
    const { current: elContainer } = refContainer;
    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight);
    }
    if (scrollY === elContainer?.clientHeight) {
        progress = elContainer.clientHeight;
    }

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div
            id="Hero"
            className="min-h-screen flex flex-col justify-center sticky top-0 z-20 bg-fixed container mx-auto "
            ref={refContainer}
            style={{ transform: `translateY(${progress * 20}vh)` }}
        >
            <div className="max-w-[520px] space-y-8">
                <h1 style={{ transform: `-translateX(${progress * 4}vh)` }}>
                    Hi {`I'm`}{" "}
                    <span
                        className="text-accent
                "
                    >
                        Lorenzo
                    </span>
                </h1>
                <div
                    className="text-primary pr-8 text-pretty"
                    style={{ transform: `translateX(${progress * 4}vh)` }}
                >
                    <Title title="Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences." />
                </div>
                <div style={{ transform: `-translateX(${progress * 4}vh)` }}>
                    <Button
                        label="Latest Projects"
                        primary={false}
                        backgroundColor="var(--accent)"
                        textColor="var(--primary)"
                    />
                </div>
            </div>
        </div>
    );
}
