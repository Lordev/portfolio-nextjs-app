import ProjectPostList from "../ProjectPosts/ProjectPostList";
import ProjectSelect from "../ProjectSelect";

export default function Projects() {
    return (
        <section
            id="projects"
            className="bg-zinc-300 border-t-[1px]  text-secondary relative z-20 -mt-80 pt-80 pb-20 mx-auto border-b-4 border-accent"
        >
            <div className="container mx-auto  ">
                <ProjectSelect />
                <ProjectPostList />
            </div>
        </section>
    );
}
