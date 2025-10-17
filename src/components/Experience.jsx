import { motion } from "framer-motion";

const experiences = [
  {
    role: "Junior Full-stack Developer",
    company: "Wisdom Technologies Pvt. Ltd – Kathmandu, Nepal",
    period: "June 2025 — Present",
    points: [
      "Build secure, scalable, high‑performance web apps with Node.js, Express, MongoDB, and React.js.",
      "Design and maintain REST API architecture, implement role‑based access, and integrate features like Nodemailer, token workflows, and multi‑tenant systems.",
      "Apply clean architecture for modular services, enforce data integrity with transactions and enums, and optimize performance with efficient async workflows.",
    ],
  },
  {
    role: "Flutter Developer Intern",
    company: "Discounts Pvt. Ltd – Lalitpur, Nepal",
    period: "Jan 2024 — Sept 2024",
    points: [
      "Transformed Figma designs into responsive, cross‑platform UIs to deliver a smooth, engaging user experience.",
      "Collaborated with backend teams to optimize API integrations, reduce response times, and enhance overall app stability.",
      "Drove continuous testing and debugging to ship a reliable, user‑focused app while strengthening mobile UI/UX fundamentals.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="pt-12 min-h-[90vh] bg-black text-white font-[Inter]"
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
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/10 md:left-1/2 md:-translate-x-px" />
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
                  <div className="inline-flex items-center gap-2 text-sm text-white/70">
                    <span className="px-2 py-0.5 rounded bg-white/10">{exp.period}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mt-3 text-white">{exp.role}</h3>
                  <p className="text-white/70">{exp.company}</p>
                </div>
                <div className={`mt-4 md:mt-2 ${idx % 2 === 0 ? "md:col-start-1 md:pr-10" : "md:col-start-2 md:pl-10 md:order-2"}`}>
                  <ul className="space-y-2">
                    {exp.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                        <p className="text-white/90">{p}</p>
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


