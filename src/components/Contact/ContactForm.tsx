import FormField from "@/components/Form/FormField";
import HoverContainer from "../HoverContainer";
import ButtonForm from "../Button/ButtonForm";

export default function Form() {
    return (
        <HoverContainer>
            <div className="flex flex-col gap-2 text-center p-16 col border border-white/10 rounded-md backdrop-blur-[2px]">
                <form>
                    <fieldset className="flex flex-col space-y-10 text-[1.3rem]">
                        <FormField id="fname" title="First name" type="text" required />
                        <FormField id="lname" title="Last name" type="text" required />
                        <FormField id="email" title="E-mail" type="email" required />
                        <FormField
                            id="telephone"
                            title="Telephone"
                            type="number"
                            required
                        />
                        <FormField
                            id="message-box"
                            title="Message"
                            isTextarea={true}
                            required
                        />
                        <ButtonForm label="send your message" />
                    </fieldset>
                </form>
            </div>
        </HoverContainer>
    );
}
