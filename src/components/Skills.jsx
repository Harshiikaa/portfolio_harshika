import { motion } from 'framer-motion';
import { FiCode, FiServer, FiTool } from 'react-icons/fi';

const skillsData = [
    {
        category: 'Core Technologies',
        icon: <FiCode className="text-xl text-primary" />,
        items: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'MySQL', 'Express.js', 'Flutter', 'Java'],
        colorClass: 'from-primary/10 to-primary/5'
    },
    {
        category: 'Tools & Frameworks',
        icon: <FiServer className="text-xl text-secondary" />,
        items: ['Git & Github', 'Figma', 'Tableau', 'Agile', 'Postman', 'VS Code', 'Agile', 'Trello'],
        colorClass: 'from-secondary/10 to-secondary/5'
    },
    {
        category: 'Learning & Exploration',
        icon: <FiTool className="text-xl text-accent" />,
        items: ['Redux', 'Next.js', 'Docker', 'AWS', 'Jest', 'Turbopack', 'Vite', 'OpenAI API'],
        colorClass: 'from-accent/10 to-accent/5'
    }
];

const Skills = () => {
    return (
        <section id="skills" className="pt-12 min-h-[90vh] bg-gradient-to-br from-gradientStart via-gradientMid to-gradientEnd text-light font-poppins">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-12 drop-shadow-md"
                >
                    Skills
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {skillsData.map((skillSet, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 20 }}
                            whileInView={{ y: 0 }}
                            className="group relative overflow-hidden"
                        >
                            {/* Hover gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${skillSet.colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            {/* Card content */}
                            <div className="relative p-6 bg-light text-dark rounded-xl border border-white/10 shadow-md">
                                <div className="flex items-center gap-3 mb-6">
                                    {skillSet.icon}
                                    <h3 className="text-lg font-semibold text-dark">
                                        {skillSet.category}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    {skillSet.items.map((skill, idx) => (
                                        <motion.div
                                            key={skill}
                                            whileHover={{ scale: 1.02 }}
                                            className="px-3 py-2 bg-gray-100 text-sm rounded-lg text-dark text-center transition-colors hover:bg-white relative"
                                        >
                                            {skill}
                                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
