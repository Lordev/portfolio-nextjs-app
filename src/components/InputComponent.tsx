import { HtmlHTMLAttributes } from "react";

interface InputComponentProps extends HtmlHTMLAttributes<HTMLInputElement> {
    id: string;
    type?: string;
}

export default function InputComponent({ id, type, ...rest }: InputComponentProps) {
    return <input id={id} type={type} {...rest} />;
}
