'use client';
import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ExperienceBoxProps extends PropsWithChildren {
	delay: number;
}

const variants = {
	visible: (custom: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: custom * 0.2, duration: 0.6, ease: 'easeOut' },
	}),
	hidden: {
		opacity: 0,
		y: 100,
	},
};

export default function ExperienceBox({ children, delay }: ExperienceBoxProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			ref={ref}
			custom={delay}
			initial="hidden"
			animate={isInView ? 'visible' : 'hidden'}
			variants={variants}
			className="border-2 p-8 bg-zinc-100 text-secondary"
		>
			{children}
		</motion.div>
	);
}
