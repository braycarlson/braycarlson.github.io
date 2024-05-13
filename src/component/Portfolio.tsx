import React, { useState } from "react";

import thesis from "/src/assets/images/thesis.webp";
import warbler from "/src/assets/images/warbler.webp";
import avs from "/src/assets/images/avs.webp";
import undertasker from "/src/assets/images/undertasker.webp";
import asol from "/src/assets/images/asol.webp";
import senna from "/src/assets/images/senna.webp";
import locker from "/src/assets/images/locker.webp";
import alphares from "/src/assets/images/alphares.webp";
import composer from "/src/assets/images/composer.webp";

const projects = [
    { id: 1, title: "thesis", description: "An undergraduate thesis on deep learning and object detection.", url: "https://github.com/braycarlson/thesis", tags: ["Python"], image: thesis },
    { id: 2, title: "warbler", description: "A pipeline for segmenting, clustering and visualizing Adelaide\"s warbler songs.", url: "https://github.com/braycarlson/warbler", tags: ["Python"], image: warbler },
    { id: 3, title: "avs", description: "A tool for segmenting animal vocalizations.", url: "https://github.com/braycarlson/avs", tags: ["Python"], image: avs },
    { id: 4, title: "undertasker", description: "A Windows tool to launch software and execute terminal commands.", url: "https://github.com/braycarlson/undertasker", tags: ["Rust"], image: undertasker },
    { id: 5, title: "asol", description: "A library to interact with the LCU API.", url: "https://github.com/braycarlson/asol", tags: ["Go"], image: asol },
    { id: 6, title: "senna", description: "A tool to automate League of Legends.", url: "https://github.com/braycarlson/senna", tags: ["Go"], image: senna },
    { id: 7, title: "locker", description: "A peripheral locker for Windows.", url: "https://github.com/braycarlson/locker", tags: ["Go"], image: locker },
    { id: 8, title: "alphares", description: "A tool to save a custom resolution in Fortnite.", url: "https://github.com/braycarlson/alphares", tags: ["C++"], image: alphares },
    { id: 9, title: "composer", description: "A simple and customizable music player.", url: "https://github.com/braycarlson/composer", tags: ["C++"], image: composer },
];

const Portfolio: React.FC = () => {
    const [tag, setTag] = useState<string | null>(null);
    const tags = Array.from(new Set(projects.flatMap(project => project.tags)));
    const filtered = tag ? projects.filter(project => project.tags.includes(tag)) : projects;

    return (
        <div id="portfolio" className="h-fit flex flex-col items-center py-8 pd-4 bg-rose-pine-surface">
            <h2 className="text-rose-pine-iris text-6xl md:text-7xl lg:text-8xl pt-16 mb-20"><span className="hover:text-rose-pine-iris-darker transition duration-200">P</span><span className="hover:text-rose-pine-iris-darker transition duration-200">o</span><span className="hover:text-rose-pine-iris-darker transition duration-200">r</span><span className="hover:text-rose-pine-iris-darker transition duration-200">t</span><span className="hover:text-rose-pine-iris-darker transition duration-200">f</span><span className="hover:text-rose-pine-iris-darker transition duration-200">o</span><span className="hover:text-rose-pine-iris-darker transition duration-200">l</span><span className="hover:text-rose-pine-iris-darker transition duration-200">i</span><span className="hover:text-rose-pine-iris-darker transition duration-200">o</span></h2>

            <div className="flex items-center mb-8">
                <label htmlFor="language" className="mr-4 text-lg text-rose-pine-text">Language:</label>
                <select
                    id="language"
                    className="w-24 p-2 px-2 rounded text-rose-pine-text bg-rose-pine-base border-2 border-rose-pine-muted focus:ring-rose-pine-love focus:border-rose-pine-love"
                    onChange={(e) => setTag(e.target.value === "all" ? null : e.target.value)}
                    value={tag || ""}
                >
                    <option value="all">All</option>
                    {tags.map(tag => (
                        <option key={tag} value={tag}>{tag}</option>
                    ))}
                </select>
            </div>

            <div className="flex flex-wrap justify-center -m-4 w-full max-w-6xl">
                {filtered.map((project) => (
                    <div key={project.id} className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <a href={project.url}><img className="lg:h-64 md:h-36 w-full object-cover object-center" src={project.image} alt="project" /></a>
                            <div className="p-10">
                                <h2 className="font-work text-2xl md:text-2xl lg:text-4xl text-rose-pine-iris hover:text-rose-pine-love transition duration-300 mb-3"><a href={project.url}>{project.title}</a></h2>
                                <p className="lg:text-1xl leading-relaxed text-rose-pine-text">{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-rose-pine-text text-lg mb-28 mt-12">You can view more repositories on <a href="https://github.com/braycarlson" className="text-rose-pine-iris hover:text-rose-pine-love transition duration-300">GitHub</a>.</p>
        </div>
    );
};

export default Portfolio;
