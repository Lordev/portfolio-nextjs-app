import Icons from "@/components/Icons";
import { LiaGithubAlt } from "react-icons/lia";
import { ImLinkedin } from "react-icons/im";

export default function Footer() {
    return (
        <footer className="h-100 bg-color-primary border-white-gradient py-24 gap-12">
            <ul className="flex flex-row col-start-3 justify-center gap-8 text-base">
                <Icons size={50} icon={LiaGithubAlt} color="white"></Icons>
                <Icons size={50} icon={ImLinkedin} color="white"></Icons>
            </ul>
            <span className="col-start-3 text-center text-[.8rem] text-color-secondary/35">
                Created by Lorenzo Sallons &copy;2024
            </span>
        </footer>
    );
}
