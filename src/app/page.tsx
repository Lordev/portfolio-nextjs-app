"use client";

import HeroSection from "@/components/Hero";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <div className="wrapper">
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
            </div>
        </div>
    );
}
