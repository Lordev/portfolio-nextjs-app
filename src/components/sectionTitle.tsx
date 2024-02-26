interface SectionTitleProps {
    title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
    return (
        <h2 className="rounded-full bg-gradient-to-r from-primary3/30 from-5% to-primary3/70 py-2 px-6 w-fit border border-white/10">
            {title}
        </h2>
    );
}
