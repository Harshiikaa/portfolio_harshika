import { useScrollRefs } from '../context/ScrollContext';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const LandingPage = () => {
  const {
    homeRef,
    aboutRef,
    skillsRef,
    projectRef,
    contactRef
  } = useScrollRefs();

  return (
    <>
        <div ref={homeRef}><Home scrollToRef={projectRef} /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={projectRef}><Projects /></div>
        <div ref={contactRef}><Contact /></div>
    </>
  );
};

export default LandingPage;
