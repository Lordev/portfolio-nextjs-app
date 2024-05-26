"use client";
import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    PropsWithChildren,
} from "react";

interface InViewContextType {
    inViewSection: string | null;
    updateInViewSection: (sectionId: string) => void;
}

const InViewContext = createContext<InViewContextType | undefined>(undefined);

export const useInView = () => {
    const context = useContext(InViewContext);
    if (!context) {
        throw new Error("useInView must be used within an InViewProvider");
    }
    return context;
};

export const InViewProvider = ({ children }: PropsWithChildren<{}>) => {
    const [inViewSection, setInViewSection] = useState<string | null>(null);

    const updateInViewSection = useCallback((sectionId: string) => {
        setInViewSection(sectionId);
    }, []);

    return (
        <InViewContext.Provider value={{ inViewSection, updateInViewSection }}>
            {children}
        </InViewContext.Provider>
    );
};
