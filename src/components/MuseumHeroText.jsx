// components/MuseumHeroText.jsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import scrollTo from "scroll-to";

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
        {/* The Museum of Digital Sculpture */}
        A classical mind illuminated by binary
      </motion.h1>
      <motion.p
        className="mt-6 text-white/70 text-[clamp(1rem,2.2vw,1.25rem)] leading-relaxed font-[Inter]"
      >
        {/* A cinematic collection of interactive works by Harshika Chaudhary —
        crafted with code, rendered in light. */}
         — merging art, logic, and code.
      </motion.p>
      <motion.div className="mt-8 flex justify-start">
        <motion.button
          className="inline-flex items-center justify-center rounded-full bg-[#ff2fb3] px-16 py-3 md:px-24 md:py-4 min-w-[240px] text-white font-[Inter] text-[1rem] md:text-[1.05rem] shadow-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#ff2fb3]/60"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            const el = document.getElementById('about');
            if (!el) return;
            const yOffset = -80;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            scrollTo(0, y, { ease: 'in-out-sine', duration: 500 });
          }}
        >
          Explore
        </motion.button>
      </motion.div>
    </motion.div>
  );
}


