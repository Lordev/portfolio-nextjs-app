"use client";
import { useEffect, useRef } from "react";
import { useInView } from "../context/InViewContext";

interface useIntersectionObserverProps {
    sectionId: string;
    options: IntersectionObserverInit;
}

const useInViewObserver = (sectionId: string, options?: IntersectionObserverInit) => {
    const { updateInViewSection } = useInView();
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    updateInViewSection(sectionId);
                }
            });
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [sectionId, options, updateInViewSection]);

    return ref;
};

export default useInViewObserver;
