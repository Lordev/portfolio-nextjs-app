import PostContainer from './PostContainer.';
import Image from 'next/image';
import Link from 'next/link';
import ProjectTag from './ProjectTag';
import ButtonModalOpen from './ButtonModalOpen';

export default function ProjectPosts() {
	return (
		<div className="grid grid-cols-1 gap-16 mx-auto pt-20 px-2">
			<div className="flex items-center">
				<PostContainer fadeInDirection="left">
					<Link
						href="https://strategysphere-advisors-website.vercel.app/"
						target="blank"
					>
						<Image
							src={'/images/strategysphere-frame.png'}
							width={1500}
							height={850}
							alt="project cher's beauty salons"
							className="object-cover"
						/>
					</Link>
				</PostContainer>
				<div className="w-[60rem] flex flex-col gap-5">
					<div>
						<h4>Strategysphere Advisors</h4>
						<h6>Consulting office</h6>
					</div>
					<p>
						I created this modern website for Strategysphere
						Advisors, a consulting office.
					</p>
					<div className="flex gap-2 flex-wrap">
						<ProjectTag label="Typescript" />
						<ProjectTag label="NextJs" />
						<ProjectTag label="TailwindCss" />
						<ProjectTag label="Sanity.io" />
						<ProjectTag label="Figma" />
					</div>
					<ButtonModalOpen />
				</div>
			</div>
			<div className="flex items-center">
				<div className="w-[60rem] flex flex-col gap-5">
					<div>
						<h4>Radiant Festival</h4>
						<h6>Festival in Amsterdam</h6>
					</div>
					<p>
						I designed the Radiant Festival website with a vibrant
						jungle theme using Figma. The site features engaging
						leaf animations in the menu and on the main page to
						enhance the festival experience. Users can easily
						purchase tickets through our integrated shopping side
						menu, powered by Stripe. For smooth state management, I
						utilized Zustand.
					</p>
					<div className="flex gap-2 flex-wrap">
						<ProjectTag label="Typescript" />
						<ProjectTag label="NextJs" />
						<ProjectTag label="TailwindCss" />
						<ProjectTag label="Stripe" />
					</div>
				</div>

				<PostContainer fadeInDirection="right">
					<Link
						href="https://festival-website-xkg2.vercel.app/"
						target="blank"
					>
						<Image
							src={'/images/festival-website-frame.png'}
							width={1500}
							height={850}
							alt="project cher's beauty salons"
							className="object-cover"
						/>
					</Link>
				</PostContainer>
			</div>
			<div className="flex items-center">
				<PostContainer fadeInDirection="left">
					<Link
						href="https://website-cheryl.vercel.app/"
						target="blank"
					>
						<Image
							src={'/images/chers-beauty-sallons-frame.png'}
							width={1500}
							height={850}
							alt="project cher's beauty salons"
							className="object-cover"
						/>
					</Link>
				</PostContainer>
				<div className="w-[60rem] flex flex-col gap-5">
					<div>
						<h4>Cher's Beauty Sallons</h4>
						<h6>Elegance in Every Stroke</h6>
					</div>
					<p>
						I designed this elegant makeup artist website with a
						sophisticated color palette. It features a gallery of
						the artist's work and an Instagram API integration to
						display the latest posts in a slider. The design was
						crafted in Figma, inspired by similar industry websites.
					</p>
					<div className="flex gap-2 flex-wrap">
						<ProjectTag label="HTML" />
						<ProjectTag label="SCSS" />
						<ProjectTag label="Javascript" />
					</div>
				</div>
			</div>
			<div className="flex items-center">
				<div className="w-[60rem] flex flex-col gap-5">
					<div>
						<h4>My Portfolio</h4>
						<h6>Futuristic Design with Animations</h6>
					</div>
					<p>
						My portfolio features a futuristic design with dynamic
						animations created using the Framer Motion library. It
						highlights a modern aesthetic and smooth user
						interactions. Contentful is used for flexible content
						management, allowing easy updates and additions to
						projects.
					</p>
					<div className="flex gap-2 flex-wrap">
						<ProjectTag label="Typescript" />
						<ProjectTag label="NextJs" />
						<ProjectTag label="TailwindCss" />
						<ProjectTag label="Framer Motion" />
						<ProjectTag label="Contentful" />
					</div>
				</div>

				<PostContainer fadeInDirection="right">
					<Link href="/" target="blank">
						<Image
							src={'/images/my-portfolio-frame.png'}
							width={1500}
							height={850}
							alt="project cher's beauty salons"
							className="object-cover"
						/>
					</Link>
				</PostContainer>
			</div>
		</div>
	);
}
