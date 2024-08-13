import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

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
	<HtmlIcon key="html" className={clsx(svgClasses, 'text-[#f16529]')} />,
	<CssIcon key="css" className={clsx(svgClasses, 'text-[#006eba]')} />,
	<JavascriptIcon
		key="javascript"
		className={clsx(svgClasses, 'text-[#e9ca32]')}
	/>,
	<TypescriptIcon
		key="typescript"
		className={clsx(svgClasses, 'text-[#3178c6]')}
	/>,
	<ReactIcon key="react" className={clsx(svgClasses, 'text-[#222222]')} />,
	<NextJsIcon key="nextjs" className={clsx(svgClasses, 'text-[#ffffff]')} />,
	<TailwindIcon
		key="tailwind"
		className={clsx(svgClasses, 'text-[#4fb3b5]')}
	/>,
	<FigmaIcon key="figma" className={clsx(svgClasses, 'text-[#e9ca32]')} />,
];

export default function RotatingSlider() {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

	const quantity = svgIcons.length;
	const radius = isMobile ? 115 : 175;

	const rotating = svgIcons.map((svgIcon, i) => {
		return (
			<div
				key={svgIcon.key}
				className="absolute max-md:w-8"
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
		<div className="w-full h-40 relative text-center overflow-hidden z-20">
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
