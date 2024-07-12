'use client';
import * as React from 'react';
import { SVGProps } from 'react';
import { motion } from 'framer-motion';

interface CurlyLineProps extends SVGProps<SVGSVGElement> {
	animateTrigger: boolean;
}

const CurlyLine: React.FC<CurlyLineProps> = ({ animateTrigger, ...props }) => (
	<div style={{ display: 'inline-block' }} className="cursor-pointer">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 56 6"
			fill="none"
			{...props}
		>
			<motion.path
				stroke="currentColor"
				d="M.5 3C3.634.813 5.428-.8 8 3s4.832 2.864 7.5 0S19.838.449 23 3s4.65 3.156 7.5 0C33.35-.156 34.986-.384 38 3c3.014 3.384 4.571 3.1 7.5 0C48.429-.1 50.071-.465 53 3"
				initial={{ pathLength: 0 }}
				animate={{ pathLength: animateTrigger ? 1 : 0 }}
				transition={{ duration: 0.5 }}
			/>
		</svg>
	</div>
);

export default CurlyLine;
