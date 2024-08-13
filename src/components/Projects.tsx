import ProjectPosts from './ProjectPosts';
import SectionTitle from './SectionTitle';

export default function Projects() {
	return (
		<div
			id="projects"
			className="bg-zinc-300 text-secondary relative z-20 pt-20 pb-20 px-8 mx-auto border-b-4 border-accent"
		>
			<div className="max-w-screen-xl mx-auto">
				<div className="text-center flex flex-col items-center gap-5">
					<SectionTitle
						title="Projects"
						subtitle="my collection"
						className="items-center"
					/>
				</div>
				<ProjectPosts />
			</div>
		</div>
	);
}
