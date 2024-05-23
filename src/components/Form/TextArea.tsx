import { HtmlHTMLAttributes } from "react";

interface TextAreaProps extends HtmlHTMLAttributes<HTMLTextAreaElement> {
    id: string;
}

export default function TextArea({ id, ...rest }: TextAreaProps) {
    return <textarea id={id} rows={5} {...rest} />;
}
