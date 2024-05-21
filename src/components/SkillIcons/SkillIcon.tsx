interface SkillIconProps {
    icon: any;
    title: string;
}

export default function SkillIcon({ icon: Icon, title }: SkillIconProps) {
    return (
        <div className="border-zinc-300 border-[1px] p-4  text-center space-y-2 shadow-md transition-shadow duration-200 ease-out flex flex-col justify-center items-center">
            <Icon size={30} />
            <h5>{title}</h5>
        </div>
    );
}
