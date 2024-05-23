"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer";
import Button from "./Button/Button";
import TypeMachine from "@/components/TypeMachine";

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
            className="min-h-screen flex flex-col justify-center sticky top-0 z-20 bg-fixed container mx-auto "
            ref={refContainer}
            style={{ translateY: scrollTransformNegative }}
        >
            <div className="max-w-[520px] space-y-8">
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
                    className="pr-8 text-pretty"
                    style={{ translateX: scrollTransformPositive }}
                >
                    <TypeMachine input="Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences." />
                </motion.div>
                <motion.div style={{ translateX: scrollTransformNegative }}>
                    <Button
                        label="Latest Projects"
                        primary={false}
                        backgroundColor="var(--accent)"
                        textColor="var(--primary)"
                    />
                </motion.div>
            </div>
        </motion.section>
    );
}
