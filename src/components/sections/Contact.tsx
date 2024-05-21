import Input from "@/components/Input";
import { useMousePositionContext } from "@/hooks/useMousePositionContext";
import SectionTitle from "@/components/sectionTitle";

export default function Contact() {
    const { containerRef, elX, elY } = useMousePositionContext();

    return (
        <section
            className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300/5 from-2% to-black py-80"
            id="contact"
        >
            <div className="max-w-screen-md mx-auto space-y-20">
                <div
                    className="relative col-start-3 overflow-hidden rounded-md"
                    ref={containerRef}
                >
                    <div className="highlight" style={{ left: elX, top: elY }}></div>
                    <div className="flex flex-col gap-10  border-white/10 p-16 border-2  opacity-90 backdrop-blur-[1.2px]">
                        <div className="flex flex-row gap-8 ">
                            <div className="flex flex-col gap-5">
                                <SectionTitle title="Contact" />
                                <div>
                                    <h3>Let{`'`}s Create</h3>
                                </div>
                                <div>
                                    <p className="">
                                        Have a project idea, need a consultation, or just
                                        want to connect? Don{"'"}t hesitate to reach out!
                                        Use the form below to send me a message, and I
                                        {"'"}ll get back to you promptly.{" "}
                                        <span className="highlighted-text">
                                            Let{"'"}s turn your vision into reality!
                                        </span>{" "}
                                        Whether it{"'"}s a stunning website, a sleek web
                                        application, or robust backend development, I{"'"}
                                        m here to help.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-center p-16 col border border-white/10 rounded-md backdrop-blur-[2px]">
                    <form>
                        <fieldset className="flex flex-col gap-8 text-white/70 text-[1.3rem] *:flex *:justify-between">
                            <Input id="fname" title="First name" type="text" />
                            <Input id="lname" title="Last name" type="text" />
                            <Input id="email" title="E-mail" type="email" />
                            <Input id="telephone" title="Telephone" type="number" />
                            <Input id="message-box" title="Message" isTextarea={true} />
                            <button
                                className="group border border-primary p-6 w-fit uppercase font-extrabold tracking-wider transition-all mx-auto duration-200 animate-gradient bg-radial-accent ease-in bg-400% grayscale-[80%] hover:grayscale-0"
                                type="submit"
                            >
                                <span className="text-primary relative drop-shadow-doubler-inverse group-hover:drop-shadow-doubler-inverse group-hover:text-primary text-[1.2rem]">
                                    Send <br />
                                    your <br />
                                    message
                                </span>
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>
    );
}
