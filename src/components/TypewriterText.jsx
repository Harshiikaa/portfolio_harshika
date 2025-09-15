// components/TypewriterText.jsx
import { useEffect, useState } from "react";

const TypewriterText = () => {
  const lines = [
    "Hi, I'm Harshika Chaudhary —",
    "A Fullstack Developer sculpting digital experiences.",
  ];

  const [displayed, setDisplayed] = useState(["", ""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];
    if (charIndex <= currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => {
          const updated = [...prev];
          updated[lineIndex] = currentLine.slice(0, charIndex + 1);
          return updated;
        });
        setCharIndex((prev) => prev + 1);
      }, 50); // Adjust speed here

      return () => clearTimeout(timeout);
    } else {
      // Move to next line
      const delayBeforeNextLine = 800;
      const timeout = setTimeout(() => {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, delayBeforeNextLine);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, lines]);

  return (
    <div className="text-center space-y-4">
      <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white">
        {displayed[0]}
        {lineIndex === 0 && <span className="animate-pulse">|</span>}
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
        {displayed[1]}
        {lineIndex === 1 && <span className="animate-pulse">|</span>}
      </h2>
    </div>
  );
};

export default TypewriterText;
