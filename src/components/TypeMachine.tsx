"use client";
import { useEffect, useState } from "react";

type TypeMachineProps = {
    input: string;
};

export default function TypeMachine({ input }: TypeMachineProps) {
    const [text, setText] = useState("");
    const [currentIndex, setCurrentindex] = useState(0);

    useEffect(() => {
        if (currentIndex < input.length) {
            const timeout = setTimeout(() => {
                setText((prevText) => prevText + input[currentIndex]);
                setCurrentindex((prevIndex) => prevIndex + 1);
            }, 20);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    return (
        <>
            <p>{text}</p>
        </>
    );
}
