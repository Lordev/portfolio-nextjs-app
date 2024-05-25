"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoCompany from "./svg/Icon";
import CircleLoader from "./svg/CircleLoader";
export default function AnimationLoad() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => setIsLoaded(true);
        window.addEventListener("load", handleLoad);
        return () => window.removeEventListener("load", handleLoad);
    }, []);
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1, display: "fixed" }}
                animate={{ opacity: 0, display: "none" }}
                exit={{ opacity: 0, display: "none" }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 z-50 flex items-center justify-center w-full h-screen bg-secondary"
                id="loading"
            >
                <div className="relative w-24 h-24">
                    <LogoCompany className="w-14 h-14 animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <CircleLoader
                        width={100}
                        height={100}
                        className="animate-spinFast text-primary opacity-25 absolute inset-0"
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
