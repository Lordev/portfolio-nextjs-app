import React, { useState } from 'react';
import Github from '../svg/Github';
import Twitter from '../svg/Twitter';
import Mail from '../svg/Mail';
import Linkedin from '../svg/Linkedin';

export default function HeroIconsBox() {
	const [hoveredElement, setHoveredElement] = useState<string | null>(null);

	const elements = ['FaGithub', 'FaTwitter', 'CiMail', 'FaLinkedin'];

	const handleHover = (e: string) => {
		setHoveredElement(e);
	};

	return (
		<div className="gap-4 rounded-full md:p-12 p-6 mx-auto justify-center items-center w-48 flex flex-col">
			{elements.map(element => (
				<div
					key={element}
					className={`transition-all cursor-pointer duration-200 ease-in   ${
						hoveredElement === element
							? 'hover:scale-150 text-accent active:scale-125'
							: ''
					} ${
						hoveredElement && hoveredElement !== element
							? 'scale-75 text-zinc-400'
							: ''
					}`}
					onMouseEnter={() => handleHover(element)}
					onMouseLeave={() => setHoveredElement(null)}
				>
					{element === 'FaGithub' && (
						<Github className="w-6 h-6 sm:w-8 sm:h-8" />
					)}
					{element === 'FaTwitter' && (
						<Twitter className="w-6 h-6 sm:w-8 sm:h-8" />
					)}
					{element === 'CiMail' && (
						<Mail className="w-6 h-6 sm:w-8 sm:h-8" />
					)}
					{element === 'FaLinkedin' && (
						<Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
					)}
				</div>
			))}
		</div>
	);
}
