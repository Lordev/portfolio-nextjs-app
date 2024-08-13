'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer';
import HeroIconsBox from './HeroIconsBox';
import Image from 'next/image';
import RotatingSlider from './RotatingSlider';
import AnchorLink from '../Button/AnchorLink';

export default function Hero() {
	const refContainer = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: refContainer,
		offset: ['0 0', '1 0'],
		smooth: 0.2,
	});

	const scrollTransformPositive = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, 1200]),
		{
			stiffness: 900,
			damping: 300,
		}
	);

	return (
		<section
			id="home"
			className="min-h-[700px] sm:min-h-[800px] md:min-h-[900px] lg:min-h-[950px] h-screen relative"
		>
			<div className="min-h-screen z-20 max-w-screen-sm mx-auto justify-center  flex flex-col  ">
				<motion.div
					style={{
						y: scrollTransformPositive,
					}}
					className="max-w-screen-2xl flex flex-col items-center gap-40 text-center z-30 mb-20"
				>
					<div className="relative lg:w-[400px] md:w-[350px] sm:w-[300px] w-[250px]">
						<RotatingSlider />
						<Image
							src="/images/developer-3d-model.png"
							alt="Hero image"
							width={400}
							height={400}
							className="absolute top-20 left-1/2 -translate-x-1/2 z-10 "
						/>
					</div>
					<div className="flex flex-col gap-8 items-center max-sm:-mt-5 sm:pt-4 md:pt-16 lg:pt-24 ">
						<h1
							data-content="Hello, I'm"
							className="relative after:absolute after:inset-0 after:content-[attr(data-content)] after:text-transparent after:lg:text-8xl after:sm:text-3xl after:text-xl  after:tracking-wide after:uppercase after:font-medium after:z-30
            after:[-webkit-text-stroke:2px_var(--primary)]"
						>
							Hello, I{"'"}m <br />
							<span
								data-content-2="Lorenzo"
								className="text-accent"
							>
								Lorenzo
							</span>
						</h1>
						<div className="flex items-center justify-center">
							<div className="h-[.5px] w-8 bg-zinc-400 flex items-center mr-8" />
							<HeroIconsBox />
							<div className="h-[.5px] w-8 bg-zinc-400 ml-8" />
						</div>
						<h5>
							Passionate Frontend Developer specializing in React,
							Next.js, and TailwindCSS
						</h5>
						<AnchorLink
							label="My Latest Projects"
							primary={false}
							backgroundColor="var(--accent-secondary)"
							textColor="var(--accent)"
							href="#projects"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
