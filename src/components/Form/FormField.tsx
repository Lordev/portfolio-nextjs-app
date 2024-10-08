import Input from './Input';
import TextArea from './TextArea';

interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
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

export default function FormField({
	isTextarea = false,
	title,
	id,
	styles = {},
	...props
}: InputProps) {
	const {
		label = 'mb-1 text-sm uppercase',
		wrapper = 'flex flex-col items-start gap-y-1',
		input = 'border-b-2 border-gray-200/20 rounded-lg bg-transparent px-0 py-1 active:border-accent focus:outline-none w-full invalid:border-red focus:border-accent active:border-accent ',
		textarea = 'w-full bg-transparent border border-gray-200/20 rounded-lg h-32 resize-none p-2 focus:outline-none focus:border-accent active:border-accent',
	} = styles;

	return (
		<div className={wrapper}>
			{title && (
				<label className={label} htmlFor={id}>
					{title}
				</label>
			)}
			{isTextarea ? (
				<TextArea id={id} className={textarea} {...props} />
			) : (
				<Input id={id} className={input} {...props} />
			)}
		</div>
	);
}
