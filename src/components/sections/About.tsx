import { LiaGithubAlt } from "react-icons/lia";
import { ImLinkedin } from "react-icons/im";
import Icons from "@/components/Icons";
import SectionTitle from "@/components/sectionTitle";
import { useMousePositionContext } from "@/hooks/useMousePositionContext";

import SkillIconsList from "../SkillIcons/SkillIconsList";

export default function About() {
    const { containerRef, elX, elY } = useMousePositionContext();

    return (
        <section
            className="z-20 relative grid  border-t-4 border-accent bg-primary pt-20 pb-20"
            id="about"
        >
            <div className="space-y-8 grid grid-cols-2 container mx-auto">
                <SkillIconsList />
                <div
                    className="relative overflow-hidden text-secondary "
                    ref={containerRef}
                >
                    <div className="highlight" style={{ left: elX, top: elY }}></div>
                    <div className="flex flex-col gap-10 opacity-90 rounded-xl max-w-[520px]">
                        <div className="flex flex-row gap-8 ">
                            <div className="flex flex-col gap-5">
                                <SectionTitle title="About" />
                                <div>
                                    <h3>Code Storyteller</h3>
                                </div>
                                <div>
                                    <p className="">
                                        Welcome to my front-end showcase! Here, I proudly
                                        present a selection of my latest projects, each
                                        crafted with a blend of creativity and technical
                                        finesse. Through these endeavors,{" "}
                                        <span className="font-semibold">
                                            I strive to create engaging and immersive user
                                            experiences that captivate and delight.
                                        </span>{" "}
                                        From dynamic animations to responsive layouts,
                                        each project reflects my commitment to pushing the
                                        boundaries of {`what's`} possible in web design.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <Icons
                                size={40}
                                icon={LiaGithubAlt}
                                color="var(--accent)"
                            ></Icons>
                            <Icons
                                size={40}
                                icon={ImLinkedin}
                                color="var(--accent)"
                            ></Icons>
                        </div>
                    </div>
                </div>
            </div>
            {/* <DynamicScrollLine parentRef={parentRef} /> */}
        </section>
    );
}
