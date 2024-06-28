import Github from "./svg/Github";
import LinkedIn from "./svg/Linkedin";
import Link from "next/link";
export default function Footer() {
    return (
        <footer className="gap-12 py-20 text-center bg-black/80 z-20 opacity-75">
            <ul className="flex flex-row justify-center gap-8 mb-8">
                <Link href={"https://github.com/Lordev"} target="_blank">
                    <Github width={30} height={30} className="hover:text-accent" />
                </Link>
                <Link
                    href={"https://www.linkedin.com/in/lorenzo-sallons-383945176/"}
                    target="_blank"
                >
                    <LinkedIn width={30} height={30} className="hover:text-accent" />
                </Link>
            </ul>
            <span className="text-[.8rem]">Created by Lorenzo Sallons &copy;2024</span>
        </footer>
    );
}
