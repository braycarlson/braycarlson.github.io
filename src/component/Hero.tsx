import React, { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { Link } from "react-router-dom";
import { loadSlim } from "@tsparticles/slim";

import LoadingScreen from "./Loading";
import { Particle, options } from "./Particles";
import { useParticles } from "./ParticlesContext";

const Hero: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [opacity, setOpacity] = useState(false);
    const [visible, setVisible] = useState(true);
    const { initialized, setInitialized } = useParticles();

    useEffect(() => {
        if (initialized) {
            setLoading(false);
            setOpacity(true);
        } else {
            const setup = async () => {
                setLoading(true);

                await initParticlesEngine(async (engine) => {
                    await loadSlim(engine);
                    setInitialized(true);
                });

                setLoading(false);
                setOpacity(true);
            };

            setup();
        }
    }, [initialized]);

    useEffect(() => {
        const visibility = () => {
            setVisible(window.scrollY < 50);
        };

        window.addEventListener("scroll", visibility);
        visibility();

        const interval = setInterval(visibility, 1000);

        return () => {
            window.removeEventListener("scroll", visibility);
            clearInterval(interval);
        };
    }, []);

    const onClick = () => {
        const about = document.getElementById("about");

        if (about) {
            about.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (loading) {
        return <LoadingScreen message="Loading..." />;
    }

    return (
        <div id="hero" className={`relative flex items-center justify-center h-screen bg-rose-pine-surface overflow-hidden transition-opacity duration-1000 ${opacity ? "opacity-100" : "opacity-0"}`}>
            <Particle options={options} />

            <div id="container" className="absolute top-0 left-0 z-1 w-full h-full flex flex-col items-center justify-center space-y-2 md:space-y-8 z-10">
                <h1 className="text-4xl md:text-7xl lg:text-8xl text-center leading-none">
                    <span className="drop-shadow-lg tracking-wide font-prata font-light text-rose-pine-text inline-block mr-4 md:mr-4 mb-0 sm:mb-0">Brayden </span>
                    <span className="drop-shadow-lg tracking-wide font-prata font-normal text-rose-pine-iris inline-block">Carlson</span>
                </h1>

                <div className="space-x-4 md:space-x-14">
                    <Link to="/cv" className="drop-shadow-lg tracking-widest text-1xl md:text-2xl lg:text-2xl text-rose-pine-text hover:text-rose-pine-iris transition duration-300">
                        CV
                    </Link>
                    <a href="https://linkedin.com/in/braycarlson" className="drop-shadow-lg tracking-widest text-1xl md:text-2xl lg:text-2xl text-rose-pine-text hover:text-rose-pine-iris transition duration-300" aria-label="LinkedIn of Brayden Carlson" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/braycarlson" className="drop-shadow-lg tracking-widest text-1xl md:text-2xl lg:text-2xl text-rose-pine-text hover:text-rose-pine-iris transition duration-300" aria-label="GitHub of Brayden Carlson" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.behance.net/braycarlson" className="drop-shadow-lg tracking-widest text-1xl md:text-2xl lg:text-2xl text-rose-pine-text hover:text-rose-pine-iris transition duration-300" aria-label="Behance of Brayden Carlson" target="_blank" rel="noopener noreferrer">Behance</a>
                </div>

                <div className="scroll-button fixed bottom-10 w-full flex justify-center" style={{ opacity: visible ? 1 : 0, visibility: visible ? "visible" : "hidden" }}>                    <button onClick={onClick} className="animate-bounce p-2 rounded-full bg-rose-pine-iris hover:bg-rose-pine-iris-darker transition duration-300 flex items-center justify-center">
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
