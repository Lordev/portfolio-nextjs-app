'use client';
import { useState } from 'react';
import Image from 'next/image';
import LeftChevronIcon from '../svg/LeftChevronIcon';
import RightChevronIcon from '../svg/RightChevronIcon';

interface ProjectInfoSliderProps {
	sliderImages: string[];
}

export default function ProjectInfoSlider({
	sliderImages = [],
}: ProjectInfoSliderProps) {
	const [index, setIndex] = useState(0);

	const quantity = sliderImages.length;

	const handleNext = () => {
		setIndex(prevIndex => (prevIndex + 1) % quantity);
	};

	const handlePrev = () => {
		setIndex(prevIndex => (prevIndex - 1 + quantity) % quantity);
	};

	return (
		<div className="relative overflow-hidden">
			<div
				className={`w-[100% * ${quantity}] transition-transform duration-500 ease-in-out n`}
				style={{ transform: `translateX(-${index * 100}%)` }}
			>
				<div className={`flex `}>
					{sliderImages.map((image, index) => (
						<Image
							key={index}
							src={image}
							width={1600}
							height={800}
							alt="Project Image"
							className="object-cover"
						/>
					))}
				</div>
			</div>
			<button
				onClick={handlePrev}
				className="absolute top-1/2 -translate-y-1/2 left-0 h-full bg-black/10 w-20 hover:bg-black/20 transition-color duration-200 ease-in-out flex justify-center items-center"
			>
				<LeftChevronIcon
					width={30}
					height={30}
					className="text-primary "
				/>
			</button>
			<button
				onClick={handleNext}
				className="absolute top-1/2 -translate-y-1/2 right-0 h-full bg-black/10 w-20 hover:bg-black/20 transition-color duration-200 ease-in-out flex justify-center items-center"
			>
				<RightChevronIcon
					width={30}
					height={30}
					className="text-primary "
				/>
			</button>
		</div>
	);
}
