import SkillIcon from "./SkillIcon";
import { FaHtml5, FaReact, FaCss3, FaFigma, FaJs } from "react-icons/fa";
import {
    TbBrandNextjs,
    TbBrandTailwind,
    TbBrandVscode,
    TbBrandTypescript,
} from "react-icons/tb";

export default function SkillIconsList() {
    return (
        <div className="text-accent flex items-center">
            <div className="grid grid-cols-3 gap-4">
                <SkillIcon icon={FaHtml5} title="HTML" />
                <SkillIcon icon={FaReact} title="React" />
                <SkillIcon icon={FaCss3} title="CSS" />
                <SkillIcon icon={FaFigma} title="Figma" />
                <SkillIcon icon={TbBrandNextjs} title="NextJS" />
                <SkillIcon icon={TbBrandTailwind} title="Tailwind" />
                <SkillIcon icon={TbBrandVscode} title="VScode" />
                <SkillIcon icon={TbBrandTypescript} title="TypeScript" />
                <SkillIcon icon={FaJs} title="Javascript" />
            </div>
        </div>
    );
}
