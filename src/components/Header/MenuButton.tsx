"use client";
import IconMenu from "../svg/IconMenu";
import { useMenu } from "../../context/useMenuContext";
export default function MenuButton() {
    const { toggleMenu } = useMenu();

    return (
        <IconMenu
            className={`z-50 lg:w-[37px] w-[30px] fixed top-6 right-10 cursor-pointer  transition-transform duration-500 `}
            onClick={() => toggleMenu()}
        />
    );
}
