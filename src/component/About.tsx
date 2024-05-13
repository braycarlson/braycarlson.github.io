import React from "react";

import rose from "/src/assets/images/rose.svg";

const About: React.FC = () => {
    return (
        <div id="about" className="flex flex-col md:grid md:grid-cols-12 gap-4 md:text-left h-fit bg-rose-pine-base text-rose-pine-text p-4 md:p-12 lg:p-16">
            <h2 className="col-span-full text-rose-pine-iris text-6xl md:text-7xl lg:text-8xl mb-10 mt-5"><span className="hover:text-rose-pine-iris-darker transition duration-200">A</span><span className="hover:text-rose-pine-iris-darker transition duration-200">b</span><span className="hover:text-rose-pine-iris-darker transition duration-200">o</span><span className="hover:text-rose-pine-iris-darker transition duration-200">u</span><span className="hover:text-rose-pine-iris-darker transition duration-200">t</span> <span className="hover:text-rose-pine-iris-darker transition duration-200">M</span><span className="hover:text-rose-pine-iris-darker transition duration-200">e</span></h2>
            <div className="col-start-1 md:col-start-1 lg:col-start-1 col-span-12 md:col-span-12 lg:col-span-6 text-2xl">
                <p className="mb-8">My name is <span className="text-rose-pine-iris">Brayden Carlson</span>. I am a recent computer science graduate and software developer from Calgary, Alberta. I am interested in research and development, software development, data science, and machine learning.</p>
                <p className="mb-8">I have years of professional, academic, and personal coding experience in Python and C++. My favorite programming language is Go, but I love to learn new languages. I love creating software for automation or helping people.</p>
                <p>I am a research assistant in the Tata Lab, which is a cognitive neuroscience lab, and a former member of The Birdsong Lab, which is a psychology lab. I have a strong desire to apply my computer science knowledge in various fields. As such, I am interested in joining areas, such as medicine or biology.</p>
            </div>

            <div className="col-start-7 md:col-start-7 lg:col-start-7 col-span-12 md:col-span-12 lg:col-span-6 flex justify-center items-center">
                <img src={rose} alt="An image of a rose" className="lg:w-64 lg:h-64 opacity-75 hidden lg:block" />
            </div>
        </div>
    );
};

export default About;
