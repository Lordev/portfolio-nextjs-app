"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer";
import Button from "../Button/Button";
import dynamic from "next/dynamic";

const HeroIconsBox = dynamic(() => import("./HeroIconsBox"), { ssr: false });

export default function Hero() {
    const refContainer = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: refContainer,
        offset: ["0 0", "1 0"],
        smooth: 0.2,
    });

    const scrollTransformPositive = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 100]),
        {
            stiffness: 400,
            damping: 90,
        }
    );

    const scrollTransformNegative = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -100]),
        {
            stiffness: 400,
            damping: 90,
        }
    );

    return (
        <motion.div
            id="Hero"
            className="min-h-screen grid md:grid-cols-[1fr_auto] items-center grid-rows-[1fr_auto]
            relative top-0 z-20 bg-fixed max-w-screen-lg mx-auto animate-floatSlow max-md:text-center justify-center max-md:py-16"
            ref={refContainer}
            style={{ translateY: scrollTransformNegative }}
        >
            <div className="max-w-[600px] space-y-8 ">
                <motion.h1 style={{ translateX: scrollTransformNegative }}>
                    Hi {`I'm`}{" "}
                    <span
                        className="text-accent
                "
                    >
                        Lorenzo
                    </span>
                </motion.h1>

                <motion.div
                    className="md:pr-8 md:max-w-[600px] max-w-[350px] max-md:mx-auto"
                    style={{ translateX: scrollTransformPositive }}
                >
                    <p>
                        Resolving design problems, building smart user interfaces and
                        useful interactions.
                    </p>
                </motion.div>
                <motion.div
                    style={{ translateX: scrollTransformNegative }}
                    className="flex items-center max-md:justify-center gap-x-8"
                >
                    <Button
                        label="Latest Projects"
                        primary={false}
                        backgroundColor="var(--accent-secondary)"
                        textColor="var(--primary)"
                    />
                </motion.div>
            </div>
            <motion.div
                style={{
                    translateX: scrollTransformPositive,
                }}
            >
                <HeroIconsBox />
            </motion.div>
        </motion.div>
    );
}
