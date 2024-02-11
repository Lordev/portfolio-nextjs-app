import Input from "@/components/Input";

export default function ContactSection() {
    return (
        <div className="section-contact" id="contact">
            <div className="col-start-3">
                <div className="flex flex-col gap-5">
                    <h1>Contact</h1>
                    <hr className="custom-divider" />

                    <div>
                        <h2> Lorem ipsum dolor sit amet.</h2>{" "}
                    </div>
                    <div className="w-3/4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Exercitationem omnis praesentium nostrum reiciendis assumenda,
                            enim dolore perspiciatis nam magni laudantium veniam,
                            accusamus officiis sapiente doloribus! Perferendis sint esse
                            quod consequatur! Iste, officiis ipsa dignissimos, praesentium
                            blanditiis mollitia, saepe ea impedit sit deleniti numquam
                            sapiente quam cupiditate minus ex. Nihil atque est mollitia
                            laudantium qui deserunt, eos quod. Natus, ex ducimus?
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 text-center p-16 col">
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
        </div>
    );
}
