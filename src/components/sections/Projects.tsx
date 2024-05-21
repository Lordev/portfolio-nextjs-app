import ProjectPostList from "../ProjectPosts/ProjectPostList";
import ProjectSelect from "../ProjectSelect";

export default function Projects() {
    return (
        <section
            id="projects"
            className="bg-zinc-300 border-t-[1px] border-white/20 text-secondary relative z-20 pt-20 pb-20 mx-auto"
        >
            <div className="container mx-auto grid grid-cols-2 ">
                <ProjectSelect />
                <ProjectPostList />
            </div>
        </section>
    );
}
