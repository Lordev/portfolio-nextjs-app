'use client';
import { motion } from 'framer-motion';
import { aboutData } from '@/lib/data';

export default function BlobCircle() {
	const blobVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
		hover: { scale: 1.1, rotate: 0, transition: { duration: 0.3 } },
	};

	return (
		<>
			{aboutData.map(data => (
				<motion.div
					key={data.title}
					className="max-w-screen-sm [border-radius:_30%_70%_33%_67%_/_53%_51%_49%_47%] flex items-center justify-center p-20 -rotate-2 transform shadow-2xl border-4 bg-primary"
					style={{
						borderColor: data.borderColor,
					}}
					initial="hidden"
					whileInView="visible"
					whileHover="hover"
					viewport={{ once: true, amount: 0.1 }}
					variants={blobVariants}
				>
					<p className="text-base md:text-normal font-jetBrains">
						{data.title}
					</p>
				</motion.div>
			))}
		</>
	);
}
