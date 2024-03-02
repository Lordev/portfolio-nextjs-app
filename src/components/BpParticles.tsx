import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Container, type ISourceOptions } from "@tsparticles/engine";

export default function BgParticles({}) {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: "#0a0d11",
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
                        distance: 400,
                        duration: 2,
                        opacity: 0,
                        size: 2,
                        speed: 3,
                    },
                },
            },
            particles: {
                color: { value: "#ffffff" },
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
                    value: 50,
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
                    value: 1,
                },
            },
        }),
        []
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
}
