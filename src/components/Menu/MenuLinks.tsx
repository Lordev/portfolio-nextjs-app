import { links } from '../../lib/data/links';
import ScrollSpy from 'react-scrollspy-navigation';
import Link from 'next/link';

interface MenuLinksProps {
	setActiveID: (id: string) => void;
	activeLink: string | null;
}

export default function MenuLinks({ setActiveID, activeLink }: MenuLinksProps) {
	const handleChangeClasses = (init: string, onChange: string) => {
		if (
			activeLink &&
			!['experience', 'about', 'projects'].includes(activeLink)
		) {
			return init;
		} else {
			return onChange;
		}
	};

	return (
		<>
			<ScrollSpy onChangeActiveId={setActiveID}>
				{links &&
					links.map(property => (
						<a
							className={'hidden invisible'}
							key={property.label}
							href={`#${property.href}`}
						></a>
						// <a> = not the actual link element only used because of the ScrollSpy
					))}
			</ScrollSpy>
			{links &&
				links.map(property => (
					// <Link> = the actual link element
					<Link
						key={property.label}
						href={`#${property.href}`}
						className={`font-bold font-inter text-base sm:text-normal lg:text-lg transition-color duration-300 uppercase ${handleChangeClasses(
							'hover:text-accent',
							'hover:text-green-500'
						)} ${
							activeLink === property.href
								? `glitch glitch-text  ${handleChangeClasses(
										'text-accent',
										'text-green-500'
										// keep same as text color
								  )}`
								: ''
						}`}
					>
						{property.label}
					</Link>
				))}
		</>
	);
}
