import { LiaGithubAlt } from "react-icons/lia";
import { ImLinkedin } from "react-icons/im";
import Icons from "./Icons";

export default function About() {
    return (
        <div
            className="h-screen grid grid-cols-2 items-center py-16 bg-gray-800 relative"
            id="about"
        >
            <div className="flex flex-row items-center gap-20 h-full">
                <div className="flex flex-row gap-10 flex-initial mx-auto w-3/4">
                    <div className="flex flex-col justify-center gap-5">
                        <Icons icon={LiaGithubAlt} color="white"></Icons>
                        <Icons icon={ImLinkedin} color="white"></Icons>
                    </div>
                    <div>
                        <h1 className="text-white text-10xl">About</h1>
                        <div>
                            <h2 className="text-primary3">Lorem ipsum dolor sit amet </h2>
                            <h3 className="text-primary4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Cum illum sapiente facilis aliquid ea saepe.
                            </h3>
                        </div>
                        <div className="text-stone-300 w-3/4">
                            <p>
                                {`Welcome to my front-end showcase! Here, I proudly present a
                            selection of my latest projects, each crafted with a blend of
                            creativity and technical finesse. Through these endeavors, I
                            strive to create engaging and immersive user experiences that
                            captivate and delight. From dynamic animations to responsive
                            layouts, each project reflects my commitment to pushing the
                            boundaries of what's possible in web design. `}
                            </p>
                            <br />
                            <p>
                                {`Join me on this
                            journey as I explore the endless possibilities of front-end
                            development. Together, let's delve into the world of pixels and
                            code, where imagination knows no bounds. Welcome, and enjoy the
                            ride!`}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="background-about w-2/4"></div>
            </div>
            <div className="absolute bg-gradient-to-b from-transparent via-slate-500 to-transparent w-1 -bottom-[20rem] h-[40rem] right-2/4 z-10"></div>
        </div>
    );
}
