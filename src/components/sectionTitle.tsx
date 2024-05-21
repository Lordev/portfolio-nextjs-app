interface SectionTitleProps {
    title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
    return (
        <h2 className="rounded-full  py-2 px-6 w-fit border-2 border-white/20 drop-shadow-doubler">
            {title}
        </h2>
    );
}
