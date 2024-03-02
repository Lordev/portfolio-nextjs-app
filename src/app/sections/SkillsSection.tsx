import ProgressBar from "@/components/ProgressBar";
import { FaReact, FaHtml5, FaCss3, FaSass, FaFigma } from "react-icons/fa";
import SectionTitle from "@/components/sectionTitle";
import {
    TbBrandNextjs,
    TbBrandTailwind,
    TbBrandVscode,
    TbBrandTypescript,
} from "react-icons/tb";
import { useMousePositionContext } from "@/hooks/useMousePositionContext";

export default function SkillsSection() {
    const { containerRef, elX, elY } = useMousePositionContext();

    return (
        <>
            <section className="section-skills border-white-gradient" id="skills">
                <div
                    className="flex flex-col gap-10 border-white/10 p-16 border-2 opacity-90 text-center w-2/4 mx-auto relative col-start-3 overflow-hidden
                    backdrop-blur-[1.2px] bg-white/[2%]"
                    ref={containerRef}
                >
                    <div className="highlight" style={{ left: elX, top: elY }}></div>

                    <div className="flex flex-row gap-8">
                        <div className="flex flex-col gap-5">
                            <div className="mx-auto">
                                <SectionTitle title="Skills" />
                            </div>
                            <div>
                                <h3>Dev Toolbox</h3>
                            </div>
                            <div>
                                <p className="">
                                    In my role as a web developer, I excel in creating{" "}
                                    <span>responsive and user-friendly interfaces</span>{" "}
                                    using HTML, CSS, and JavaScript. I have a keen eye for
                                    design details and a passion for optimizing website
                                    performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-row shadow-md flex gap-x-10 gap-y-5  flex-wrap justify-center  rounded-md p-10 col-start-3 *:flex items-center gap-5 backdrop-blur-[2px]">
                    <ProgressBar progress={98} icon={FaHtml5} title="HTML" />
                    <ProgressBar progress={90} icon={FaReact} title="React" />
                    <ProgressBar progress={95} icon={FaCss3} title="CSS" />
                    <ProgressBar progress={93} icon={FaSass} title="Sass" />
                    <ProgressBar progress={84} icon={FaFigma} title="Figma" />
                    <ProgressBar progress={88} icon={TbBrandNextjs} title="NextJS" />
                    <ProgressBar progress={87} icon={TbBrandTailwind} title="TailWind" />
                    <ProgressBar progress={91} icon={TbBrandVscode} title="VScode" />
                    <ProgressBar
                        progress={88}
                        icon={TbBrandTypescript}
                        title="TypeScript"
                    />
                </div>
            </section>
        </>
    );
}
