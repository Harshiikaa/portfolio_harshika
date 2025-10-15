import { useState } from "react";
import scrollTo from "scroll-to";
import { useScrollRefs } from "../context/ScrollContext";

const Navbar = () => {
  const scrollRefs = useScrollRefs();
  const [activeLink, setActiveLink] = useState("Home"); // default active

  const navItems = [
    { name: "Home", refKey: "homeRef" },
    { name: "About", refKey: "aboutRef" },
    { name: "Skills", refKey: "skillsRef" },
    { name: "Experience", refKey: "experienceRef" },
    { name: "Projects", refKey: "projectRef" },
    { name: "Contact", refKey: "contactRef" },
  ];

  const scrollToSection = (ref, name) => {
    if (!ref?.current) return;
    const yOffset = -80;
    const y =
      ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    scrollTo(0, y, {
      ease: "in-out-sine",
      duration: 500,
    });

    setActiveLink(name);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl md:text-3xl text-white font-[PlayfairDisplay] tracking-tight">
            H. Chaudhary
          </a>
          <div className="flex space-x-8 text-sm md:text-base font-[Inter]">
            {navItems.map(({ name, refKey }) => (
              <a
                key={name}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(scrollRefs[refKey], name);
                }}
                className={`relative pb-1 transition-colors duration-300 ${
                  activeLink === name
                    ? "text-white after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-white/80"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
