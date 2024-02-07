import ProjectsSlider from "./projectsSlider";

const images = [
    "https://placehold.co/1000.jpg",
    "https://placehold.co/1001.jpg",
    "https://placehold.co/1002.jpg",
    "https://placehold.co/1003.jpg",
    "https://placehold.co/1004.jpg",
    "https://placehold.co/1005.jpg",
    "https://placehold.co/1006.jpg",
];

export default function Projects() {
    return (
        <div className="h-screen grid grid-cols-2 items-center bg-gray-800 relative">
            <ProjectsSlider images={images} />
            <div className="mx-auto pl-40">
                <div className="flex flex-col gap-5">
                    <h1 className="text-white text-10xl">Projects</h1>
                    <div>
                        <h2 className="text-primary3">
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </h2>
                        <h3 className="text-primary4">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </h3>
                    </div>
                    <div className="w-3/4">
                        <p className="text-stone-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Exercitationem omnis praesentium nostrum reiciendis assumenda,
                            enim dolore perspiciatis nam magni laudantium veniam,
                            accusamus officiis sapiente doloribus! Perferendis sint esse
                            quod consequatur! Iste, officiis ipsa dignissimos, praesentium
                            blanditiis mollitia, saepe ea impedit sit deleniti numquam
                            sapiente quam cupiditate minus ex. Nihil atque est mollitia
                            laudantium qui deserunt, eos quod. Natus, ex ducimus?
                        </p>
                        <br />
                        <p className="text-stone-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Quaerat quam nesciunt voluptates maxime vitae? Laudantium
                            harum laboriosam nihil assumenda alias, vitae numquam laborum
                            earum perferendis atque illo rem tempora necessitatibus. Quas
                            inventore voluptas provident eos enim eum doloremque
                            accusantium maiores ullam odit. Quasi voluptas minus maxime
                            iusto accusantium soluta! Magnam recusandae dicta eveniet modi
                            alias voluptate sequi facere perspiciatis in.
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute bg-gradient-to-b from-transparent via-slate-500 to-transparent w-1 -bottom-[20rem] h-[40rem] right-2/4"></div>
        </div>
    );
}
