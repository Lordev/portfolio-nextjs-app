import Icons from "@/components/Icons";
import { LiaGithubAlt } from "react-icons/lia";
import { ImLinkedin } from "react-icons/im";

export default function Footer() {
    return (
        <footer className="gap-12 py-20 text-center bg-black/10 z-20 opacity-75">
            <ul className="flex flex-row justify-center gap-8 mb-8">
                <Icons size={40} icon={LiaGithubAlt} color="var(--accent)"></Icons>
                <Icons size={40} icon={ImLinkedin} color="var(--accent)"></Icons>
            </ul>
            <span className="text-[.8rem]">Created by Lorenzo Sallons &copy;2024</span>
        </footer>
    );
}
