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
		useTransform(scrollYProgress, [0, 1], [0, 900]),
		{
			stiffness: 900,
			damping: 300,
		}
	);

	const scrollTransformNegative = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, -100]),
		{
			stiffness: 400,
			damping: 90,
		}
	);

	return (
		<section id="home" className="h-screen relative">
			<motion.div
				style={{
					y: scrollTransformPositive,
				}}
				className="min-h-screen  top-0 z-20 bg-fixed max-w-screen-sm mx-auto justify-center max-md:py-16 sm:px-8 px-2 flex flex-col gap-y-40 pb-40"
				ref={refContainer}
			>
				<div className="max-w-screen-2xl flex flex-col items-center gap-16 text-center">
					<div className="relative w-[500px]">
						<RotatingSlider />
						<Image
							src="/images/developer-3d-model.png"
							alt="Hero image"
							width={300}
							height={300}
							className="absolute top-28 left-1/2 -translate-x-1/2 z-10"
						/>
					</div>
					<div className="space-y-8  max-w-screen-sm">
						<h1
							data-content="Hi I'm"
							className="relative after:absolute after:inset-0 after:content-[attr(data-content)] after:text-transparent after:text-6xl after:lg:text-8xl after:sm:text-3xl after:tracking-widest after:uppercase after:font-jetBrains after:font-medium after:z-30
							after:[-webkit-text-stroke:2px_var(--primary)]"
						>
							Hi {`I'm`}{' '}
							<span className="text-accent text-8xl">
								Lorenzo
							</span>
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
							textColor="var(--primary)"
						/>
					</div>
				</div>
			</motion.div>
			<div className=" absolute left-4 top-4  md:left-8 md:top-7">
				<LogoCompany className="text-zinc-400 w-16 h-16 animate-spinSlow" />
			</div>

			<Image
				src="/images/abstract-img-1.png"
				width={250}
				height={230}
				alt="Abstract image"
				className="absolute bottom-0 left-0"
			/>
			<Image
				src="/images/abstract-img-2.png"
				width={250}
				height={230}
				alt="Abstract image"
				className="absolute bottom-0 right-0"
			/>
		</section>
	);
}
