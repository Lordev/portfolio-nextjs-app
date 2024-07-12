import { PropsWithChildren, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useMenu } from '@/context/useMenuContext';
import MenuButton from './MenuButton';

interface MenuContainerProps extends PropsWithChildren {
	activeLink: string | null;
}

export default function MenuContainer({
	activeLink,
	children,
}: MenuContainerProps) {
	const { isMenuOpen } = useMenu();
	const navControls = useAnimation();
	const ulControls = useAnimation();

	const handleChangeClasses = (init: string, onChange: string) => {
		if (activeLink && !['about', 'projects'].includes(activeLink)) {
			return init;
		} else {
			return onChange;
		}
	};

	const navAnimation = {
		open: {
			scale: 1,
			matrix3d:
				'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
			transition: { type: 'spring', stiffness: 500, damping: 20 },
		},
		closed: {
			scale: 0,
			matrix3d:
				'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
			transition: { type: 'spring', stiffness: 500, damping: 20 },
		},
	};

	const ulAnimation = {
		open: {
			opacity: 1,
			transition: { duration: 0.3, ease: 'easeIn' },
		},
		closed: {
			opacity: 0,
			transition: { duration: 0 },
		},
	};

	useEffect(() => {
		if (isMenuOpen) {
			navControls.start('open');
			ulControls.start('open');
		} else {
			ulControls.start('closed').then(() => navControls.start('closed'));
		}
	}, [isMenuOpen, navControls, ulControls]);

	return (
		<>
			<motion.div
				className="fixed top-0 right-0 z-50 w-[300px] sm:w-[400px] lg:w-[500px] aspect-square origin-top-right "
				initial="closed"
				animate={navControls}
				variants={navAnimation}
			>
				<nav
					className={`w-full h-full transition-colors duration-200 ease-in shadow-xl rounded-bl-full flex justify-center items-center ${handleChangeClasses(
						'bg-accent-secondary',
						'bg-accent'
					)}`}
				>
					<motion.ul
						className={`bottom-border-r justify-center items-center gap-y-2 flex flex-col mb-20 ml-20 z-50
                    ${handleChangeClasses('text-secondary', 'text-primary')}`}
						initial="closed"
						animate={ulControls}
						variants={ulAnimation}
					>
						{children}
					</motion.ul>
				</nav>
			</motion.div>
		</>
	);
}
