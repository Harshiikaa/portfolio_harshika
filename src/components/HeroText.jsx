// components/HeroText.jsx
"use client";
import { motion } from "framer-motion";

const heading = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function HeroText() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-center md:text-left space-y-4 px-4"
    >
      <motion.h1
        variants={heading}
        custom={1}
        className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-tight text-white drop-shadow-lg"
      >
        Hi, I’m{" "}
        <span className="text-amber-300 glow font-extrabold">
          Harshika Chaudhary
        </span>{" "}
        {/* — */}
      </motion.h1>

      <motion.h2
        variants={heading}
        custom={2}
        className="text-2xl md:text-3xl font-semibold text-white/90"
      >
        A Fullstack Developer sculpting{" "}
        <span className="text-pink-400">digital experiences</span>.
      </motion.h2>

      <motion.div
        variants={heading}
        custom={3}
        className="mt-6 flex flex-wrap justify-center md:justify-start gap-4"
      >
        <button className="px-6 py-3 rounded-full bg-white text-gray-800 font-semibold hover:bg-amber-300 transition">
          Explore My Work
        </button>
        <button className="px-6 py-3 rounded-full border border-white text-white hover:bg-white/10 transition">
          Enter the Gallery
        </button>
      </motion.div>
    </motion.div>
  );
}
