import ProjectsSlider from "@/components/Slider";
import SectionTitle from "@/components/sectionTitle";
import { useMousePositionContext } from "@/hooks/useMousePositionContext";

const images = [
    "https://placehold.co/800x1000.jpg",
    "https://placehold.co/800x1000.jpg",
    "https://placehold.co/800x1000.jpg",
    "https://placehold.co/800x1000.jpg",
    "https://placehold.co/800x1000.jpg",
    "https://placehold.co/800x1000.jpg",
    "https://placehold.co/800x1000.jpg",
    "https://placehold.co/800x1000.jpg",
    "https://placehold.co/800x1000.jpg",
    "https://placehold.co/800x1000.jpg",
];

export default function ProjectsSection() {
    const { containerRef, elX, elY } = useMousePositionContext();

    return (
        <section
            id="projects"
            className="section-projects border-t-[.5px] border-white/20 z-20"
        >
            <div className="relative col-start-3 overflow-hidden" ref={containerRef}>
                <div className="highlight" style={{ left: elX, top: elY }}></div>
                <div className="flex flex-col gap-10 border-r-transparent border-white/10 p-16 border-2 bg-white/[2%] opacity-90">
                    <div className="flex flex-row gap-8 ">
                        <div className="flex flex-col gap-5">
                            <SectionTitle title="Projects" />
                            <div>
                                <h3>This is my collection</h3>
                            </div>
                            <div>
                                <p className="">
                                    Welcome to my front-end showcase! Here, I proudly
                                    present a selection of my latest projects, each
                                    crafted with a blend of creativity and technical
                                    finesse. Through these endeavors,{" "}
                                    <span>
                                        I strive to create engaging and immersive user
                                        experiences that captivate and delight.
                                    </span>{" "}
                                    From dynamic animations to responsive layouts, each
                                    project reflects my commitment to pushing the
                                    boundaries of {`what's`} possible in web design.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-start-4">
                <ProjectsSlider images={images} />
            </div>
        </section>
    );
}
