import React from "react";
import Ramesh from "../assets/Ramesh.jpg";
import Resume from "../assets/Resume.pdf";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-800 text-gray-300 w-full">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10 justify-center w-[80%]">
        {/* Image Section */}
        <div className="w-full md:w-1/4 flex justify-center">
          <img
            src={Ramesh}
            alt="Ramesh Kumar"
            className=" h-32rounded-xl shadow-md object-cover bg-cover h-auto w-full md:w-full md:h-auto border-4 border-gray-600"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-600 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            Hey, I'm <span className="text-blue-400 font-semibold">Ramesh Kumar</span>, 
            a passionate full-stack developer with experience in creating responsive and dynamic web applications. 
            I specialize in technologies like <span className="text-blue-400">HTML, CSS, JavaScript, React, Node.js,</span> 
            and <span className="text-blue-400">MongoDB</span>. With a strong foundation in problem-solving and communication skills, I strive to deliver impactful solutions.
          </p>
          <div>
            <a
              href={Resume}
              className="bg-gray-500 text-white py-3 px-8 rounded-lg inline-block hover:bg-blue-600 transition duration-300 shadow-md" download
            >
              Get CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
