import ProgressBar from "@/components/ProgressBar";
import { FaReact, FaHtml5, FaCss3, FaSass, FaFigma } from "react-icons/fa";
import SectionTitle from "@/components/sectionTitle";
import {
    TbBrandNextjs,
    TbBrandTailwind,
    TbBrandVscode,
    TbBrandTypescript,
} from "react-icons/tb";
import BgParticles from "@/components/BpParticles";

export default function SkillsSection() {
    return (
        <>
            <BgParticles />
            <section
                className="section-skills border-t-[.5px] border-white/20  bg-transparent"
                id="skills"
            >
                <div className="flex flex-col gap-10 border-white/10 p-16 border-2 opacity-90 text-center w-2/4 mx-auto relative col-start-3 overflow-hidden ">
                    <div className="flex flex-row gap-8">
                        <div className="flex flex-col gap-5">
                            <div className="mx-auto">
                                <SectionTitle title="Skills" />
                            </div>
                            <div>
                                <h3>This is my collection</h3>
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
                <div className="flex-row shadow-md flex gap-x-10 gap-y-5  flex-wrap justify-center border border-stone-500/20 rounded-md p-10 bg-white/[0%] col-start-3 *:flex items-center gap-5">
                    <ProgressBar progress={95} icon={FaHtml5} title="HTML" />
                    <ProgressBar progress={95} icon={FaReact} title="React" />
                    <ProgressBar progress={95} icon={FaCss3} title="CSS" />
                    <ProgressBar progress={95} icon={FaSass} title="Sass" />
                    <ProgressBar progress={95} icon={FaFigma} title="Figma" />
                    <ProgressBar progress={95} icon={TbBrandNextjs} title="NextJS" />
                    <ProgressBar progress={95} icon={TbBrandTailwind} title="TailWind" />
                    <ProgressBar progress={95} icon={TbBrandVscode} title="VScode" />
                    <ProgressBar
                        progress={95}
                        icon={TbBrandTypescript}
                        title="TypeScript"
                    />
                </div>
            </section>
        </>
    );
}
