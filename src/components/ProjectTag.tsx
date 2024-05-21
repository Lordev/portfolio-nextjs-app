interface ProjectTagProps {
    label: string;
}

export default function ProjectTag({ label }: ProjectTagProps) {
    return <div className="py-2 px-3 bg-zinc-500/20 rounded-full">{label}</div>;
}
