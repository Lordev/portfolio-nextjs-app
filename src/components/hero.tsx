"use client";
import BgVideo from "@/components/BgVideo";
import Title from "@/components/Title";
import { useRef, useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import UseScrollContext from "@/hooks/useScrollContext";

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
            className="min-h-screen flex flex-col items-center justify-center sticky top-0 z-20 bg-fixed"
            ref={refContainer}
            style={{ transform: `translateY(-${progress * 20}vh)` }}
        >
            <h1 className="mb-8">Hi {`I'm`} Lorenzo</h1>
            <div style={{ transform: `translateY(-${progress * 5}vh)` }}>
                <Title title="website developer" />
            </div>
            <h4
                className="absolute bottom-48"
                style={{ transform: `translateY(-${progress * 5}vh)` }}
            ></h4>
            <div
                style={{ transform: `translateY(-${progress * 0}vh)` }}
                className={`absolute bottom-5 transition-all duration-1000 ${
                    loaded ? "opacity-100" : "opacity-0 -translate-y-10"
                }`}
            >
                <IoIosArrowDown size={90} color="lightgray" aria-label="Scroll down" />
            </div>
        </div>
    );
}
