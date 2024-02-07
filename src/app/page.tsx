"use client";

import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";

export default function Home() {
    return (
        <div className="wrapper">
            <Hero />
            <About />
            <Projects />
        </div>
    );
}
