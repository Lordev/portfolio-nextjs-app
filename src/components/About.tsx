import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';

export default function About() {
	return (
		<div id="about" className="z-30 relative">
			<div className="relative grid bg-zinc-300 px-6 text-secondary lg:[clipPath:_polygon(0_0,100%_0%,100%_100%,0_80%)] [clipPath:_polygon(0_0,100%_0%,100%_100%,0_90%)] pb-60 gap-16 pt-20">
				<div className="md:grid gap-x-16  mx-auto max-w-screen-lg ">
					<div className="flex flex-col gap-5 items-center text-center mb-8">
						<SectionTitle title="Experience" />
						<div>
							<h3>My knowledge and toolset</h3>
						</div>
						<div></div>
					</div>
					<div className="grid grid-cols-3 gap-2 h-80">
						<div className="border-secondary border-2 p-8 bg-zinc-200 text-secondary">
							<div className="flex items-center gap-4 mb-4">
								<Image
									src="/icons/frontend-icon.png"
									width={50}
									height={50}
									alt="Frontend"
								/>
								<h4>Frontend development</h4>
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
						<div className="border-secondary border-2 p-8 bg-zinc-200 text-secondary">
							<div className="flex items-center gap-4 mb-4">
								<Image
									src="/icons/backend-icon.png"
									width={50}
									height={50}
									alt="backend"
								/>
								<h4>Backend development</h4>
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
						<div className="border-secondary border-2 p-8 bg-zinc-200 text-secondary">
							<div className="flex items-center gap-4 mb-4">
								<Image
									src="/icons/ci-cd-icon.png"
									width={50}
									height={50}
									alt="ci-cd"
								/>
								<h4>CI-CD pipeline integration</h4>
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
			<div className="py-20 bg-zinc-500/50 -mt-40 pt-60">
				<div className="max-w-screen-lg mx-auto text-center grid lg:grid-cols-4 gap-8 justify-center sm:grid-cols-2 grid-cols-1 max-sm:w-60">
					<div className="flex-col flex items-center space-y-6">
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
					<div className="flex-col flex items-center space-y-6 ">
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
					<div className="flex-col flex items-center space-y-6 ">
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
					<div className="flex-col flex items-center space-y-6 ">
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
					</div>
				</div>
			</div>
		</div>
	);
}
