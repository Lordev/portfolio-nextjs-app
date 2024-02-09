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

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-50 bg-fixed"
            ref={refContainer}
            style={{ transform: `translateY(-${progress * 10}vh)` }}
        >
            <BgVideo
                className="absolute brightness-50 object-cover w-full h-full -z-10"
                videoSrc="/video.mp4"
                videoType="video/mp4"
                playsInline
            />
            <div className="flex-1 flex items-center justify-center flex-col">
                <Title title="Web Developer | Lorenzo Sallons" />
            </div>
            <div
                className={`absolute bottom-5 transition-all duration-1000 ${
                    loaded ? "opacity-100" : "opacity-0 -translate-y-10"
                }`}
            >
                <IoIosArrowDown size={90} color="lightgray" aria-label="Scroll down" />
            </div>
        </div>
    );
}
