import { useState } from "react";

type Images = {
    images: string[];
};

export default function ProjectsSlider({ images }: Images) {
    const [curIndex, setCurIndex] = useState<number>(3);

    const handlePrevious = () => {
        setCurIndex((prevIndex: number) => {
            const newIndex = prevIndex === 0 ? images.length - 2 : --prevIndex;
            return newIndex;
        });
    };

    const handleNext = () => {
        setCurIndex((prevIndex: number) => {
            const newIndex = prevIndex === images.length - 2 ? 0 : ++prevIndex;
            return newIndex;
        });
    };

    return (
        <div className="carousel">
            <div className={`carousel-wrapper w-[${images.le}]`}>
                {/* //TODO remove index as key */}
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slide-container ${
                            index === curIndex ? "active" : ""
                        }`}
                        onClick={handleNext}
                    >
                        <div
                            className="slide"
                            style={{ transform: `translateX(-${100 * curIndex}%)` }}
                        >
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                        <div
                            className="slide-text mt-2.5"
                            style={{ transform: `translateX(-${100 * curIndex}%)` }}
                        >
                            <h4>Project {++index}</h4>

                            <p className="text-white/50 text-base">
                                I made this project to showcase my skills in combining my
                                front-end skills with some backend techniques
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="button-prev"
                type="button"
                onClick={handlePrevious}
            >{`<`}</button>
            <button
                className="button-next"
                type="button"
                onClick={handleNext}
            >{`>`}</button>
        </div>
    );
}
