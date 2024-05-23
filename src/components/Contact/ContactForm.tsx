import FormField from "@/components/Form/FormField";

export default function Form() {
    return (
        <div className="flex flex-col gap-2 text-center p-16 col border border-white/10 rounded-md backdrop-blur-[2px]">
            <form>
                <fieldset className="flex flex-col gap-8 text-white/70 text-[1.3rem] *:flex *:justify-between">
                    <FormField id="fname" title="First name" type="text" />
                    <FormField id="lname" title="Last name" type="text" />
                    <FormField id="email" title="E-mail" type="email" />
                    <FormField id="telephone" title="Telephone" type="number" />
                    <FormField id="message-box" title="Message" isTextarea={true} />
                    <button
                        className="group border border-primary p-6 w-fit uppercase font-extrabold tracking-wider transition-all mx-auto duration-200 animate-gradient bg-radial-accent ease-in bg-400% "
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
    );
}
