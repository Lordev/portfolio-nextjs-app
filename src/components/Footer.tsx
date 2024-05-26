import Github from "./svg/Github";
import LinkedIn from "./svg/Linkedin";

export default function Footer() {
    return (
        <footer className="gap-12 py-20 text-center bg-black/80 z-20 opacity-75">
            <ul className="flex flex-row justify-center gap-8 mb-8">
                <Github width={30} height={30} />
                <LinkedIn width={30} height={30} />
            </ul>
            <span className="text-[.8rem]">Created by Lorenzo Sallons &copy;2024</span>
        </footer>
    );
}
