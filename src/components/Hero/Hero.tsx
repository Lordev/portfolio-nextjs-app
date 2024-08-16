'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
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

	// Fade-in and slide-up effect for initial load
	const fadeInSlideUp = {
		initial: { opacity: 0, y: 50 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 1, ease: 'easeOut' },
	};

	// Splitting text into individual letters for animation
	const text = "Hello, I'm";
	const name = 'Lorenzo';
	const letters = text.split('').map((char, index) => (
		<motion.span
			key={index}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				delay: 0.1 * index,
				duration: 0.6,
				ease: 'easeOut',
			}}
		>
			{char}
		</motion.span>
	));

	const nameLetters = name.split('').map((char, index) => (
		<motion.span
			key={index}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				delay: 0.1 * (index + text.length),
				duration: 0.6,
				ease: 'easeOut',
			}}
			className="text-accent"
		>
			{char}
		</motion.span>
	));

	return (
		<section
			id="home"
			className="min-h-[700px] sm:min-h-[800px] md:min-h-[900px] lg:min-h-[950px] h-screen relative px-2"
			ref={refContainer}
		>
			<div className="min-h-screen z-0 max-w-screen-sm mx-auto justify-center flex flex-col ">
				<motion.div
					style={{
						y: scrollTransformPositive,
					}}
					className="max-w-screen-2xl flex flex-col items-center gap-40 text-center  mb-20"
				>
					<motion.div
						className="relative lg:w-[400px] md:w-[350px] sm:w-[300px] w-[250px]"
						initial={fadeInSlideUp.initial}
						animate={fadeInSlideUp.animate}
						transition={fadeInSlideUp.transition}
					>
						<RotatingSlider />
						<Image
							src="/images/developer-3d-model.png"
							alt="Hero image"
							width={400}
							height={400}
							className="absolute top-20 left-1/2 -translate-x-1/2 z-10"
						/>
					</motion.div>
					<motion.div
						className="flex flex-col gap-8 items-center max-sm:-mt-5 sm:pt-4 md:pt-16 lg:pt-24"
						initial={fadeInSlideUp.initial}
						animate={fadeInSlideUp.animate}
						transition={fadeInSlideUp.transition}
					>
						<h1 className="relative lg:text-8xl sm:text-3xl text-xl tracking-wide uppercase font-medium z-10">
							{letters}
							<br />
							{nameLetters}
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
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
