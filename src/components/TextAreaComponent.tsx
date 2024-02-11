import { HtmlHTMLAttributes } from "react";

interface TextAreaComponentProps extends HtmlHTMLAttributes<HTMLTextAreaElement> {
    id: string;
}

export default function TextAreaComponent({ id, ...rest }: TextAreaComponentProps) {
    return <textarea id={id} rows={5} {...rest} />;
}
