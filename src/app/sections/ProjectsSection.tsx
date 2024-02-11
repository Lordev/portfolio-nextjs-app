import ProjectsSlider from "@/components/Slider";

const images = [
    "https://placehold.co/700x500.jpg",
    "https://placehold.co/700x500.jpg",
    "https://placehold.co/700x500.jpg",
    "https://placehold.co/700x500.jpg",
    "https://placehold.co/700x500.jpg",
    "https://placehold.co/700x500.jpg",
    "https://placehold.co/700x500.jpg",
    "https://placehold.co/700x500.jpg",
    "https://placehold.co/700x500.jpg",
    "https://placehold.co/700x500.jpg",
];

export default function ProjectsSection() {
    return (
        <section id="project" className="section-projects">
            <div className="col-start-3 pl-5">
                <div className="flex flex-col gap-5">
                    <h1>Projects</h1>
                    <hr className="custom-divider" />

                    <div>
                        <h2> Lorem ipsum dolor sit amet.</h2>
                    </div>
                    <div className="w-3/4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Exercitationem omnis praesentium nostrum reiciendis assumenda,
                            enim dolore perspiciatis nam magni laudantium veniam,
                            accusamus officiis sapiente doloribus! Perferendis sint esse
                            quod consequatur! Iste, officiis ipsa dignissimos, praesentium
                            blanditiis mollitia, saepe ea impedit sit deleniti numquam
                            sapiente quam cupiditate minus ex. Nihil atque est mollitia
                            laudantium qui deserunt, eos quod. Natus, ex ducimus?
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-start-4">
                <ProjectsSlider images={images} />
                <ProjectsSlider images={images} />
            </div>
        </section>
    );
}
