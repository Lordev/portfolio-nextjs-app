export default function About() {
    return (
        <div className="w-100 h-screen flex items-center py-16 bg-white">
            <div className="justify-start flex flex-row gap-20 mx-20">
                <div className="">
                    <h2 className="heading" id="about">
                        About
                    </h2>
                    <p>
                        `
                        {
                            "Hello! I'm Lorenzo Sallons, a web developer passionate about crafting beautiful and user-friendly websites. My expertise is  developing next-level websites and web applications including full frontend design."
                        }
                        `
                    </p>
                </div>
                <div>image </div>
            </div>
        </div>
    );
}
