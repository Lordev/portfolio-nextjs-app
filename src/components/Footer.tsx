import Link from 'next/link';

import socialLinks from '@/lib/data/socialLinks';

type SocialLinkKey = keyof typeof socialLinks;

const links: SocialLinkKey[] = ['github', 'linkedin'];

export default function Footer() {
	return (
		<footer className="gap-12 py-20 text-center bg-black/80 z-20 opacity-75">
			<ul className="flex flex-row justify-center gap-4 mb-8">
				{links.map(link => {
					const { icon: Icon, href } = socialLinks[link];
					return (
						<li key={link}>
							<Link
								href={href}
								target="_blank"
								rel={'noopener noreferrer'}
							>
								<Icon
									width={28}
									height={28}
									className="hover:text-accent transition-colors duration-100 ease-in-out"
								/>
							</Link>
						</li>
					);
				})}
			</ul>
			<span className="text-[.8rem]">
				Created by Lorenzo Sallons &copy;2024
			</span>
		</footer>
	);
}
