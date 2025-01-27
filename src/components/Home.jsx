
import React from "react";
let Home = () =>  {
    let handelStart = () => {
        alert("Welcome to Ramesh kumar Portfolio")
    }
    return (
      <section className="hero text-center py-40 text-white" id="home">
        <h1 className="text-5xl font-bold mb-4 md:text-6xl lg:text-7xl">Welcome to My Portfolio</h1>
        <p className="text-xl mb-6 md:text-2xl">I'm a Web Developer</p>
        <button className="jello-horizontal bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out" onClick={handelStart}>
          Get Started
        </button>
      </section>
    );
  }
  
  export default Home;
  