import LogoCompany from "../svg/Icon";
import Link from "next/link";

export default function HeaderContent() {
    const homeNav: { [key: string]: string } = {
        about: "About",
        projects: "Projects",
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
            <Link href="#hero" className="cursor-pointer">
                <LogoCompany className="text-zinc-400 w-14 h-14 animate-spinSlow" />
            </Link>

            <div className="space-x-10 text-base ">
                {navRender()}
                <Link
                    className="font-bold font-inter text-md transition-transform duration-500 hover:text-accent uppercase justify-self-end border-2 border-zinc-400/40 rounded-full py-2 px-4 items-center justify-center"
                    href={`#contact`}
                >
                    Contact
                </Link>
            </div>
        </>
    );
}
