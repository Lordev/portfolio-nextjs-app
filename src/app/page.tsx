import dynamic from "next/dynamic";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimationLoad from "@/components/AnimationLoad";
import InViewSectionWrapper from "@/components/inViewSectionWrapper";

const BgParticles = dynamic(() => import("@/components/BpParticles"), {
    ssr: false,
});
const Projects = dynamic(() => import("@/components/Projects"), {
    ssr: false,
});

export default function Home() {
    return (
        <main className="overflow-hidden">
            <AnimationLoad />
            <BgParticles />
            <InViewSectionWrapper id="Home">
                <Hero />
            </InViewSectionWrapper>
            <InViewSectionWrapper id="About">
                <About />
            </InViewSectionWrapper>
            <InViewSectionWrapper id="Projects">
                <Projects />
            </InViewSectionWrapper>
            <InViewSectionWrapper id="Contact">
                <Contact />
            </InViewSectionWrapper>
            <Footer />
        </main>
    );
}
