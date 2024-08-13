'use client';
import { AnchorHTMLAttributes, useState } from 'react';
import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
interface AnchorLinkProps extends LinkProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary?: boolean;
	/**
	 * What background color to use
	 */
	backgroundColor?: string;
	/**
	 * How large should the button be?
	 */
	size?: 'small' | 'medium' | 'large';
	/**
	 * Button contents
	 */
	label: string;
	/**
	 * Text color
	 */
	textColor?: string;

	className?: string;
}

/**
 * Primary UI component for user interaction
 */
export default function AnchorLink({
	primary = true,
	size = 'medium',
	backgroundColor,
	label,
	textColor,
	className,
	...props
}: AnchorLinkProps) {
	const [hovered, setHovered] = useState(false);

	const handleHoverEnter = () => {
		setHovered(true);
	};

	const handleHoverLeave = () => {
		setHovered(false);
	};

	return (
		<Link
			onMouseEnter={handleHoverEnter}
			onMouseLeave={handleHoverLeave}
			type="button"
			className={cn(
				'w-fit transition-colors duration-150 ease-in sm:px-8 px-4 sm:py-5 py-4 text-xs sm:text-base font-bold rounded-md',
				className
			)}
			{...props}
			style={{
				backgroundColor: primary
					? hovered
						? textColor
						: backgroundColor
					: hovered
					? backgroundColor
					: 'transparent',
				color: primary
					? hovered
						? backgroundColor
						: textColor
					: hovered
					? textColor
					: backgroundColor,
				border: `2px solid ${!primary && backgroundColor}`,
			}}
		>
			{label}
		</Link>
	);
}
