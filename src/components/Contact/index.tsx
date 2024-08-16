'use client';
import ContactForm from './ContactForm';
import ContactTextBox from './ContactTextBox';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true });

	const variants = {
		hidden: { opacity: 0, y: 300 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 1.2, ease: 'easeOut' },
		},
	};

	return (
		<div
			className="relative px-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/20 from-2% to-black/80 py-20"
			id="contact"
		>
			<div className="max-w-screen-md mx-auto space-y-20">
				<ContactTextBox />
				<motion.div
					ref={ref}
					animate={inView ? 'visible' : 'hidden'}
					variants={variants}
				>
					<ContactForm />
				</motion.div>
			</div>
		</div>
	);
}
