import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import ProjectTag from "../ProjectTag";
import { useScroll, motion, useTransform, cubicBezier } from "framer";
import { useRef } from "react";

interface ProjectPostProps {
    fadeInDirection?: "left" | "right";
}

export default function ProjectPost({ fadeInDirection = "right" }: ProjectPostProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.3 1"],
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
                <Link href="#">
                    <Image
                        src={"https://placehold.co/600x300.jpg"}
                        width={600}
                        height={300}
                        alt="project"
                    />
                </Link>
                <div className="space-y-8">
                    <div className="flex justify-between bg-zinc-400/20 px-8 py-2">
                        <div>
                            <h4>Project name</h4>
                            <h6>subtitle of the century</h6>
                        </div>
                        <div className="flex gap-2 border-2 border-zinc-400/40 rounded-full p-4 h-12 items-center">
                            <Link href="#" className=" rounded-full p-1 h-8  ">
                                <FaGithub
                                    size={20}
                                    className="text-zinc-600 hover:text-accent"
                                />
                            </Link>
                            <Link href="#" className=" rounded-full p-1 h-8  group">
                                <FaLink
                                    size={20}
                                    className="text-zinc-600 hover:text-accent"
                                />
                            </Link>
                        </div>
                    </div>
                    <p className="px-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                        illum consequatur dolorum adipisci minus tenetur dolor harum
                        aperiam dignissimos porro dolores temporibus laudantium velit nam,
                        doloremque nihil, necessitatibus voluptates quis!
                    </p>
                    <div className="px-8">
                        <ul className="flex flex-wrap gap-x-2 gap-y-2">
                            <ProjectTag label="React" />
                            <ProjectTag label="NextJS" />
                            <ProjectTag label="HTML" />
                            <ProjectTag label="Tailwind" />
                            <ProjectTag label="Sanity.io" />
                        </ul>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
