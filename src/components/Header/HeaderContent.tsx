import SocialIcon from "@/components/SocialIcon";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import LogoCompany from "../svg/Icon";
import Link from "next/link";

export default function HeaderContent() {
    const homeNav: { [key: string]: string } = {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
    };

    const navRender = () => {
        const links = [];
        for (const property in homeNav) {
            links.push(
                <Link
                    data-text={property}
                    key={property}
                    className="glitch glitch-text  font-bold font-inter text-md transition-transform duration-500 hover:text-accent uppercase"
                    href={`#${property}`}
                >
                    {homeNav[property]}
                </Link>
            );
        }
        return links;
    };

    return (
        <>
            <LogoCompany className="text-zinc-400 w-20 h-20 animate-spin" />
            <div className="space-x-10 text-base ">{navRender()}</div>
            <div className="flex space-x-3 justify-self-end">
                <SocialIcon icon={FaGithub} size={30} />
                <SocialIcon icon={FaLinkedin} size={30} />
            </div>
        </>
    );
}
