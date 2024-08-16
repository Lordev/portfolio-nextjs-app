'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, PropsWithChildren } from 'react';

interface BlobCircleContainerProps extends PropsWithChildren {
	borderColor: string;
}

export default function BlobCircleContainer({
	children,
	borderColor,
}: BlobCircleContainerProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });

	const blobVariants = {
		hidden: { opacity: 0, y: 100 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	};

	return (
		<motion.div
			ref={ref}
			className="max-w-screen-sm [border-radius:_30%_70%_33%_67%_/_53%_51%_49%_47%] flex items-center justify-center p-20 shadow-2xl border-4 bg-primary z-10"
			style={{
				borderColor: borderColor,
			}}
			initial="hidden"
			animate={isInView ? 'visible' : 'hidden'}
			whileHover={{ scale: 1.1 }}
			variants={blobVariants}
		>
			<p className="text-base md:text-normal font-jetBrains">
				{children}
			</p>
		</motion.div>
	);
}
