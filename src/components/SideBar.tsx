import Link from "next/link";

export default function SideBar() {
    const homeNav: { [key: string]: string } = {
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
    };

    const navRender = () => {
        const links = [];
        for (const property in homeNav) {
            links.push(
                <Link
                    data-text={property}
                    key={property}
                    className="glitch glitch-text text-accent font-bold font-inter text-md transition-all duration-500  uppercase"
                    href={`#${property}`}
                >
                    {homeNav[property]}
                </Link>
            );
        }
        return links;
    };

    return (
        <div className="fixed left-0 h-screen bg-primary shadow-xl z-40 px-12 transform-all duration-300 ease-in-out">
            <div className="space-y-10 flex-col flex  justify-center h-full ">
                {navRender()}
            </div>
        </div>
    );
}
