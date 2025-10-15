// components/MuseumHeroText.jsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MuseumHeroText() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="max-w-[720px] md:max-w-[820px]"
    >
      <motion.h1
        className="font-[PlayfairDisplay] text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-white/95"
      >
        The Museum of Digital Sculpture
      </motion.h1>
      <motion.p
        className="mt-6 text-white/70 text-[clamp(1rem,2.2vw,1.25rem)] leading-relaxed font-[Inter]"
      >
        A cinematic collection of interactive works by Harshika Chaudhary —
        crafted with code, rendered in light.
      </motion.p>
    </motion.div>
  );
}


