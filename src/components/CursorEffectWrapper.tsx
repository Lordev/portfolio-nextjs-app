'use client';
import { useMousePositionContext } from '@/hooks/useMousePositionContext';
import { useEffect, useState, PropsWithChildren } from 'react';

interface CursorEffectWrapperProps extends PropsWithChildren {
	children: React.ReactNode;
}

export default function CursorEffectWrapper({
	children,
}: CursorEffectWrapperProps) {
	const { containerRef, elX, elY } = useMousePositionContext();
	const [isHoverSupported, setIsHoverSupported] = useState(true);

	useEffect(() => {
		const hoverMediaQuery = window.matchMedia('(hover: hover)');
		const isTouchDevice =
			'ontouchstart' in window || navigator.maxTouchPoints > 0;

		setIsHoverSupported(
			!window.matchMedia('(hover: none)').matches ||
				window.matchMedia('(pointer: coarse)').matches
		);

		const handleMediaChange = (e: MediaQueryListEvent) => {
			setIsHoverSupported(e.matches && !isTouchDevice);
		};

		const handleTouchStart = () => setIsHoverSupported(false);

		hoverMediaQuery.addEventListener('change', handleMediaChange);
		window.addEventListener('touchstart', handleTouchStart);

		return () => {
			hoverMediaQuery.removeEventListener('change', handleMediaChange);
			window.removeEventListener('touchstart', handleTouchStart);
		};
	}, []);

	return (
		<div
			className="relative overflow-hidden w-full h-full"
			ref={containerRef}
		>
			{isHoverSupported && (
				<div
					className={`absolute w-[800px] h-[800px] rounded-full bg-hover-gradient opacity-20 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-radial-gradient-accent`}
					style={{
						left: elX,
						top: elY,
					}}
				></div>
			)}
			{children}
		</div>
	);
}
