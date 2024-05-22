"use client";
import Hero from "@/components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import BgParticles from "@/components/BpParticles";
import Footer from "../components/sections/Footer";

export default function Home() {
    return (
        <main className="overflow-hidden">
            <div>
                <Hero />
                <div className="wrapper">
                    <About />
                </div>
            </div>
            <BgParticles />
            <Projects />
            {/* <Skills /> */}
            <Contact />
            <Footer />
        </main>
    );
}
