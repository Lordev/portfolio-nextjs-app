import ProgressBar from "./ProgressBar";


import Icons from "@/components/Icons";

export default function Skills() {
    return (
        <>
            <div>
                <Icons size={70} icon={FaHtml5} color="white" />
                <ProgressBar progress={90} />
            </div>
            <div>
                <Icons size={70} icon={FaCss3} color="white" />
                <ProgressBar progress={85} />
            </div>
            <div>
                <Icons size={70} icon={RiJavascriptFill} color="white" />
                <ProgressBar progress={90} />
            </div>
            <div>
                <Icons size={70} icon={FaReact} color="white" />
                <ProgressBar progress={85} />
            </div>
            <div>
                <Icons size={70} icon={TbBrandTypescript} color="white" />
            <ProgressBar progress={90} />
            </div>
            <div>
                <Icons size={70} icon={TbBrandNextjs} color="white" />
                <ProgressBar progress={80} />
            </div>

            <div>
                <Icons size={70} icon={FaSass} color="white" />
                <ProgressBar progress={80} />
            </div>
            <div>
                <Icons size={70} icon={TbBrandTailwind} color="white" />
                <ProgressBar progress={90} />
            </div>

            <div>
                <Icons size={70} icon={FaFigma} color="white" />
                <ProgressBar progress={80} />
            </div>
            <div>
                <Icons size={70} icon={TbBrandVscode} color="white" />
                <ProgressBar progress={90} />
            </div>
        </>
    );
}
