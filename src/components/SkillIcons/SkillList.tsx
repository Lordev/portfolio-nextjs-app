import { FaHtml5, FaReact, FaCss3, FaFigma, FaJs } from "react-icons/fa";
import {
    TbBrandGraphql,
    TbBrandNextjs,
    TbBrandTailwind,
    TbBrandVscode,
    TbBrandTypescript,
} from "react-icons/tb";
import SkillIcon from "./SkillIcon";

export default function SkillList() {
    return (
        <>
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
        </>
    );
}
