import { useState, useEffect } from "react";
import Icons from "@/components/Icons";
import { IconType } from "react-icons";

interface ProgressBarProps {
    title: string;
    progress: number;
    icon: IconType;
}

export default function ProgressBar({ progress, icon, title }: ProgressBarProps) {
    const [offset, setOffset] = useState(0);
    const [timer, setTimer] = useState(true);

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * 339.292;
        setOffset(progressOffset);

        const delayAnimation = (time: number): void => {
            setTimeout(() => {
                setTimer(true);
            }, time);
        };

        delayAnimation(0);
    }, [progress]);

    return (
        <div className="flex flex-row items-center gap-2 relative">
            {timer ? (
                <div className="absolute left-7">
                    <Icons size={35} color="white" icon={icon} />
                </div>
            ) : (
                <div>Loading</div>
            )}

            <div className="progress-circle ">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        {/* Define the linear gradient */}
                        <linearGradient id="grad" x1="0%" y1="20%" x2="40%" y2="90%">
                            <stop offset="0%" stopColor="var(--accent)" />
                            <stop offset="20%" stopColor="var(--accent)" />
                            <stop offset="40%" stopColor="var(--accent)" />
                            <stop offset="60%" stopColor="var(--accent)" />
                            <stop offset="80%" stopColor="var(--accent)" />
                        </linearGradient>
                    </defs>
                    <circle
                        className="progress-ring__circle"
                        strokeWidth="8"
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
            </div>
            <div
                className={`progress-circle__text ${timer ? "opacity-100" : "opacity-0"}`}
            >
                <h4>{title}</h4>
                <span className="subtitle">{progress}%</span>
            </div>
        </div>
    );
}
