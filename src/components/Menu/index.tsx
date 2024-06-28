"use client";
import MenuLinks from "./MenuLinks";
import MenuButton from "./MenuButton";
import { useState } from "react";
import MenuContainer from "./MenuContainer";

export default function Menu() {
    const [activeLink, setActiveLink] = useState<string | null>(null);

    const handleActiveID = (id: string) => {
        setActiveLink(id);
    };

    return (
        <>
            <MenuContainer activeLink={activeLink}>
                <MenuLinks setActiveID={handleActiveID} activeLink={activeLink} />
            </MenuContainer>
            <MenuButton />
        </>
    );
}
