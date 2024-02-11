import { useRef } from "react";
import BgPolygonSvg from "../../components/BgPolygonSvg";
import ProgressBar from "@/components/ProgressBar";
import { FaReact, FaHtml5, FaCss3, FaSass, FaFigma } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import {
    TbBrandNextjs,
    TbBrandTailwind,
    TbBrandVscode,
    TbBrandTypescript,
} from "react-icons/tb";

export default function SkillsSection() {
    const refcontainer = useRef<HTMLDivElement>(null);
    const { current: elContainer } = refcontainer;
    if (elContainer) {
    }

    return (
        <div className="section-skills" id="skills">
            <BgPolygonSvg fill="red" stroke="10px" className="background-skills" />
            <div className="flex flex-col gap-5 w-2/4 text-center mx-auto mb-8 col-start-3">
                <h1>Skills</h1>
                <hr className="custom-divider mx-auto" />

                <div>
                    <h2>Lorem ipsum dolor sit amet </h2>
                </div>
                <div className="text-center flex justify-center">
                    <p>
                        {`Welcome to my front-end showcase! Here, I proudly present a
                            selection of my latest projects, each crafted with a blend of
                            creativity and technical finesse. Through these endeavors, I
                            strive to create engaging and immersive user experiences that
                            captivate and delight. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium repellat alias temporibus delectus vel voluptas dignissimos deserunt! Expedita libero nam, quaerat ratione pariatur ad fugit explicabo. Quos repellendus nam culpa?`}
                    </p>
                </div>
            </div>
            <div className="flex-row shadow-md flex gap-x-10 gap-y-5  flex-wrap justify-center border border-stone-500/20 rounded-md p-10 bg-white/[1%] col-start-3 *:flex items-center gap-5">
                <ProgressBar progress={95} icon={FaHtml5} title="HTML" />
                <ProgressBar progress={95} icon={FaReact} title="React" />
                <ProgressBar progress={95} icon={FaCss3} title="CSS" />
                <ProgressBar progress={95} icon={FaSass} title="Sass" />
                <ProgressBar progress={95} icon={FaFigma} title="Figma" />
                <ProgressBar progress={95} icon={TbBrandNextjs} title="NextJS" />
                <ProgressBar progress={95} icon={TbBrandTailwind} title="TailWind" />
                <ProgressBar progress={95} icon={TbBrandVscode} title="VScode" />
                <ProgressBar progress={95} icon={TbBrandTypescript} title="TypeScript" />
            </div>
        </div>
    );
}
