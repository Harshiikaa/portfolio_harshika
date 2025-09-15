import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { useScrollRefs } from "../context/ScrollContext";

const LandingPage = () => {
  const { homeRef, aboutRef, skillsRef, projectRef, contactRef } =
    useScrollRefs();

  return (
    <>
      <div ref={homeRef}>
        <Home scrollToRef={projectRef} />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
    // <>
    //   <div ref={homeRef}>
    //     <HeroSection scrollToRef={projectRef} />
    //   </div>
    //   <div ref={aboutRef}>
    //     <About />
    //   </div>
    //   <div ref={skillsRef}>
    //     <Skills />
    //   </div>
    //   <div ref={projectRef}>
    //     <Projects />
    //   </div>
    //   <div ref={contactRef}>
    //     <Contact />
    //   </div>
    // </>
  );
};

export default LandingPage;
