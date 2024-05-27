export default function ButtonForm({ label }: { label: string }) {
    return (
        <button
            className="group border border-primary p-6 w-36 uppercase font-extrabold tracking-wider transition-all mx-auto duration-400 animate-gradient bg-radial-accent ease-in bg-400% hover:scale-105 active:scale-95"
            type="submit"
        >
            <span className="text-primary relative drop-shadow-doubler-inverse group-hover:drop-shadow-doubler-inverse group-hover:text-primary text-[1.2rem]">
                {label}
            </span>
        </button>
    );
}
