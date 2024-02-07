import classNames from "classnames";
import { useState } from "react";

type Images = {
    images: string[];
};

export default function ProjectsSlider({ images }: Images) {
    const [curIndex, setCurIndex] = useState<number>(0);

    const handlePrevious = () => {
        setCurIndex((prevIndex: number) => {
            const newIndex = prevIndex === 0 ? images.length - 1 : --prevIndex;
            return newIndex;
        });
    };

    const handleNext = () => {
        setCurIndex((prevIndex: number) => {
            const newIndex = prevIndex === images.length - 1 ? 0 : ++prevIndex;
            return newIndex;
        });
    };

    console.log(images);
    return (
        <div className="carousel">
            <div className="carousel-wrapper">
                {/* //TODO remove index as key */}
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slide-container ${
                            index === curIndex ? "active" : ""
                        }`}
                    >
                        <div
                            className="slide"
                            style={{ transform: `translateX(-${100 * curIndex}%)` }}
                        >
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                        <div
                            className="slide-text"
                            style={{ transform: `translateX(-${100 * curIndex}%)` }}
                        >
                            <p className="text-white text-xl">
                                TEST TEST TEST TEST TEST TEST
                            </p>
                            <p className="text-white text-xl">
                                TEST TEST TEST TEST TEST TEST
                            </p>
                            <button type="button"> </button>
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
