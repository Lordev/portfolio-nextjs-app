import { useRef } from "react";
import { LiaGithubAlt } from "react-icons/lia";
import { ImLinkedin } from "react-icons/im";
import Icons from "@/components/Icons";
import DynamicScrollLine from "@/components/DynamicScrollLine";

export default function AboutSection() {
    const parentRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={parentRef} className="section-about" id="about">
            <div className="background-about w-2/4"></div>
            <div className="col-start-3"></div>
            <div className="flex flex-col gap-10 pl-5">
                <div className="flex flex-row gap-8">
                    <div className="flex flex-col gap-5">
                        <h1>About</h1>
                        <hr className="custom-divider" />
                        <div>
                            <h2>Hello I'm Lorenzo</h2>
                        </div>
                        <div>
                            <p>
                                Welcome to my front-end showcase! Here, I proudly present
                                a selection of my latest projects, each crafted with a
                                blend of creativity and technical finesse. Through these
                                endeavors,{" "}
                                <span>
                                    I strive to create engaging and immersive user
                                    experiences that captivate and delight.
                                </span>{" "}
                                From dynamic animations to responsive layouts, each
                                project reflects my commitment to pushing the boundaries
                                of what's possible in web design.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <Icons size={50} icon={LiaGithubAlt} color="white"></Icons>
                    <Icons size={50} icon={ImLinkedin} color="white"></Icons>
                </div>
            </div>
            <DynamicScrollLine parentRef={parentRef} />
        </section>
    );
}
