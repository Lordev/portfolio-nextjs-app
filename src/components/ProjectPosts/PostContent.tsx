import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import ProjectTag from "./ProjectTag";

export default function PostContent() {
    return (
        <>
            <Link href="#">
                <Image
                    src={"https://placehold.co/600x300.jpg"}
                    width={600}
                    height={300}
                    alt="project"
                />
            </Link>
            <div className="space-y-8">
                <div className="flex justify-between bg-zinc-400/20 px-8 py-2">
                    <div>
                        <h4>Project name</h4>
                        <h6>subtitle of the century</h6>
                    </div>
                    <div className="flex gap-2 border-2 border-zinc-400/40 rounded-full p-4 h-12 items-center">
                        <Link href="#" className=" rounded-full p-1 h-8  ">
                            <FaGithub
                                size={20}
                                className="text-zinc-600 hover:text-accent"
                            />
                        </Link>
                        <Link href="#" className=" rounded-full p-1 h-8  group">
                            <FaLink
                                size={20}
                                className="text-zinc-600 hover:text-accent"
                            />
                        </Link>
                    </div>
                </div>
                <p className="px-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illum
                    consequatur dolorum adipisci minus tenetur dolor harum aperiam.
                </p>
                <div className="px-8">
                    <ul className="flex flex-wrap gap-x-2 gap-y-2">
                        <ProjectTag label="React" />
                        <ProjectTag label="NextJS" />
                        <ProjectTag label="HTML" />
                        <ProjectTag label="Tailwind" />
                        <ProjectTag label="Sanity.io" />
                    </ul>
                </div>
            </div>
        </>
    );
}
