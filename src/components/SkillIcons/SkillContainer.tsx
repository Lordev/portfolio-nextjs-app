"use client";

import { PropsWithChildren } from "react";
import { useAnimate, stagger, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const staggerMenuItems = stagger(0.1, { startDelay: 0.1 });

export default function SkillContainer({ children }: PropsWithChildren) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (isInView) {
            animate(
                "li",
                { x: 0, rotateY: 0, opacity: 1 },
                { duration: 0.2, delay: staggerMenuItems, ease: "easeIn" }
            );
        } else {
            animate("li", { x: 70, rotateY: 90, opacity: 0 });
        }
    }, [animate, isInView]);

    return (
        <div className="text-accent flex items-center" ref={ref}>
            <ul
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
                ref={scope}
            >
                {children}
            </ul>
        </div>
    );
}
