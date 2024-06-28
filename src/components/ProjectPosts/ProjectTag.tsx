interface ProjectTagProps {
    label: string;
}

export default function ProjectTag({ label }: ProjectTagProps) {
    return <div className="py-2 px-3 bg-zinc-400 text-primary rounded-full">{label}</div>;
}
