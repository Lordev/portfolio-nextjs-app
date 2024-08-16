import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import ExperienceBox from './ExperienceBox';

export default function Experience() {
	return (
		<section id="experience" className="z-30 relative">
			<div className="relative grid bg-zinc-300 px-6 text-secondary gap-16 pt-20">
				<div className="md:grid gap-x-16s  mx-auto max-w-screen-xl ">
					<SectionTitle
						title="Experience"
						subtitle="My knowledge and toolset"
						className="items-center"
					/>
					<div className="grid grid-cols-3 max-lg:grid-cols-1 gap-2 ">
						<ExperienceBox delay={0}>
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
										Handling backend systems with expertise
										in CMS and familiarity with Node.js and
										payment solutions like Stripe. Skilled
										in API integrations and performance
										optimization.
									</p>
								</div>
							</div>
						</ExperienceBox>
						<ExperienceBox delay={1}>
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
										specialize in HTML, CSS (Tailwind,
										SCSS), JS, React and Next.js.
									</p>
								</div>
							</div>
						</ExperienceBox>
						<ExperienceBox delay={2}>
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
										Proficient in CI/CD with Docker, Git,
										and deployment systems. Experienced in
										unit testing with Jest and familiar with
										e2e testing using tools like Cypress,
										optimizing development workflows.
									</p>
								</div>
							</div>
						</ExperienceBox>
					</div>
				</div>
			</div>
		</section>
	);
}
