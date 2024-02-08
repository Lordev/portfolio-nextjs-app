"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <div className="wrapper">
            <Hero />
            <About />
            <Projects />
            <Skills />
        </div>
    );
}
