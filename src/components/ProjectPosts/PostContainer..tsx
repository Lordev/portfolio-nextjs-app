"use client";
import { useScroll, motion, useTransform, cubicBezier } from "framer";
import { PropsWithChildren, useRef } from "react";

interface ProjectPostProps extends PropsWithChildren {
    fadeInDirection?: "left" | "right";
}

export default function PostContainer({
    children,
    fadeInDirection = "right",
}: ProjectPostProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.3 1"],
        smooth: 0.8,
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

    const rotateY = useTransform(scrollYProgress, [0, 1], [-90, 0], {
        ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
    });

    const transitionXRight = useTransform(scrollYProgress, [0, 1], [400, 0], {
        ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
    });

    const transitionXLeft = useTransform(scrollYProgress, [0, 1], [-400, 0], {
        ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
    });

    return (
        <motion.div
            style={{
                scale: scale,
                opacity: scrollYProgress,
                rotateY: rotateY,
                translateX:
                    fadeInDirection === "left" ? transitionXLeft : transitionXRight,
            }}
            className="perspective-1400 shadow-md"
            ref={ref}
        >
            <motion.div
                style={{}}
                className={`grid grid-rows-[300px_1fr] border-[.5px] border-zinc-400 pb-8  transition-all duration-500 ease-in transform `}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
