import ContactForm from "./ContactForm";
import ContactTextBox from "./ContactTextBox";

export default function Contact() {
    return (
        <section
            className="relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/20 from-2% to-black/80 pt-[40rem] pb-80"
            id="contact"
        >
            <div className="max-w-screen-md mx-auto space-y-20">
                <ContactTextBox />
                <ContactForm />
            </div>
        </section>
    );
}