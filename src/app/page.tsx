"use client";
import HeroSection from "@/components/Hero";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import BgParticles from "@/components/BpParticles";
import Footer from "./sections/Footer";

export default function Home() {
    return (
        <div>
            <div>
                <HeroSection />
                <div className="wrapper">
                    <AboutSection />
                </div>
            </div>
            <BgParticles />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
