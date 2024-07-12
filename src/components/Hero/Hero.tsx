'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer';
import Button from '../Button/Button';
import HeroIconsBox from './HeroIconsBox';
import LogoCompany from '../svg/Icon';
import Image from 'next/image';
import RotatingSlider from './RotatingSlider';
import Spline from '@splinetool/react-spline/next';

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

	const scrollTransformNegative = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, -100]),
		{
			stiffness: 900,
			damping: 300,
		}
	);

	return (
		<section id="home" className="h-screen relative">
			<div className="min-h-screen z-50 max-w-screen-sm mx-auto justify-center max-md:py-4 sm:px-8 px-2 flex flex-col gap-y-40 pb-40 ">
				<motion.div
					style={{
						y: scrollTransformPositive,
					}}
					className="max-w-screen-2xl flex flex-col items-center gap-40 text-center z-30"
				>
					<div className="relative w-[500px]">
						<RotatingSlider />
						<Image
							src="/images/developer-3d-model.png"
							alt="Hero image"
							width={430}
							height={430}
							className="absolute top-28 left-1/2 -translate-x-1/2 z-10"
						/>
					</div>
					<div className="space-y-8  max-w-screen-sm">
						<h1
							data-content="Hi I'm"
							className="relative after:absolute after:inset-0 after:content-[attr(data-content)] after:text-transparent after:text-6xl after:lg:text-9xl after:sm:text-3xl after:tracking-widest after:uppercase after:font-jetBrains after:font-medium after:z-30
								after:[-webkit-text-stroke:2px_var(--primary)]"
						>
							Hi {`I'm`}{' '}
							<span className="text-accent">Lorenzo</span>
						</h1>
						<div className=" flex items-center justify-center">
							<div className="h-[.5px] w-8 bg-zinc-400 flex items-center mr-8" />
							<HeroIconsBox />
							<div className="h-[.5px] w-8 bg-zinc-400 ml-8" />
						</div>
						<h5>
							Frontend Developer, specialized in React, Next.js,
							and TailwindCSS
						</h5>
						<Button
							label="Latest Projects"
							primary={false}
							backgroundColor="var(--accent-secondary)"
							textColor="var(--accent)"
						/>
					</div>
				</motion.div>
			</div>
			<div className="absolute -bottom-10 h-[40vh] w-full ">
				<div className="relative w-full h-full">
					<motion.div
						style={{
							y: scrollTransformNegative,
						}}
						className="z-20 absolute top-0 left-1/2 transform -translate-x-1/2 max-2xl:min-w-[1520px] w-full"
					>
						<Image
							src={'/images/snow-mountain-01.png'}
							width={1920}
							height={728}
							alt="Snow mountain"
							className="h-full w-full object-center"
						/>
					</motion.div>
					{/* Uncomment and adjust the second Image component as needed */}
					<motion.div
						style={{
							y: scrollTransformNegative,
						}}
						className="z-20 absolute top-0 left-1/2 transform -translate-x-1/2 max-2xl:min-w-[1520px] w-full"
					>
						<Image
							src={'/images/snow-mountain-02.png'}
							width={1920}
							height={728}
							alt="Snow mountain"
							className="h-full w-full object-center"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
