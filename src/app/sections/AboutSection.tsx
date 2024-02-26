import { LiaGithubAlt } from "react-icons/lia";
import { ImLinkedin } from "react-icons/im";
import Icons from "@/components/Icons";
import SectionTitle from "@/components/sectionTitle";
import { useMousePositionContext } from "@/hooks/useMousePositionContext";

export default function AboutSection() {
    const { containerRef, elX, elY } = useMousePositionContext();

    return (
        <section className="section-about" id="about">
            <div className="background-about col-start-1 col-span-3"></div>
            <div className="relative overflow-hidden" ref={containerRef}>
                <div className="highlight" style={{ left: elX, top: elY }}></div>
                <div className="flex flex-col gap-10 border-l-transparent border-white/10 p-16 border-2 bg-white/[2%] opacity-90">
                    <div className="flex flex-row gap-8 ">
                        <div className="flex flex-col gap-5">
                            <SectionTitle title="About" />
                            <div>
                                <h3>Hello {`I'm`} Lorenzo</h3>
                            </div>
                            <div>
                                <p className="">
                                    Welcome to my front-end showcase! Here, I proudly
                                    present a selection of my latest projects, each
                                    crafted with a blend of creativity and technical
                                    finesse. Through these endeavors,{" "}
                                    <span>
                                        I strive to create engaging and immersive user
                                        experiences that captivate and delight.
                                    </span>{" "}
                                    From dynamic animations to responsive layouts, each
                                    project reflects my commitment to pushing the
                                    boundaries of {`what's`} possible in web design.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Icons size={50} icon={LiaGithubAlt} color="white"></Icons>
                        <Icons size={50} icon={ImLinkedin} color="white"></Icons>
                    </div>
                </div>
            </div>
            {/* <DynamicScrollLine parentRef={parentRef} /> */}
        </section>
    );
}
