import Input from "@/components/Input";
import { useMousePositionContext } from "@/hooks/useMousePositionContext";
import SectionTitle from "@/components/sectionTitle";

export default function ContactSection() {
    const { containerRef, elX, elY } = useMousePositionContext();

    return (
        <section className="section-contact border-t-[.5px] border-white/20" id="contact">
            <div className="relative col-start-3 overflow-hidden" ref={containerRef}>
                <div className="highlight" style={{ left: elX, top: elY }}></div>
                <div className="flex flex-col gap-10 border-r-transparent border-white/10 p-16 border-2 bg-white/[2%] opacity-90">
                    <div className="flex flex-row gap-8 ">
                        <div className="flex flex-col gap-5">
                            <SectionTitle title="Contact" />
                            <div>
                                <h3>Get In Touch</h3>
                            </div>
                            <div>
                                <p className="">
                                    Have a project idea, need a consultation, or just want
                                    to connect? Don{"'"}t hesitate to reach out! Use the
                                    form below to send me a message, and I{"'"}ll get back
                                    to you promptly.{" "}
                                    <span className="highlighted-text">
                                        Let{"'"}s turn your vision into reality!
                                    </span>{" "}
                                    Whether it{"'"}s a stunning website, a sleek web
                                    application, or robust backend development, I{"'"}m
                                    here to help.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 text-center p-24 col border border-white/10">
                <form>
                    <fieldset className="flex flex-col gap-8 text-white/70 text-[1.3rem] *:flex *:justify-between">
                        <Input id="fname" title="First name" type="text" />
                        <Input id="lname" title="Last name" type="text" />
                        <Input id="email" title="E-mail" type="email" />
                        <Input id="telephone" title="Telephone" type="number" />
                        <Input id="message-box" title="Message" isTextarea={true} />
                    </fieldset>
                </form>
            </div>
        </section>
    );
}
