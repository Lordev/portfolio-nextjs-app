
import SectionTitle from "@/components/sectionTitle";

import { useMousePositionContext } from "@/hooks/useMousePositionContext";

export default function Skills() {
    const { containerRef, elX, elY } = useMousePositionContext();

    return (
        <>
            <section className="section-skills border-white-gradient" id="skills">
                <div
                    className="flex flex-col gap-10 border-white/10 p-16 border-2 opacity-90 text-center w-2/4 mx-auto relative col-start-3 overflow-hidden
                    backdrop-blur-[1.2px] bg-white/[2%]"
                    ref={containerRef}
                >
                    <div className="highlight" style={{ left: elX, top: elY }}></div>

                    <div className="flex flex-row gap-8">
                        <div className="flex flex-col gap-5">
                            <div className="mx-auto">
                                <SectionTitle title="Skills" />
                            </div>
                            <div>
                                <h3>Dev Toolbox</h3>
                            </div>
                            <div>
                                <p className="">
                                    In my role as a web developer, I excel in creating{" "}
                                    <span>responsive and user-friendly interfaces</span>{" "}
                                    using HTML, CSS, and JavaScript. I have a keen eye for
                                    design details and a passion for optimizing website
                                    performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
             
            </section>
        </>
    );
}
