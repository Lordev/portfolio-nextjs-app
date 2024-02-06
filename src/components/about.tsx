import { LiaGithubAlt } from "react-icons/lia";
import { ImLinkedin } from "react-icons/im";
import Icons from "./Icons";

export default function About() {
    return (
        <div
            className="h-screen flex items-center py-16 bg-gray-800 relative before:bottom-5 before:w-full before:bg-stone-500 before:h-1 before:absolute
            after:right-10 after:w-1 after:bg-stone-500 after:absolute after:h-full"
            id="about"
        >
            <div className="flex gap-20 mx-auto pl-10 h-full w-3/4">
                <div className="w-full flex flex-col gap-10 justify-center">
                    <h1 className="text-white text-10xl">About</h1>
                    <div>
                        <h2 className="text-primary3">Lorem ipsum dolor sit amet </h2>
                        <h3 className="text-primary4">
                            Lorem ipsum dolor sit amet consectetur
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
                <div
                    className="flex flex-col justify-center items-end w-full text-white 
                gap-5 relative"
                >
                    <img
                        src="https://placehold.co/600x800"
                        alt="placeholder"
                        className="absolute bottom-0 right-20 opacity-20"
                    ></img>
                    <Icons icon={LiaGithubAlt} color="white"></Icons>
                    <Icons icon={ImLinkedin} color="white"></Icons>
                </div>
            </div>
        </div>
    );
}
