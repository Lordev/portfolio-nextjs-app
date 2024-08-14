'use client';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface SectionTitleProps {
	title: string;
	subtitle: string;
	className?: string;
}

export default function SectionTitle({
	title,
	subtitle,
	className,
}: SectionTitleProps) {
	const titleVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: 'easeOut' },
		},
	};

	const subtitleVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 },
		},
	};

	return (
		<div className={clsx('mb-16 flex flex-col gap-5 w-90', className)}>
			<motion.h2
				className="rounded-full py-2 px-6 w-fit border-2 border-white/20 drop-shadow-doubler"
				initial="hidden"
				whileInView="visible"
				variants={titleVariants}
				viewport={{ once: true, amount: 0.1 }} // Ensure the animation triggers when 10% is in view
			>
				{title}
			</motion.h2>
			<motion.div
				initial="hidden"
				whileInView="visible"
				variants={subtitleVariants}
				viewport={{ once: true, amount: 0.1 }}
			>
				<h3>{subtitle}</h3>
			</motion.div>
		</div>
	);
}
