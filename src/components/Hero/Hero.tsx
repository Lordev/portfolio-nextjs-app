"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer";
import Button from "../Button/Button";
import HeroIconsBox from "./HeroIconsBox";
import LogoCompany from "../svg/Icon";

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
        <section id="home" className="min-h-screen">
            <motion.div
                className="min-h-screen grid md:grid-cols-[1fr_auto] items-center grid-rows-[1fr_auto]
            relative top-0 z-20 bg-fixed max-w-screen-lg mx-auto animate-floatSlow max-md:text-center justify-center max-md:py-16"
                ref={refContainer}
                style={{ translateY: scrollTransformNegative }}
            >
                <div className="max-w-[600px] space-y-8 ">
                    <motion.h1
                        initial={{ opacity: 0, translateY: -20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                        style={{ translateX: scrollTransformNegative }}
                    >
                        Hi {`I'm`}{" "}
                        <span
                            className="text-accent
                "
                        >
                            Lorenzo
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: "spring", stiffness: 20 }}
                        className="md:pr-8 md:max-w-[600px] max-w-[350px] max-md:mx-auto"
                        style={{ translateX: scrollTransformPositive }}
                    >
                        <p>
                            Resolving design problems, building smart user interfaces and
                            useful interactions.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: 30 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: "spring", stiffness: 20 }}
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
                    initial={{ opacity: 0, translateX: 20 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ type: "spring", stiffness: 20 }}
                    style={{
                        translateX: scrollTransformPositive,
                    }}
                >
                    <HeroIconsBox />
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateY: -20, translateX: -80 }}
                animate={{ opacity: 1, translateY: 0, translateX: 0 }}
                transition={{ type: "spring", stiffness: 20 }}
                style={{
                    translateY: scrollTransformPositive,
                }}
                className=" absolute  left-8 top-8"
            >
                <LogoCompany className="text-zinc-400 w-16 h-16 animate-spinSlow" />
            </motion.div>
        </section>
    );
}
