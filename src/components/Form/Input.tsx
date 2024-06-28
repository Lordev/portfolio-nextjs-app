import { InputHTMLAttributes } from "react";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
    id: string;
}

export default function Input({ id, type, ...rest }: InputProps) {
    return <input id={id} type={type} {...rest} />;
}
