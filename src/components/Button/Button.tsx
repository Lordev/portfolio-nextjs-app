'use client';
import { ButtonHTMLAttributes, useState } from 'react';
import { cn } from '@/lib/utils';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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

	/**
	 * Optional click handler
	 */
	onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export default function Button({
	primary = true,
	size = 'medium',
	backgroundColor,
	label,
	textColor,
	className,
	...props
}: ButtonProps) {
	const [hovered, setHovered] = useState(false);

	const handleHoverEnter = () => {
		setHovered(true);
	};

	const handleHoverLeave = () => {
		setHovered(false);
	};

	return (
		<button
			onMouseEnter={handleHoverEnter}
			onMouseLeave={handleHoverLeave}
			type="button"
			className={cn(
				'w-fit transition-colors duration-150 ease-in sm:px-8 px-4 sm:py-5 py-4 text-sm sm:text-md font-bold rounded-md',
				className
			)}
			{...props}
			style={{
				backgroundColor: primary
					? hovered
						? textColor
						: backgroundColor
					: // secondary button
					hovered
					? backgroundColor
					: 'transparent',
				color: primary
					? hovered
						? backgroundColor
						: textColor
					: // secondary button
					hovered
					? textColor
					: backgroundColor,
				border: `2px solid ${backgroundColor}`,
			}}
		>
			{label}
		</button>
	);
}
