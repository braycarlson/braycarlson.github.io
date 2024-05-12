import React from 'react';

const About: React.FC = () => {
    return (
        <div id="about" className="flex flex-col md:grid md:grid-cols-12 gap-4 items-center text-center md:text-left h-fit bg-rose-pine-surface text-rose-pine-text p-10 md:p-12 lg:p-16">
            <h2 className="col-span-full text-rose-pine-iris text-6xl md:text-7xl lg:text-8xl mb-10">About Me</h2>
            <div className="col-start-1 md:col-start-1 lg:col-start-1 col-span-12 md:col-span-12 lg:col-span-6 text-2xl">
                <p className="mb-8">My name is <span className="text-rose-pine-love">Brayden Carlson</span>. I am a recent computer science graduate and software developer from Calgary, Alberta. I am interested in research and development, software development, data science, and machine learning.</p>
                <p className="mb-8">I have years of professional, academic, and personal coding experience in Python and C++. My favorite programming language is Go, but I love to learn new languages. I love creating software for automation or helping people.</p>
                <p>I have years of professional, academic, and personal coding experience in Python and C++. My favorite programming language is Go, but I love to learn new languages. I love creating software for automation or helping people.</p>
            </div>

            <div className="col-start-7 md:col-start-7 lg:col-start-7 col-span-12 md:col-span-12 lg:col-span-6 flex justify-center items-center">
                <img src="/src/assets/images/rose.svg" alt="An image of a rose" className="lg:w-64 lg:h-64 opacity-75 hidden lg:block" />
            </div>
        </div>
    );
};

export default About;
