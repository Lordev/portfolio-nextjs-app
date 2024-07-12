import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import BlobCircle from './BlobCircle';

export default function About() {
	return (
		<div id="about" className="z-40 relative">
			<div className="relative grid bg-zinc-300 px-6 text-secondary lg:[clipPath:_polygon(0_0,100%_0%,100%_100%,0_80%)] [clipPath:_polygon(0_0,100%_0%,100%_100%,0_90%)] pb-60 gap-16 pt-20">
				<div className="md:grid gap-x-16s  mx-auto max-w-screen-xl ">
					<div className="flex flex-col gap-5 items-center text-center mb-16">
						<SectionTitle title="Experience" />
						<div>
							<h3>My knowledge and toolset</h3>
						</div>
						<div></div>
					</div>
					<div className="grid grid-cols-3 max-lg:grid-cols-1  gap-2">
						<div className=" border-2 p-8 bg-zinc-100 text-secondary ">
							<div className="flex items-center gap-4 mb-4">
								<Image
									src="/icons/backend-icon.png"
									width={50}
									height={50}
									alt="backend"
								/>
								<h3>
									<span className='relative before:absolute before:h-2 before:bottom-0 before:w-full before:content-[""] before:bg-accent-secondary'>
										Backend{' '}
									</span>
									<br />
									development
								</h3>
							</div>
							<div className="before:content-[''] before:w-[1px] before:h-[60%] before:bg-muted before:absolute relative before:left-4 before:inset-0 before:top-1/2 before:-translate-y-1/2 ">
								<div className="before:content-['<p>'] after:content-['</p>'] before:text-muted after:text-muted">
									<p className="pl-10 ">
										Building responsive and dynamic web
										applications with modern technologies. I
										specialize in React and Next.js.
									</p>
								</div>
							</div>
						</div>
						<div className=" border-2 p-8 bg-zinc-100 text-secondary  lg:-translate-y-5">
							<div className="flex items-center gap-4 mb-4">
								<Image
									src="/icons/frontend-icon.png"
									width={50}
									height={50}
									alt="Frontend"
								/>
								<h3>
									{' '}
									<span className='relative before:absolute before:h-2 before:bottom-0 before:w-full before:content-[""] before:bg-accent'>
										Frontend{' '}
									</span>
									<br />
									development
								</h3>
							</div>
							<div className="before:content-[''] before:w-[1px] before:h-[60%] before:bg-muted before:absolute relative before:left-4 before:inset-0 before:top-1/2 before:-translate-y-1/2 ">
								<div className="before:content-['<p>'] after:content-['</p>'] before:text-muted after:text-muted">
									<p className="pl-10 ">
										Building responsive and dynamic web
										applications with modern technologies. I
										specialize in React and Next.js.
									</p>
								</div>
							</div>
						</div>
						<div className=" border-2 p-8 bg-zinc-100 text-secondary ">
							<div className="flex items-center gap-4 mb-4">
								<Image
									src="/icons/ci-cd-icon.png"
									width={50}
									height={50}
									alt="ci-cd"
								/>
								<h3>
									<span className='relative before:absolute before:h-2 before:bottom-0 before:w-full before:content-[""] before:bg-yellow-500'>
										CI/CD Pipeline{' '}
									</span>
									<br />
									integration
								</h3>
							</div>
							<div className="before:content-[''] before:w-[1px] before:h-[60%] before:bg-muted before:absolute relative before:left-4 before:inset-0 before:top-1/2 before:-translate-y-1/2 ">
								<div className="before:content-['<p>'] after:content-['</p>'] before:text-muted after:text-muted">
									<p className="pl-10 ">
										Building responsive and dynamic web
										applications with modern technologies. I
										specialize in React and Next.js.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="py-20 -mt-60 pt-60 bg-zinc-300">
				<div className="max-w-screen-xl mx-auto  max-sm:w-60 space-y-8 text-secondary relative">
					<Image
						src={'/images/desktop-smartphone-app-development.png'}
						alt="About me"
						width={1000}
						height={1000}
						className="absolute top-0 left-1/2  opacity-[.03] transform -translate-x-1/2 -rotate-12 scale-150"
					/>
					<div className="mb-16 text-center items-center flex flex-col gap-5 w-90">
						<SectionTitle title="About" />
						<div>
							<h3>A little bit about myself</h3>
						</div>
					</div>
					<div className="flex flex-col gap-12 items-center">
						<BlobCircle />
					</div>
					{/* <div className="flex-col flex items-center space-y-6 bg-zinc-400 p-8">
						<Image
							className="opacity-90"
							alt="Intuitive web design"
							src="/icon-intuitive.png"
							width={97}
							height={97}
						/>
						<h4>Intuitive</h4>
						<p>
							Designs that prioritize ease of use and seamless
							navigation.
						</p>
					</div>
					<div className="flex-col flex items-center space-y-6 bg-zinc-400 p-8 ">
						<Image
							className="opacity-90"
							alt="dynamic web design"
							src="/icon-dynamic.png"
							width={97}
							height={97}
						/>
						<h4>Dynamic</h4>
						<p>
							Engaging web apps that respond to user interactions.
						</p>
					</div>
					<div className="flex-col flex items-center space-y-6 bg-zinc-400 p-8 ">
						<Image
							className="opacity-90"
							alt="fast web design"
							src="/icon-rocket.png"
							width={97}
							height={97}
						/>
						<h4>Fast</h4>
						<p>
							Optimized for quick load times and smooth
							performance.
						</p>
					</div>
					<div className="flex-col flex items-center space-y-6 bg-zinc-400 p-8 ">
						<Image
							className="opacity-90"
							alt="responsive web design"
							src="/icon-wrench.png"
							width={97}
							height={97}
						/>
						<h4>Responsive</h4>
						<p>
							Perfectly tailored for all devices and screen sizes.
						</p>
					</div> */}
				</div>
			</div>
		</div>
	);
}
