import { HtmlHTMLAttributes } from "react";

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
    id: string;
    type?: string;
}

export default function Input({ id, type, ...rest }: InputProps) {
    return <input id={id} type={type} {...rest} />;
}
