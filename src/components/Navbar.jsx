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
    // <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-lg text-light border-b border-white/20 shadow-sm">
    // <nav className="sticky top-0 z-50 bg-gradient-to-br backdrop-blur-lg from-gradientStart via-gradientMid to-gradientEnd">
    <nav
      className="sticky top-0 z-50"
      style={{
        background: "radial-gradient(circle at center, #2a003f, #12001e)",
      }}
    >
      <div className="container mx-auto px-10 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-4xl font-bold text-light hover:text-dark transition-colors duration-300"
          >
            Portfolio
          </a>

          {/* Navigation Links */}
          <div className="flex space-x-10 text-lg font-semibold">
            {navItems.map(({ name, refKey }) => (
              <a
                key={name}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(scrollRefs[refKey], name);
                }}
                className={`relative pb-1 text-xl transition-all duration-300 hover:scale-105 ${
                  activeLink === name
                    ? "text-light font-bold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-light after:rounded"
                    : "text-light hover:text-dark"
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
