import Input from "@/components/Input";

export default function ContactSection() {
    return (
        <div
            className="h-screen grid-cols-2 items-center py-16 bg-gray-800 grid"
            id="contact"
        >
            <div
                className="mx-auto pl-40 
            y-16"
            >
                <div className="flex flex-col gap-5">
                    <h1 className="text-white">Contact</h1>
                    <div>
                        <h2 className="text-primary3">
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </h2>
                        <h3 className="text-primary4">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </h3>
                    </div>
                    <div className="w-3/4">
                        <p className="text-stone-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Exercitationem omnis praesentium nostrum reiciendis assumenda,
                            enim dolore perspiciatis nam magni laudantium veniam,
                            accusamus officiis sapiente doloribus! Perferendis sint esse
                            quod consequatur! Iste, officiis ipsa dignissimos, praesentium
                            blanditiis mollitia, saepe ea impedit sit deleniti numquam
                            sapiente quam cupiditate minus ex. Nihil atque est mollitia
                            laudantium qui deserunt, eos quod. Natus, ex ducimus?
                        </p>
                        <br />
                        <p className="text-stone-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Quaerat quam nesciunt voluptates maxime vitae? Laudantium
                            harum laboriosam nihil assumenda alias, vitae numquam laborum
                            earum perferendis atque illo rem tempora necessitatibus. Quas
                            inventore voluptas provident eos enim eum doloremque
                            accusantium maiores ullam odit. Quasi voluptas minus maxime
                            iusto accusantium soluta! Magnam recusandae dicta eveniet modi
                            alias voluptate sequi facere perspiciatis in.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-2/4 text-center mx-auto border-gray-600 border p-16">
                <form>
                    ``
                    <fieldset className="flex flex-col gap-10 text-white *:flex *:justify-between">
                        <Input id="fname" title="Name" type="text" />
                        <Input id="email" title="E-mail" type="email" />
                        <Input id="telephone" title="Telephone" type="number" />
                        <Input id="message-box" title="Message" isTextarea={true} />
                    </fieldset>
                </form>
            </div>
        </div>
    );
}
