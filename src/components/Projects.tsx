import ProjectPosts from "./ProjectPosts";
import ProjectSelect from "./ProjectSelect";

export default function Projects() {
    return (
        <section
            id="projects"
            className="bg-zinc-300   text-secondary relative z-20 pt-20 pb-20 mx-auto border-b-4 border-accent"
        >
            <div className="container mx-auto  ">
                <ProjectSelect />
                <ProjectPosts />
            </div>
        </section>
    );
}
