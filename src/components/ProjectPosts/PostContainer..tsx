'use client';
import { useScroll, motion, useTransform, cubicBezier } from 'framer';
import { PropsWithChildren, useRef } from 'react';

interface ProjectPostProps extends PropsWithChildren {
	fadeInDirection?: 'left' | 'right';
	classNames?: string;
}

export default function PostContainer({
	children,
	fadeInDirection = 'right',
	classNames,
}: ProjectPostProps) {
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['.5 1', '1.5 1'],
		smooth: 0.8,
	});

	const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

	const rotateY = useTransform(scrollYProgress, [0, 1], [-90, 0], {
		ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
	});

	const transitionXRight = useTransform(scrollYProgress, [0, 1], [400, 0], {
		ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
	});

	const transitionXLeft = useTransform(scrollYProgress, [0, 1], [-400, 0], {
		ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
	});

	return (
		<motion.div
			style={{
				scale: scale,
				opacity: scrollYProgress,
				// rotateY: rotateY,
				translateX:
					fadeInDirection === 'left'
						? transitionXLeft
						: transitionXRight,
			}}
			className={classNames}
			ref={ref}
		>
			<motion.div
				style={{}}
				className={`grid grid-rows-[auto_1fr] border-zinc-400 pb-8 transition-all duration-500 ease-in transform rounded-xl overflow-hidden`}
			>
				{children}
			</motion.div>
		</motion.div>
	);
}
