import { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollRefs = {
    homeRef,
    aboutRef,
    skillsRef,
    projectRef,
    contactRef,
  };

  return (
    <ScrollContext.Provider value={scrollRefs}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollRefs = () => useContext(ScrollContext);
