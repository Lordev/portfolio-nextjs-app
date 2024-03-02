import InputComponent from "./InputComponent";
import TextAreaComponent from "./TextAreaComponent";

interface InputProps {
    title: string;
    id: string;
    isTextarea?: boolean;
    type?: string;
    styles?: {
        wrapper?: string;
        label?: string;
        input?: string;
        textarea?: string;
    };
}

export default function Input({
    isTextarea = false,
    title,
    id,
    type,
    styles = {},
}: InputProps) {
    const {
        label = "mb-1 text-[1.2rem]",
        wrapper = "flex flex-col items-start",
        input = "border-b-2 border-gray-200/20 rounded-lg w-full focus:border-color-accent",
        textarea = "w-full",
    } = styles;

    return (
        <div className={wrapper}>
            {title && (
                <label className={label} htmlFor={id}>
                    {title}
                </label>
            )}
            {isTextarea ? (
                <TextAreaComponent id={id} className={textarea} />
            ) : (
                <InputComponent id={id} className={input} type={type} />
            )}
        </div>
    );
}
