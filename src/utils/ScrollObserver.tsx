"use client";
import React, { useState, useCallback, useEffect, ReactNode } from "react";

type ScrollObserverProps = {
    children: ReactNode;
};

type ScrollValue = {
    scrollY: number;
};

export const ScrollContext = React.createContext<ScrollValue>({
    scrollY: 0,
});

export default function ScrollObserver({ children }: ScrollObserverProps) {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY);
    }, []);

    useEffect(() => {
        document.addEventListener("scroll", handleScroll, { passive: true });
        return () => document.removeEventListener("scroll", handleScroll);
    }, [handleScroll, scrollY]);

    return (
        <ScrollContext.Provider value={{ scrollY }}>{children}</ScrollContext.Provider>
    );
}
