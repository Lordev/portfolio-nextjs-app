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
            }, 20);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, title]);

    return (
        <>
            <p>{currentTitle}</p>
        </>
    );
}
