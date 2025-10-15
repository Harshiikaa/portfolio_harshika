import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2023 — Present",
    points: [
      "Built MERN applications with secure auth and role-based access",
      "Designed responsive UIs with React and Tailwind CSS",
      "Integrated REST APIs, optimized queries and deployments",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Personal Projects",
    period: "2022 — 2023",
    points: [
      "Created reusable component systems and design patterns",
      "Improved performance through memoization and code-splitting",
      "Prototyped UI/UX in Figma and translated to production",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="pt-12 min-h-[90vh] bg-gradient-to-br from-gradientStart via-gradientMid to-gradientEnd text-light font-poppins"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 drop-shadow-md"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/20 md:left-1/2 md:-translate-x-px" />
          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative md:grid md:grid-cols-2 md:gap-10"
              >
                <div className={`md:text-right ${idx % 2 === 0 ? "md:pr-10" : "md:order-2 md:pl-10"}`}>
                  <div className="inline-flex items-center gap-2 text-sm text-light/80">
                    <span className="px-2 py-0.5 rounded bg-white/10">{exp.period}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mt-3">{exp.role}</h3>
                  <p className="text-light/80">{exp.company}</p>
                </div>
                <div className={`mt-4 md:mt-0 ${idx % 2 === 0 ? "md:order-2" : ""}`}>
                  <ul className="space-y-2">
                    {exp.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                        <p className="text-light/90">{p}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="absolute left-3 top-2 h-3 w-3 rounded-full bg-white md:left-1/2 md:-ml-1.5" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;


