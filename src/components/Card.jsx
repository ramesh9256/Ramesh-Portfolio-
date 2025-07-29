import React from 'react';
import { FaGithub } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";



const github = "/img/github.png";
const projects = [
    {
        title: "Vyapar Mandal Website",
        description: "A fully functional Vyapar Mandal website built using React and Tailwind CSS. It features member registration, dynamic announcements, and responsive business listings to showcase local enterprises.",
        github: "https://github.com/ramesh9256/Vyaapar-Mandal",
        liveDemo: "https://vyaapar-mandal.vercel.app/",
    },

    {
        title: "Ayurveda Website",
        description: "A website designed for Ayurveda enthusiasts. It showcases a variety of Ayurvedic treatments, herbal remedies, and an intuitive interface for easy navigation.",
        github: "https://github.com/ramesh9256/Ayurveda",
        liveDemo: "https://ayurveda-woad.vercel.app/",
    },
    {
        title: "Job App",
        description: "The Job Application allows users to search for job opportunities based on their preferences.",
        github: "https://github.com/ramesh9256/Job-App",
        liveDemo: "https://job-app-alpha-mocha.vercel.app/",
    },

    {
        title: "Weather App",
        description: "The Weather Application allows users to search for weather details based on their location.",
        github: "https://github.com/ramesh9256/Weather-App-using-react",
        liveDemo: "https://weather-app-using-react-kappa.vercel.app/",
    },
];

const Card = () => {
    return (
        <section id="projects" className="py-20 bg-neutral-800">
            <div className="container mx-auto text-center w-[80%]">
                <h2 className="text-4xl font-bold mb-12 text-gray-600">My Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
                    {projects.map((project, index) => (
                        <div className=" bg-gray-800 rounded-lg shadow-lg overflow-hidden relative transform transition-all duration-500 ease-in-out hover:-translate-y-4 max-w-xs mx-auto" key={index}>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-200 mb-3">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex justify-center space-x-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub Repository" className="text-gray-300 hover:text-blue-600">
                                        <FaGithub size={24} />
                                    </a>
                                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" title="Live Demo" className="text-gray-300 hover:text-blue-600">
                                        <LuSquareArrowOutUpRight size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Card;
