import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import BlobCircle from './BlobCircle';

export default function About() {
	return (
		<section id="about" className="py-20 pt-20 bg-zinc-300 relative">
			<div className="max-w-screen-xl mx-auto  max-sm:w-full space-y-20 text-secondary relative z-30 px-2">
				<Image
					src={'/images/desktop-smartphone-app-development.png'}
					alt="About me"
					width={1000}
					height={1000}
					className="absolute top-0 left-1/2  opacity-[.03] transform -translate-x-1/2 -rotate-12 scale-150"
				/>
				<SectionTitle
					title="About"
					subtitle="A little bit about myself"
					className="items-center"
				/>
				<div className="flex flex-col gap-12 items-center">
					<BlobCircle />
				</div>
			</div>
		</section>
	);
}
