import SkillIcon from "./SkillIcon";
import { FaHtml5, FaReact, FaCss3, FaFigma, FaJs } from "react-icons/fa";
import {
    TbBrandGraphql,
    TbBrandNextjs,
    TbBrandTailwind,
    TbBrandVscode,
    TbBrandTypescript,
} from "react-icons/tb";
import { useAnimate, stagger, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const staggerMenuItems = stagger(0.1, { startDelay: 0.1 });

export default function SkillIconsList() {
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
            <ul className="grid grid-cols-5 gap-4" ref={scope}>
                <SkillIcon icon={FaHtml5} title="HTML" />
                <SkillIcon icon={FaReact} title="React" />
                <SkillIcon icon={FaCss3} title="CSS" />
                <SkillIcon icon={FaFigma} title="Figma" />
                <SkillIcon icon={TbBrandNextjs} title="NextJS" />
                <SkillIcon icon={TbBrandTailwind} title="Tailwind" />
                <SkillIcon icon={TbBrandVscode} title="VScode" />
                <SkillIcon icon={TbBrandTypescript} title="TypeScript" />
                <SkillIcon icon={FaJs} title="Javascript" />
                <SkillIcon icon={TbBrandGraphql} title="GraphQL" />
            </ul>
        </div>
    );
}
