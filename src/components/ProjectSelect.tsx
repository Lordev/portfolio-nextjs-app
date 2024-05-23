import SectionTitle from "@/components/SectionTitle";

export default function ProjectSelect() {
    return (
        <div>
            <div className="max-w-screen-md mx-auto flex justify-center">
                <div className="flex flex-row gap-8 ">
                    <div className="space-y-5 flex flex-col items-center">
                        <SectionTitle title="Projects" />
                        <div>
                            <h3>My collection</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
