import Image from 'next/image';
import clsx from 'clsx';

import {
	CssIcon,
	ReactIcon,
	HtmlIcon,
	NextJsIcon,
	TypescriptIcon,
	FigmaIcon,
	JavascriptIcon,
	TailwindIcon,
} from '../svg';

const svgClasses =
	'w-full h-full object-cover transition-all duration-200 ease-in-out';

const svgIcons = [
	<HtmlIcon className={clsx(svgClasses, 'text-[#f16529]')} />,
	<CssIcon className={clsx(svgClasses, 'text-[#006eba]')} />,
	<JavascriptIcon className={clsx(svgClasses, 'text-[#e9ca32]')} />,
	<TypescriptIcon className={clsx(svgClasses, 'text-[#3178c6]')} />,
	<ReactIcon className={clsx(svgClasses, 'text-[#222222]')} />,
	<NextJsIcon className={clsx(svgClasses, 'text-[#ffffff]')} />,
	<TailwindIcon className={clsx(svgClasses, 'text-[#4fb3b5]')} />,
	<FigmaIcon className={clsx(svgClasses, 'text-[#e9ca32]')} />,
];

const quantity = svgIcons.length;
const radius = 170; // Adjust this value to control the spacing

export default function RotatingSlider() {
	const rotating = svgIcons.map((svgIcon, i) => {
		return (
			<div
				className="absolute"
				key={i}
				style={{
					transform: `rotateY(${
						i * (360 / quantity)
					}deg) translateZ(${radius}px)`,
				}}
			>
				{svgIcon}
			</div>
		);
	});

	return (
		<div className="w-full h-60 relative text-center overflow-hidden z-20">
			<div className="w-full h-full flex items-center justify-center perspective-1600 ">
				<div className="transform-style-3d transform -rotate-x-[12deg]">
					<div className="relative w-12 h-12 animate-spinTilt transform-style-3d">
						{rotating}
					</div>
				</div>
			</div>
		</div>
	);
}
