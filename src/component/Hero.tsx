import React, { useEffect, useRef, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Link } from "react-router-dom";
import { loadSlim } from "@tsparticles/slim";
import LoadingScreen from "./Loading";

const Hero: React.FC = () => {
    const scrollButton = useRef<HTMLDivElement>(null);
    const particles = useRef(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            particles.current = true;
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        const scroll = () => {
            if (scrollButton.current) {
                scrollButton.current.style.opacity = (window.scrollY < 50) ? "1" : "0";
                scrollButton.current.style.visibility = (window.scrollY < 50) ? "visible" : "hidden";
            }
        };

        window.addEventListener("scroll", scroll);

        return () => {
            window.removeEventListener("scroll", scroll);
        };
    }, []);

    const onClick = () => {
        const about = document.getElementById("about");

        if (about) {
            about.scrollIntoView({ behavior: "smooth" });
        }
    };

    const options = useMemo(() => ({
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
                // direction: "none",
                enable: true,
                // outModes: {
                //     default: "out",
                // },
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
    }), []);

    return (
        <div id="hero" className="relative flex items-center justify-center h-screen bg-rose-pine-base relative overflow-hidden">
            {loading && <LoadingScreen />}

            {(
                <Particles
                    id="tsparticles"
                    options={options}
                    className="absolute top-0 left-0 w-full h-full"
                />
            )}

            <div id="container" className="absolute top-0 left-0 z-1 w-full h-full flex flex-col items-center justify-center space-y-2 md:space-y-8 z-10">
                <h1 className="text-5xl md:text-7xl lg:text-8xl text-center leading-none">
                    <span className="drop-shadow-lg tracking-wide font-prata font-light text-rose-pine-text inline-block mr-4 mb-0 sm:mb-0">Brayden </span>
                    <span className="drop-shadow-lg tracking-wide font-prata font-normal text-rose-pine-iris inline-block">Carlson</span>
                </h1>

                <div className="space-x-10 md:space-x-14">
                    <Link to="/cv" className="drop-shadow-lg tracking-widest text-1xl md:text-2xl lg:text-2xl text-rose-pine-text hover:text-rose-pine-iris-lighter transition duration-300">
                        CV
                    </Link>
                    <a href="https://linkedin.com/in/braycarlson" className="drop-shadow-lg tracking-widest text-1xl md:text-2xl lg:text-2xl text-rose-pine-text hover:text-rose-pine-iris-lighter transition duration-300" aria-label="LinkedIn of Brayden Carlson" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/braycarlson" className="drop-shadow-lg tracking-widest text-1xl md:text-2xl lg:text-2xl text-rose-pine-text hover:text-rose-pine-iris-lighter transition duration-300" aria-label="GitHub of Brayden Carlson" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.behance.net/braycarlson" className="drop-shadow-lg tracking-widest text-1xl md:text-2xl lg:text-2xl text-rose-pine-text hover:text-rose-pine-iris-lighter transition duration-300" aria-label="Behance of Brayden Carlson" target="_blank" rel="noopener noreferrer">Behance</a>
                </div>

                <div ref={scrollButton} className="scroll-button fixed bottom-10 w-full flex justify-center">
                    <button onClick={onClick} className="animate-bounce p-2 rounded-full bg-rose-pine-iris hover:bg-rose-pine-iris-lighter flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
