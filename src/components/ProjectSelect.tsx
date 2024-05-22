"use client";
import SectionTitle from "@/components/sectionTitle";
import { useMousePositionContext } from "@/hooks/useMousePositionContext";

export default function ProjectSelect() {
    const { containerRef, elX, elY } = useMousePositionContext();
    return (
        <aside className="relative overflow-hidden " ref={containerRef}>
            <div className="highlight" style={{ left: elX, top: elY }}></div>
            <div className="flex flex-col gap-10 border-r-transparent border-white/10 border-2 bg-white/[1%] opacity-90 rounded-md">
                <div className="flex flex-row gap-8 ">
                    <div className="flex flex-col gap-5">
                        <SectionTitle title="Projects" />
                        <div>
                            <h3>My collection</h3>
                        </div>
                        <div>
                            <ul>
                                <li>Project 1</li>
                                <li>Project 2</li>
                                <li>Project 3</li>
                                <li>Project 4</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
