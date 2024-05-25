"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type ISourceOptions } from "@tsparticles/engine";

export default function BgParticles() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: "#2F4858",
            },
            fpsLimit: 15,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "bubble",
                    },
                },
                modes: {
                    bubble: {
                        distance: 800,
                        duration: 2,
                        opacity: 0,
                        size: 2,
                        speed: 3,
                    },
                },
            },
            particles: {
                color: { value: "#fff" },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: "out",
                    random: true,
                    speed: 0.2,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 20,
                },
                opacity: {
                    animation: {
                        enable: true,
                        speed: 5,
                    },
                    value: { min: 0.3, max: 0.6 },
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: 2,
                },
            },
        }),
        []
    );

    if (!init) {
        return null;
    }

    return <Particles id="tsparticles" options={options} />;
}
