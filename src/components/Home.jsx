import React from 'react';
import developerImage from '../assets/images/me.png';

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-start bg-light text-dark md:pt-10 pb-12"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl md:text-2xl font-bold leading-tight font-poppins">
              Hi, I'm
            </h1>
            <h1 className="text-5xl md:text-5xl font-bold leading-tight font-poppins">
              <span className="text-dark">Harshika Chaudhary</span>
            </h1>

            <h1 className="text-3xl md:text-3xl font-bold leading-tight font-poppins">
              <span className="block mt-2 text-secondary">React & Flutter Developer</span>
            </h1>

            <p className="text-lg text-gray-750 max-w-lg mx-auto md:mx-0 font-roboto">
              I’m a passionate frontend developer who enjoys bringing UI ideas to life with clean code and smooth interactions.
              I specialize in building responsive and modern web & mobile applications using React and Flutter.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-secondary text-light px-6 py-3 rounded-md hover:bg-dark hover:text-light transition">
                View Projects
              </button>
              <button className="border-2 border-dark text-dark px-6 py-3 rounded-md hover:bg-dark hover:text-light transition">
                Download CV
              </button>
            </div>
          </div>


          {/* Right Content (Flat Image) */}
          {/* <div className="w-full md:w-1/2 flex justify-center"> */}
          <div className="relative w-full max-w-lg">
            <img
              src={developerImage}
              alt="Frontend Developer Illustration"
              className="relative w-full rounded-xl"
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
