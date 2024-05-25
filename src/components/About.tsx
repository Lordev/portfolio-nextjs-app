import dynamic from "next/dynamic";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

const SkillIcons = dynamic(() => import("./SkillIcons"), { ssr: false });

export default function About() {
    return (
        <section id="about" className="z-30 relative  border-accent">
            <div className="relative grid bg-primary pt-20 pb-60 lg:pb-60 text-secondary border-t-4 lg:[clipPath:_polygon(0_0,100%_0%,100%_100%,0_80%)] [clipPath:_polygon(0_0,100%_0%,100%_100%,0_90%)] max-sm:px-16">
                <div className="space-y-16 md:grid  gap-x-16 md:grid-cols-2 container mx-auto">
                    <div className="flex flex-col gap-5 max-w-md">
                        <SectionTitle title="About" />
                        <div>
                            <h3>Code Storyteller</h3>
                        </div>
                        <div>
                            <p className="">
                                Welcome to my front-end showcase! Here, I proudly present
                                a selection of my latest projects, each crafted with a
                                blend of creativity and technical finesse. Through these
                                endeavors,{" "}
                                <span className="font-semibold">
                                    I strive to create engaging and immersive user
                                    experiences that captivate and delight.
                                </span>{" "}
                                From dynamic animations to responsive layouts, each
                                project reflects my commitment to pushing the boundaries
                                of {`what's`} possible in web design.
                            </p>
                        </div>
                    </div>
                    <SkillIcons />
                </div>
            </div>
            <div className="py-20 bg-zinc-500/50 -mt-40 pt-60">
                <div className="max-w-screen-lg mx-auto text-center grid lg:grid-cols-4 gap-8 justify-center sm:grid-cols-2 grid-cols-1 max-sm:w-60">
                    <div className="flex-col flex items-center space-y-6">
                        <Image
                            className="opacity-90"
                            alt="Intuitive web design"
                            src="/icon-intuitive.png"
                            width={97}
                            height={97}
                        />
                        <h4>Intuitive</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="flex-col flex items-center space-y-6 ">
                        <Image
                            className="opacity-90"
                            alt="dynamic web design"
                            src="/icon-dynamic.png"
                            width={97}
                            height={97}
                        />
                        <h4>Dynamic</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="flex-col flex items-center space-y-6 ">
                        <Image
                            className="opacity-90"
                            alt="fast web design"
                            src="/icon-rocket.png"
                            width={97}
                            height={97}
                        />
                        <h4>Fast</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="flex-col flex items-center space-y-6 ">
                        <Image
                            className="opacity-90"
                            alt="responsive web design"
                            src="/icon-wrench.png"
                            width={97}
                            height={97}
                        />
                        <h4>Responsive</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
