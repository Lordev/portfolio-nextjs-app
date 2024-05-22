import ProjectPost from "./ProjectPost.";

export default function ProjectPostList() {
    return (
        <ul className="grid grid-cols-2 gap-8 mx-auto max-w-[1200px] pt-20">
            <li>
                <ProjectPost fadeInDirection="left" />
            </li>
            <li>
                <ProjectPost />
            </li>
            <li>
                <ProjectPost fadeInDirection="left" />
            </li>
            <li>
                <ProjectPost />
            </li>
            <li>
                <ProjectPost fadeInDirection="left" />
            </li>
            <li>
                <ProjectPost />
            </li>
        </ul>
    );
}
