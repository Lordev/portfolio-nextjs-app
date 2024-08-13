import PostContainer from './PostContainer.';
import Image from 'next/image';
import ProjectTag from './ProjectTag';
import Modal from './Modal';
import { projectPostData } from '@/lib/data/projectPostData';

export default function ProjectPosts() {
	return (
		<div className="grid grid-cols-1 gap-16 mx-auto pt-20 px-2">
			{projectPostData.map((project, index) => {
				const {
					title,
					subtitle,
					description,
					projectTags,
					imageData,
					modalProps,
					id,
				} = project;
				const { imageURL, width, height } = imageData;
				return (
					<div
						className="flex items-center max-lg:justify-center max-lg:flex-col"
						key={id}
					>
						<PostContainer
							fadeInDirection={index % 2 === 0 ? 'left' : 'right'}
							classNames={`max-lg:order-none ${
								index % 2 === 0 ? '' : 'order-2'
							}`}
						>
							<Image
								src={imageURL}
								width={width}
								height={height}
								alt={`project ${title}`}
								className="object-cover "
							/>
						</PostContainer>
						<div className="flex flex-col gap-5 lg:px-20 max-lg:max-w-xl">
							<div>
								<h4>{title}</h4>
								<h6>{subtitle}</h6>
							</div>
							<hr className="border-secondary w-12 border-t-[1px]" />

							<p>{description}</p>
							<div className="flex gap-2 flex-wrap">
								{projectTags.map(tag => (
									<ProjectTag key={tag} label={tag} />
								))}
							</div>
							<Modal projectData={modalProps} />
						</div>
					</div>
				);
			})}
		</div>
	);
}
