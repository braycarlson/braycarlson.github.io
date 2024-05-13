import { memo } from "react";
import Particles from "@tsparticles/react";

export const Particle = memo(({ options }: { options: any }) => (
    <Particles id="tsparticles" options={options} className="absolute top-0 left-0 w-full h-full" />
));

export const options = {
    background: {
        color: {
            value: "transparent",
        },
    },
    fullScreen: {
        enable: false,
    },
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                area: 800,
            },
        },
        color: {
            value: "#c4a7e7",
        },
        links: {
            enable: true,
            distance: 150,
            color: "#c4a7e7",
            opacity: 0.50,
            width: 1,
        },
        move: {
            enable: true,
            random: true,
            speed: 1,
        },
        size: {
            value: { min: 1, max: 5 },
        },
        opacity: {
            value: 0.50,
        },
        shape: {
            type: "circle",
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse"
            },
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },
            push: {
                quantity: 4,
            },
            bubble: {
                distance: 200,
                size: 40,
                duration: 2,
            }
        }
    },
    fpsLimit: 60,
    smooth: true,
    detectRetina: true,
};
