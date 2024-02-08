import Icons from "./Icons";
import SkillsBar from "./SkillsBar";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaHtml5, FaCss3, FaSass, FaFigma } from "react-icons/fa";
import {
    TbBrandNextjs,
    TbBrandTailwind,
    TbBrandVscode,
    TbBrandTypescript,
} from "react-icons/tb";
import BgPolygonSvg from "./BgPolygonSvg";

export default function Skills() {
    return (
        <div
            className="h-screen grid auto-rows-fr items-center py-16 bg-gray-800 relative bg-grid relative"
            id="skills"
        >
            <BgPolygonSvg fill="red" stroke="10px" className="background-skills" />
            <div className="flex flex-col gap-2 w-2/4 text-center mx-auto">
                <h1 className="text-white">Skills</h1>
                <div>
                    <h2 className="text-primary3">Lorem ipsum dolor sit amet </h2>
                    <h3 className="text-primary4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum
                        sapiente facilis aliquid ea saepe.
                    </h3>
                </div>
                <div className="text-stone-300 w-2/4 mx-auto">
                    <p>
                        {`Welcome to my front-end showcase! Here, I proudly present a
                            selection of my latest projects, each crafted with a blend of
                            creativity and technical finesse. Through these endeavors, I
                            strive to create engaging and immersive user experiences that
                            captivate and delight. `}
                    </p>
                </div>
            </div>
            <div className="flex-row flex gap-x-10 gap-y-5 mx-auto flex-wrap w-3/4 justify-center">
                <div className="flex items-center gap-5">
                    <Icons size={100} icon={FaHtml5} color="white" />
                    <SkillsBar progress={90} />
                </div>
                <div className="flex items-center gap-5">
                    <Icons size={100} icon={FaCss3} color="white" />
                    <SkillsBar progress={85} />
                </div>
                <div className="flex items-center gap-5">
                    <Icons size={100} icon={RiJavascriptFill} color="white" />
                    <SkillsBar progress={90} />
                </div>
                <div className="flex items-center gap-5">
                    <Icons size={100} icon={FaReact} color="white" />
                    <SkillsBar progress={85} />
                </div>
                <div className="flex items-center gap-5">
                    <Icons size={100} icon={TbBrandTypescript} color="white" />
                    <SkillsBar progress={90} />
                </div>
                <div className="flex items-center gap-5">
                    <Icons size={100} icon={TbBrandNextjs} color="white" />
                    <SkillsBar progress={80} />
                </div>

                <div className="flex items-center gap-5">
                    <Icons size={100} icon={FaSass} color="white" />
                    <SkillsBar progress={80} />
                </div>
                <div className="flex items-center gap-5">
                    <Icons size={100} icon={TbBrandTailwind} color="white" />
                    <SkillsBar progress={90} />
                </div>

                <div className="flex items-center gap-5">
                    <Icons size={100} icon={FaFigma} color="white" />
                    <SkillsBar progress={80} />
                </div>
                <div className="flex items-center gap-5">
                    <Icons size={100} icon={TbBrandVscode} color="white" />
                    <SkillsBar progress={90} />
                </div>
            </div>
        </div>
    );
}
