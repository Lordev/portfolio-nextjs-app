import React, { useState } from 'react';
import socialLinks from '@/lib/data/socialLinks';
import Link from 'next/link';

type SocialLinkKey = keyof typeof socialLinks;

const links: SocialLinkKey[] = ['mail', 'linkedin', 'twitter', 'github'];

export default function HeroIconsBox() {
	const [hoveredElement, setHoveredElement] = useState<
		number | string | null
	>(null);

	const handleHover = (e: number | string) => {
		setHoveredElement(e);
	};

	return (
		<div className="gap-4 rounded-full justify-center items-center flex text-zinc-400">
			{links.map(link => {
				const { icon: Icon, href } = socialLinks[link];
				return (
					<div
						key={link}
						className={`transition-all cursor-pointer duration-200 ease-in   ${
							hoveredElement === link
								? 'hover:scale-150 text-accent active:scale-125'
								: ''
						} ${
							hoveredElement && hoveredElement !== link
								? 'scale-75 text-zinc-400'
								: ''
						}`}
						onMouseEnter={() => handleHover(link)}
						onMouseLeave={() => setHoveredElement(null)}
					>
						<Link
							href={href}
							target="_blank"
							rel={'noopener noreferrer'}
						>
							<Icon width={24} height={24} />
						</Link>
					</div>
				);
			})}
		</div>
	);
}
