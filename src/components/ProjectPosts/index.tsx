import PostContainer from './PostContainer.';
import Image from 'next/image';
import ProjectTag from './ProjectTag';
import Modal from './Modal';
import { ProjectPostsImageData, ProjectModalData } from '@/lib/types';

interface ProjectPostsData {
	title: string;
	subtitle: string;
	description: string;
	projectTags: string[];
	imageData: ProjectPostsImageData;
	modalProps: ProjectModalData;
}

const data: ProjectPostsData[] = [
	{
		title: 'Strategysphere Advisors',
		subtitle: 'Consulting office',
		description:
			'I created this modern website for Strategysphere Advisors, a consulting office.',
		projectTags: ['Typescript', 'NextJs', 'TailwindCss', 'Sanity.io'],
		imageData: {
			imageURL: '/images/strategysphere-frame.png',
			width: 750,
			height: 425,
			animationDirection: 'left',
		},
		modalProps: {
			sliderImages: [
				'/images/strategysphere-advisors-slide-01.png',
				'/images/strategysphere-advisors-slide-02.png',
				'/images/strategysphere-advisors-slide-03.png',
				'/images/strategysphere-advisors-slide-04.png',
			],
			title: 'Strategysphere Advisors',
			description:
				'I created this modern website for Strategysphere Advisors, a consulting office.',
			repositoryUrl: 'https://github.com',
			websiteUrl: 'https://strategysphere-advisors-website.vercel.app/',
		},
	},
	{
		title: 'Radiant Festival',
		subtitle: 'Festival in Amsterdam',
		description:
			'I designed the Radiant Festival website with a vibrant jungle theme using Figma.',
		projectTags: ['Typescript', 'NextJs', 'TailwindCss', 'Stripe', 'Figma'],
		imageData: {
			imageURL: '/images/radiant-festival-frame.png',
			width: 750,
			height: 425,
			animationDirection: 'right',
		},
		modalProps: {
			sliderImages: [
				'/images/radiant-festival-slide-01@800x400.jpg',
				'/images/radiant-festival-slide-02.jpg',
				'/images/radiant-festival-slide-03.jpg',
				'/images/radiant-festival-slide-04.jpg',
			],
			title: 'Radiant Festival',
			description: 'Festival in Amsterdam',
			repositoryUrl: 'https://github.com',
			websiteUrl: 'https://festival-website-xkg2.vercel',
		},
	},
	{
		title: "Cher's Beauty Sallons",
		subtitle: 'Elegance in Every Stroke',
		description:
			'I designed this elegant makeup artist website with a sophisticated color palette.',
		projectTags: ['HTML', 'SCSS', 'Javascript', 'Gulp', 'Parcel'],
		imageData: {
			imageURL: '/images/chers-beauty-sallons-frame.png',
			width: 750,
			height: 425,
			animationDirection: 'left',
		},
		modalProps: {
			sliderImages: [
				'/images/chers-beauty-sallons-slide-01@800x450.jpg',
				'/images/chers-beauty-sallons-slide-02.jpg',
				'/images/chers-beauty-sallons-slide-03.jpg',
			],
			title: "Cher's Beauty Sallons",
			description: 'Elegance in Every Stroke',
			repositoryUrl: 'https://github.com',
			websiteUrl: 'https://website-cheryl.vercel.app/',
		},
	},
];

export default function ProjectPosts() {
	return (
		<div className="grid grid-cols-1 gap-16 mx-auto pt-20 px-2">
			{data.map((project, index) => {
				const {
					title,
					subtitle,
					description,
					projectTags,
					imageData,
					modalProps,
				} = project;
				const { imageURL, width, height, animationDirection } =
					imageData;
				return (
					<div
						className="flex items-center max-lg:justify-center max-lg:flex-col"
						key={title}
					>
						<PostContainer
							fadeInDirection={animationDirection}
							classNames={`max-lg:order-none ${
								animationDirection === 'left' ? '' : 'order-2'
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
						<div className="flex flex-col gap-5">
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
