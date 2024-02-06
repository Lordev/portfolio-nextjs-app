import { useEffect, useState } from "react";

type titleProps = {
    title: string;
};

export default function Title({ title }: titleProps) {
    const [currentTitle, setTitle] = useState("");
    const [currentIndex, setCurrentindex] = useState(0);

    useEffect(() => {
        if (currentIndex < title.length) {
            const timeout = setTimeout(() => {
                setTitle((prevText) => prevText + title[currentIndex]);
                setCurrentindex((prevIndex) => prevIndex + 1);
            }, 120);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, title]);

    return (
        <>
            <h1 className="header">
                {currentTitle.substring(0, 4)}
                <span className="text-amber-500">{currentTitle.substring(4, 14)}</span>
                {currentTitle.substring(14)}
            </h1>
        </>
    );
}
