'use client';
import { HtmlHTMLAttributes, useState } from 'react';
import clsx from 'clsx';
import CurlyLine from '../svg/CurlyLine';

interface ButtonUnderlinedProps extends HtmlHTMLAttributes<HTMLButtonElement> {
	label: string;
	setActive: boolean;
	className?: string;
}

export default function ButtonUnderlined({
	label,
	setActive,
	className,
	...props
}: ButtonUnderlinedProps) {
	const [hovered, setHovered] = useState(false);

	const handleHoverEnter = () => {
		return setHovered(true);
	};
	const handleHoverLeave = () => {
		return setHovered(false);
	};

	return (
		<div className="w-fit flex flex-col items-center">
			<button
				onMouseEnter={handleHoverEnter}
				onMouseLeave={handleHoverLeave}
				className={clsx(
					`sm:text-sm text-xs font-kumbh-sans font-semibold uppercase
					transform transition-color duration-200 ease-in-out text-accent
					`,
					className
				)}
				{...props}
			>
				{label}
			</button>
			<div className="-mt-2 ">
				<CurlyLine
					animateTrigger={hovered || setActive}
					className="text-accent"
					style={{ width: '70px', height: '24px' }}
				/>
			</div>
		</div>
	);
}
