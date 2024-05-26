"use client";
import useInViewObserver from "@/utlls/useInViewObserver";

interface InViewSectionWrapperProps {
    id: string;
    children: React.ReactNode;
}

interface InViewSectionWrapperProps {
    id: string;
    children: React.ReactNode;
}

const InViewSectionWrapper: React.FC<InViewSectionWrapperProps> = ({ id, children }) => {
    const ref = useInViewObserver(id, { threshold: 0.5 });

    return (
        <section ref={ref} id={id}>
            {children}
        </section>
    );
};

export default InViewSectionWrapper;
