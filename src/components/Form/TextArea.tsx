import { TextareaHTMLAttributes } from "react";
import "./textarea.css";

interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> {
    id: string;
}

export default function TextArea({ id, ...rest }: TextAreaProps) {
    return <textarea id={id} rows={5} {...rest} />;
}
