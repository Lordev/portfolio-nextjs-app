'use client';
import LeftChevronIcon from '../svg/LeftChevronIcon';
import RightChevronIcon from '../svg/RightChevronIcon';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProjectInfoSliderProps {
	sliderImages: string[];
}

const height = 450;
const width = 800;
const aspectRatio = width / height;

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
				className={`w-[100% * ${quantity}] transition-transform duration-500 ease-in-out`}
				style={{ transform: `translateX(-${index * 100}%)` }}
			>
				<div
					className={`flex md:max-w-[800px] sm:max-w-[600px] xs:max-w-[350px] max-w-full`}
					style={{
						aspectRatio: `${aspectRatio}`,
					}}
				>
					{quantity > 0 ? (
						sliderImages.map((image, index) => (
							<Image
								key={image}
								src={image}
								width={width}
								height={height}
								alt={`slider-image-${index}`}
								className="object-cover"
							/>
						))
					) : (
						<div className="flex justify-center items-center w-full h-full">
							<p className="text-center text-gray-500">
								No images available
							</p>
						</div>
					)}
				</div>
			</div>
			{quantity > 0 && (
				<>
					<button
						onClick={handlePrev}
						className="absolute top-1/2 -translate-y-1/2 left-0 h-full bg-black/10 w-20 hover:bg-black/20 transition-color duration-200 ease-in-out flex justify-center items-center"
					>
						<LeftChevronIcon
							width={30}
							height={30}
							className="text-primary"
						/>
					</button>
					<button
						onClick={handleNext}
						className="absolute top-1/2 -translate-y-1/2 right-0 h-full bg-black/10 w-20 hover:bg-black/20 transition-color duration-200 ease-in-out flex justify-center items-center"
					>
						<RightChevronIcon
							width={30}
							height={30}
							className="text-primary"
						/>
					</button>
				</>
			)}
		</div>
	);
}
