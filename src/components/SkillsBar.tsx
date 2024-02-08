import { useState, useEffect } from "react";

interface SkillsBarProps {
    progress: number;
}

export default function SkillsBar({ progress }: SkillsBarProps) {
    const [offset, setOffset] = useState(0);
    const [timer, setTimer] = useState(false);

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * 339.292;
        setOffset(progressOffset);
    }, [progress]);

    const delayAnimation = (time: number): void => {
        setTimeout(() => {
            setTimer(true);
        }, time);
    };

    delayAnimation(0);

    return (
        <div className="progress-circle">
            <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {/* Define the linear gradient */}
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="20%" stopColor="#D18C08" />
                        <stop offset="40%" stopColor="#8D6602" />
                        <stop offset="60%" stopColor="#6B5300" />
                        <stop offset="80%" stopColor="#493000" />
                    </linearGradient>
                </defs>
                <circle
                    className="progress-ring__circle"
                    strokeWidth="13"
                    fill="transparent"
                    stroke="url(#grad)"
                    r="54"
                    cx="60"
                    cy="60"
                    style={{
                        strokeDasharray: 339.292,
                        strokeDashoffset: timer ? offset : 339.292,
                    }}
                />
            </svg>
            <div
                className={`progress-circle__text ${timer ? "opacity-40" : "opacity-0"}`}
            >
                {progress}%
            </div>
        </div>
    );
}
