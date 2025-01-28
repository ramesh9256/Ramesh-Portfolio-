import React from 'react';
import { FaGithub } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const projects = [
    {
        title: "GitHub Data Fetch",
        description: "The GitHub Data Fetch app allows users to search for GitHub users.",
        image: "/public/img/Github.png",
        github: "https://github.com/ramesh9256/Git-hub-fetch",
        liveDemo: "https://git-hub-fetch.vercel.app/",
    },
    {
        title: "English Dictionary",
        description: "The English Dictionary application allows users to search for word meanings and synonyms.",
        image: "/public/img/discnew.png",
        github: "https://github.com/ramesh9256/English-Dictionary",
        liveDemo: "https://english-dictionary-orpin-xi.vercel.app/",
    },
    {
        title: "Sorting Application",
        description: "The Sorting Application allows users to sort cards details in ascending and descending order.",
        image: "/public/img/Sorting.png",
        github: "https://github.com/ramesh9256/Sorting-application",
        liveDemo: "https://sorting-application-kappa.vercel.app/",
    },
    {
        title: "Stopwatch using JS",
        description: "The Stopwatch Application is a simple and efficient tool designed for timing events.",
        image: "/public/img/pexels-photo-1010513.webp",
        github: "https://github.com/ramesh9256/Stopwatch",
        liveDemo: "https://stopwatch-six-murex.vercel.app/",
    },
    {
        title: "Food Website",
        description: "A visually appealing and user-friendly website designed for food enthusiasts. It showcases a variety of delicious recipes, vibrant food images, and an intuitive interface for easy navigation.",
        image: "/public/img/Screenshot 2025-01-16 123026.png",
        github: "https://github.com/ramesh9256/food-website",
        liveDemo: "https://food-website-three-wine.vercel.app/",
    },
    {
        title: "Random Password Generator",
        description: "The Random Password Generator application allows users to generate random passwords.",
        image: "/public/img/Password.png",
        github: "https://github.com/ramesh9256/Random-password-generator",
        liveDemo: "https://random-password-generator-ten-rouge.vercel.app/",
    },
];

const Card = () => {
    return (
        <section id="projects" className="py-20 bg-neutral-800">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12 text-gray-600">My Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div className=" bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 max-w-xs mx-auto" key={index}>
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
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
