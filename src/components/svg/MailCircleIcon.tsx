import * as React from 'react';
import { SVGProps } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const MailCircleIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			width={144}
			height={146}
			viewBox="0 0 144 146"
			fill="none"
			{...(props as SVGMotionProps<SVGSVGElement>)}
			initial={{ scale: 1, rotate: 0 }}
			animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
			transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
		>
			<path
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={5}
				d="M142 73.286c0 39.118-31.341 70.827-70 70.827-38.661 0-70-31.709-70-70.827C2 34.17 33.339 2.46 72 2.46c38.659 0 70 31.71 70 70.826Z"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={5}
				d="M100.511 99.594H45.487c-3.03 0-5.487-2.447-5.487-5.464V52.443c0-3.017 2.457-5.463 5.487-5.463h55.024c3.032 0 5.489 2.446 5.489 5.463V94.13c0 3.017-2.457 5.464-5.489 5.464Z"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={5}
				d="m43 50.015 30.501 27.319L104 50.015"
			/>
		</motion.svg>
	);
};

export default MailCircleIcon;
