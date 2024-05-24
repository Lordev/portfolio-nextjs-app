"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer";
import Button from "../Button/Button";
import TypeMachine from "@/components/TypeMachine";
import HeroIconsBox from "./HeroIconsBox";

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
        <motion.section
            id="Hero"
            className="min-h-screen flex max-lg:flex-col max-lg:justify-center items-center 
             sticky top-0 z-20 bg-fixed max-w-screen-lg mx-auto md:gap-40 sm:gap-16 gap-8 animate-floatSlow max-lg:text-center"
            ref={refContainer}
            style={{ translateY: scrollTransformNegative }}
        >
            <div className="max-w-[600px] space-y-8">
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
                    className="pr-8 max-w-[600px]"
                    style={{ translateX: scrollTransformPositive }}
                >
                    <TypeMachine input="Resolving design problems, building smart user interfaces and useful interactions." />
                </motion.div>
                <motion.div
                    style={{ translateX: scrollTransformNegative }}
                    className="flex items-center max-lg:justify-center gap-x-8"
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
        </motion.section>
    );
}
