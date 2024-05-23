import Hero from "@/components/Hero";
import BgParticles from "@/components/BpParticles";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Hero />
            <About />
            <BgParticles />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
