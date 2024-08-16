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
	return (
		<div className={clsx('mb-16 flex flex-col gap-5 w-90', className)}>
			<h2 className="rounded-full py-2 px-6 w-fit border-2 border-white/20 drop-shadow-doubler">
				{title}
			</h2>
			<div>
				<h3>{subtitle}</h3>
			</div>
		</div>
	);
}
