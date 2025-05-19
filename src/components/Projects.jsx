import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import dresslend from '../assets/images/dresslend_landing.png';
import tribalTrove from '../assets/images/tribalTrove_landing.png';

const projects = [
    {
        title: "DressLend",
        description: "MERN stack-based dress lending platform with React frontend and Node.js backend",
        tech: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
        metrics: ["JWT-based Authentication", "Role-based Access", "OWASP aligned", "Audit Trail", "Encryption", "Session Management", "User-Friendly UI"],
        github: "https://github.com/Harshiikaa/dresslend",
        demo: "https://youtu.be/VYjqGt2QGec?si=CQsNI7cfbDofEief",
        image: dresslend,
        accent: "secondary"
    },
    {
        title: "TribalTrove",
        description: "MERN stack-based multi-vendor marketplace with React frontend and Node.js backend",
        tech: ["React", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
        metrics: ["JWT-based Authentication", "Role-based Access", "Encryption"],
        github: "https://github.com/Harshiikaa/TribalTroveWeb",
        demo: "https://youtu.be/DOQq9h8U5KA?si=ux1TPKfThbEfRK_j",
        image: tribalTrove,
        accent: "secondary"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="pt-12 min-h-screen bg-gradient-to-br from-gradientStart via-gradientMid to-gradientEnd text-light font-poppins">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-12 drop-shadow-md"
                >
                    Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-xl bg-light border border-white/10 shadow"
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-b from-${project.accent}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
                            />

                            {/* Image Section */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
                            </div>

                            {/* Description Section */}
                            <div className="p-8 text-dark">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                                    <p className="text-muted leading-relaxed mb-6">{project.description}</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <h4 className="text-sm font-medium">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    whileHover={{ y: -2 }}
                                                    className="px-3 py-1.5 bg-gray-100 text-sm rounded-full text-dark"
                                                >
                                                    #{tech}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="text-sm font-medium">Highlights</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {project.metrics.map((metric, idx) => (
                                                <div
                                                    key={idx}
                                                    className="px-3 py-1.5 bg-primary/10 text-sm rounded-full text-dark"
                                                >
                                                    ✓ {metric}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="mt-8 flex items-center gap-4 relative z-10">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-2 text-dark hover:text-dark/80"
                                    >
                                        <FiGithub className="text-xl" />
                                        <span className="font-medium">Source Code</span>
                                    </motion.a>

                                    <motion.a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 5 }}
                                        className={`flex items-center gap-2 ${project.accent === "primary"
                                            ? "text-primary hover:text-primary/80"
                                            : "text-secondary hover:text-secondary/80"
                                            }`}
                                    >
                                        <span className="font-medium">Live Demo</span>
                                        <FiArrowUpRight className="text-xl" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="pt-6 pb-4 text-center text-sm text-muted">
                    Explore more on my{' '}
                    <motion.a
                        href="https://github.com/Harshiikaa"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="text-tertiary underline hover:text-tertiary/80 inline-flex items-center gap-1"
                    >
                        GitHub profile →
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

// import { motion } from 'framer-motion';
// import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
// import dresslend from '../assets/images/dresslend_landing.png';
// import tribalTrove from '../assets/images/tribalTrove_landing.png';


// const projects = [
//     {
//         title: "DressLend",
//         description: "MERN stack-based dress lending platform with React frontend and Node.js backend",
//         tech: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
//         metrics: ["JWT-based Authentication", "Role-based Access", "OWASP aligned", "Audit Trail", "Encryption", "Session Management", "User-Friendly UI"],
//         github: "https://github.com/Harshiikaa/dresslend",
//         demo: "https://youtu.be/VYjqGt2QGec?si=CQsNI7cfbDofEief",
//         image: dresslend,
//         accent: "secondary"
//     },
//     {
//         title: "TribalTrove",
//         description: "MERN stack-based multi-vendor marketplace with React frontend and Node.js backend",
//         tech: ["React", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
//         metrics: ["JWT-based Authentication", "Role-based Access", "Encryption"],
//         github: "https://github.com/Harshiikaa/TribalTroveWeb",
//         demo: "https://youtu.be/DOQq9h8U5KA?si=ux1TPKfThbEfRK_j",
//         image: tribalTrove,
//         accent: "secondary"
//     }
// ];

// const Projects = () => {
//     return (
//         <section id="projects" className="py-20 bg-light">
//             <div className="container mx-auto px-6 max-w-5xl">
//                 <motion.h2
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="text-4xl font-bold text-center mb-12 text-dark font-poppins"
//                 >
//                     Projects
//                 </motion.h2>

//                 <div className="grid md:grid-cols-2 gap-8 ">
//                     {projects.map((project, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ y: 20, opacity: 0 }}
//                             whileInView={{ y: 0, opacity: 1 }}
//                             viewport={{ once: true }}
//                             className="group relative overflow-hidden rounded-xl bg-white border border-gray-100"
//                         >
//                             <div className={`absolute inset-0 bg-gradient-to-b from-${project.accent}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

//                             {/* Image Section */}
//                             <div className="relative h-48 overflow-hidden">
//                                 <img
//                                     src={project.image}
//                                     alt={project.title}
//                                     className="absolute w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
//                                     loading="lazy"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
//                             </div>

//                             {/* Description Section */}
//                             <div className="p-8">
//                                 <div className="mb-6">
//                                     <h3 className="text-2xl font-semibold text-dark mb-3">
//                                         {project.title}
//                                     </h3>
//                                     <p className="text-muted leading-relaxed mb-6">
//                                         {project.description}
//                                     </p>
//                                 </div>

//                                 <div className="space-y-6">
//                                     <div className="space-y-3">
//                                         <h4 className="text-sm font-medium text-dark">Tech Stack</h4>
//                                         <div className="flex flex-wrap gap-2">
//                                             {project.tech.map((tech, idx) => (
//                                                 <motion.div
//                                                     key={idx}
//                                                     whileHover={{ y: -2 }}
//                                                     className="px-3 py-1.5 bg-light text-sm rounded-full text-dark"
//                                                 >
//                                                     #{tech}
//                                                 </motion.div>
//                                             ))}
//                                         </div>
//                                     </div>

//                                     <div className="space-y-3">
//                                         <h4 className="text-sm font-medium text-dark">Highlights</h4>
//                                         <div className="flex flex-wrap gap-3">
//                                             {project.metrics.map((metric, idx) => (
//                                                 <div
//                                                     key={idx}
//                                                     className="px-3 py-1.5 bg-primary/5 text-sm rounded-full text-dark/80"
//                                                 >
//                                                     ✓ {metric}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Links Section */}
//                                 <div className="mt-8 flex items-center gap-4 relative z-10">
//                                     <motion.a
//                                         href={project.github}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         whileHover={{ x: 5 }}
//                                         className="flex items-center gap-2 text-dark/80 hover:text-dark"
//                                     >
//                                         <FiGithub className="text-xl" />
//                                         <span className="font-medium">Source Code</span>
//                                     </motion.a>

//                                     <motion.a
//                                         href={project.demo}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         whileHover={{ x: 5 }}
//                                         className={`flex items-center gap-2 ${project.accent === "primary"
//                                             ? "text-primary hover:text-primary/80"
//                                             : "text-secondary hover:text-secondary/80"
//                                             }`}
//                                     >
//                                         <span className="font-medium">Live Demo</span>
//                                         <FiArrowUpRight className="text-xl" />
//                                     </motion.a>
//                                 </div>

//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>

//                 <div className="mt-12 text-center text-sm text-muted">
//                     Explore more on my{' '}
//                     <motion.a
//                         href="https://github.com/Harshiikaa"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         whileHover={{ x: 5 }}
//                         className="text-primary underline hover:text-primary/80 inline-flex items-center gap-1"
//                     >
//                         GitHub profile →
//                     </motion.a>
//                 </div>


//             </div>
//         </section>
//     );
// };

// export default Projects;