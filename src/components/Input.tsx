import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    title: string;
    id: string;
    isTextarea?: boolean;
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
    styles = {},
    ...rest
}: InputProps) {
    const {
        label = "mb-8",
        wrapper = "flex flex-col items-start",
        input = "border-b-2 border-gray-200/20 rounded-lg p-2 w-full",
        textarea = "w-full",
    } = styles;

    const InputComponent = isTextarea ? "textarea" : "input";
    const componentProps = isTextarea ? {} : { type: rest.type }; // Fixed here

    return (
        <div className={wrapper}>
            {title && (
                <label className={label} htmlFor={id}>
                    {title}
                </label>
            )}
            <InputComponent
                id={id}
                className={isTextarea ? textarea : input}
                {...rest}
                {...componentProps}
            />
        </div>
    );
}
