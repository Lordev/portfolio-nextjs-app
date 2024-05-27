"use client";
import IconMenu from "../svg/IconMenu";
import { useMenu } from "../../context/useMenuContext";
import { motion } from "framer-motion";

export default function MenuButton() {
    const { toggleMenu } = useMenu();
    return (
        <motion.div
            className={`border border-zinc-300 p-2 rounded-full lg:w-[55px] aspect-square w-[30px] fixed top-4 right-8 z-50 flex items-center justify-center shadow-lg  cursor-pointer bg-accent `}
            onClick={() => toggleMenu()}
            initial={{ opacity: 0, translateY: "-100%", translateX: "100%" }}
            animate={{ opacity: 1, translateY: 0, translateX: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
            <IconMenu className={`text-primary transition-transform duration-500 `} />
        </motion.div>
    );
}
