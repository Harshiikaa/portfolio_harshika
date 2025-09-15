import React from 'react';
import developerImage from '../assets/images/me.png';
import backgroundBlob from '../assets/images/blob.svg';

const Home = ({ scrollToRef }) => {
  const handleScroll = () => {
    if (!scrollToRef?.current) return;

    const yOffset = -80;
    const targetY = scrollToRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const duration = 1000;
    const startTime = performance.now();

    const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutSine(progress);
      window.scrollTo(0, startY + distance * eased);

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-12 min-h-[90vh] flex items-center justify-center bg-home-gradient text-light font-poppins"
    >
      {/* Abstract Background Blob */}
      <img
        src={backgroundBlob}
        alt="Abstract background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 -z-10 animate-float"
      />

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in-up">
            <h1 className="text-xl md:text-2xl font-bold">Hi, I'm</h1>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="text-light drop-shadow-lg">Harshika Chaudhary</span>
            </h1>

            <h2 className="text-2xl md:text-3xl mt-3 font-bold text-tertiary">
              React & Flutter Developer
            </h2>

            <p className="text-md md:text-lg mt-4 text-light max-w-lg mx-auto md:mx-0 font-roboto">
              Passionate about crafting immersive digital experiences with modern web & mobile tech.
            </p>

            <div className="mt-6 flex justify-center md:justify-start">
              <button
                onClick={handleScroll}
                className="bg-light text-gradientStart font-semibold px-6 py-3 rounded-full hover:bg-dark hover:text-light transition"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Developer Image */}
          <div className="relative w-full max-w-lg animate-float">
            <img
              src={developerImage}
              alt="Frontend Developer Illustration"
              className="rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

// import React from 'react';
// import developerImage from '../assets/images/me.png';

// const Home = (scrollToRef) => {
//    const handleScroll = () => {
//     scrollToRef?.current?.scrollIntoView({ behavior: 'smooth' });
//   };
//   return (
//     <section
//       id="home"
//       className="flex items-start bg-light text-dark md:pt-10 pb-12"
//     >
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//           {/* Left Content */}
//           <div className="w-full md:w-1/2 text-center md:text-left">
//             <h1 className="text-2xl md:text-2xl font-bold leading-tight font-poppins">
//               Hi, I'm
//             </h1>
//             <h1 className="text-5xl md:text-5xl font-bold leading-tight font-poppins">
//               <span className="text-dark">Harshika Chaudhary</span>
//             </h1>

//             <h1 className="text-3xl md:text-3xl font-bold leading-tight font-poppins">
//               <span className="block mt-2 text-secondary">React & Flutter Developer</span>
//             </h1>

//             <p className="text-lg text-gray-750 max-w-lg mx-auto md:mx-0 font-roboto">
//               I’m a passionate frontend developer who enjoys bringing UI ideas to life with clean code and smooth interactions.
//               I specialize in building responsive and modern web & mobile applications using React and Flutter.
//             </p>

//             <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
//               <button   onClick={handleScroll} className="bg-secondary text-light px-6 py-3 rounded-md hover:bg-dark hover:text-light transition">
//                 View Projects
//               </button>
            
//             </div>
//           </div>


//           <div className="relative w-full max-w-lg">
//             <img
//               src={developerImage}
//               alt="Frontend Developer Illustration"
//               className="relative w-full rounded-xl"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
