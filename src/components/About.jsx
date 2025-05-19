import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [visibleBadges, setVisibleBadges] = useState(4);

  const techStack = [
    { name: 'React' },
    { name: 'Flutter' },
    { name: 'Node.js' },
    { name: 'MongoDB' },
    { name: 'MySQL' },
    { name: 'Java' },
    { name: 'Agile' },
    { name: 'Figma' },
    { name: 'Tableau' },
    { name: 'Python' },
  ];

  return (
    <section
      id="about"
      className="py-20 min-h-screen bg-gradient-to-br from-gradientStart via-gradientMid to-gradientEnd text-light font-poppins"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 drop-shadow-md"
        >
          About
        </motion.h2>

        <p className="mb-6 text-muted text-center max-w-3xl mx-auto font-roboto">
          I'm <span className="font-semibold text-primary">Harshika Chaudhary</span>, a frontend specialist dedicated to crafting high-performance web applications. With expertise in modern JavaScript ecosystems, I architect solutions that combine technical excellence with intuitive user experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Skills */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="prose-lg text-light"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-px w-12 bg-primary" />
                  <span className="text-sm font-medium text-secondary">KEY TOOLS I USE</span>
                </div>

                <ul className="grid grid-cols-2 gap-4">
                  {techStack.map((tech, index) => (
                    <motion.li
                      key={tech.name}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-3 bg-light text-dark rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <span className="font-medium">{tech.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right: Education */}
          <div className="grid gap-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-px w-12 bg-primary" />
                <span className="text-sm font-medium text-secondary">EDUCATION</span>
              </div>

              <motion.div
                whileHover={{ y: -2 }}
                className="p-10 bg-light text-dark rounded-xl shadow-sm border-l-4 border-secondary"
              >
                <p className="text-sm text-muted mb-1">Undergraduate Degree</p>
                <h3 className="font-bold text-dark mb-2 flex items-center gap-2">
                  📚 B.Sc.(Hons) in Computing
                </h3>
                <p className="text-xs text-accent">Coventry University, 2024</p>

                <div className="mt-3 space-y-2">
                  <p className="text-xs font-medium text-dark">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Web Development",
                      "Web API Development",
                      "User Experience Design",
                      "Software Development",
                      "Programming for Developers",
                      "Programming and Algorithms",
                      "Object Oriented Programming",
                      "Database System",
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-2 py-1 bg-gray-200 text-dark text-xs rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import developerImage from '../assets/images/me.png';

// const About = () => {
//     const [isHovered, setIsHovered] = useState(false);
//     const [visibleBadges, setVisibleBadges] = useState(4);

//     const techStack = [
//         // { name: 'React', years: 3 },
//         // { name: 'Flutter', years: 2 },
//         // { name: 'Node.js', years: 2 },
//         // { name: 'MongoDB', years: 2 },
//         // { name: 'MySQL', years: 3 },
//         // { name: 'Java', years: 2 },
//         // { name: 'Agile', years: 2 },
//         // { name: 'Figma', years: 3 },
//         // { name: 'Tableau', years: 1 },
//         // { name: 'Python', years: 1 },
//         { name: 'React' },
//         { name: 'Flutter' },
//         { name: 'Node.js' },
//         { name: 'MongoDB' },
//         { name: 'MySQL' },
//         { name: 'Java' },
//         { name: 'Agile' },
//         { name: 'Figma' },
//         { name: 'Tableau' },
//         { name: 'Python' },


//     ];

//     return (
//         <section id="about" className="py-20 bg-light relative overflow-hidden">
//             <div className="container mx-auto px-6">
//                 <motion.h2
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="text-4xl font-bold text-center mb-12 text-dark font-poppins"
//                 >
//                     About
//                 </motion.h2>
//                 <p className="mb-6">
//                     I'm <span className="font-semibold text-primary">Harshika Chaudhary</span>, a frontend specialist dedicated to crafting high-performance web applications. With expertise in modern JavaScript ecosystems, I architect solutions that combine technical excellence with intuitive user experiences.
//                 </p>
//                 <div className="grid md:grid-cols-2 gap-12 items-center">
//                     {/* core cojmpetencies */}
//                     <div className="space-y-8">

//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             className="prose-lg text-dark-700"
//                         >

//                             <div className="space-y-4">
//                                 <div className="flex items-center space-x-3">
//                                     <div className="h-px w-12 bg-primary" />
//                                     <span className="text-sm font-medium text-secondary">KEY TOOLS I USE</span>
//                                 </div>

//                                 <ul className="grid grid-cols-2 gap-4">
//                                     {techStack.map((tech, index) => (
//                                         <motion.li
//                                             key={tech.name}
//                                             whileHover={{ x: 5 }}
//                                             className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
//                                         >
//                                             <span className="font-medium">{tech.name}</span>
//                                             {/* <span className="text-sm text-muted">{tech.years}+ years</span> */}
//                                         </motion.li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </motion.div>
//                     </div>
//                     {/* education */}
//                     <div className="grid gap-4">
//                         <div className="space-y-4">
//                             <div className="flex items-center space-x-3">
//                                 <div className="h-px w-12 bg-primary" />
//                                 <span className="text-sm font-medium text-secondary">EDUCATION</span>
//                             </div>
//                             <motion.div
//                                 whileHover={{ y: -2 }}
//                                 className="p-10 bg-white rounded-xl shadow-sm border-l-4 border-secondary"
//                             >
//                                 <p className="text-sm text-muted mb-1"> Undergraduate Degree</p>
//                                 <h3 className="font-bold text-dark mb-2 flex items-center gap-2">
//                                     <span className="text-dark">📚 B.Sc.(Hons) in Computing</span>
//                                 </h3>
//                                 <p className="text-xs text-accent">Coventry University, 2024</p>
//                                 <div className="mt-3 space-y-2">
//                                     <p className="text-xs font-medium text-dark">Relevant Coursework:</p>
//                                     {/* <div className="flex flex-wrap gap-2">
//                                         <span className="px-2 py-1 bg-light text-xs rounded-full"> Data Analysis for Business  </span>
//                                         <span className="px-2 py-1 bg-light text-xs rounded-full">Data Science for Developers  </span>
//                                         <span className="px-2 py-1 bg-light text-xs rounded-full">Data Analytics  </span>
//                                         <span className="px-2 py-1 bg-light text-xs rounded-full">Database System </span>
//                                         <span className="px-2 py-1 bg-light text-xs rounded-full">Object Oriented Programming  </span>
//                                         <span className="px-2 py-1 bg-light text-xs rounded-full">Mathematics for Computer Science </span>
//                                         <span className="px-2 py-1 bg-light text-xs rounded-full">Tableau  </span>
//                                         <span className="px-2 py-1 bg-light text-xs rounded-full">Creative Thinking for Business</span>
//                                     </div> */}
//                                     <div className="flex flex-wrap gap-2">
//                                         <span className="px-2 py-1 bg-light text-xs rounded-full">Web Development</span>
//                                         <span className="px-2 py-1 bg-light text-xs rounded-full">Web API Development</span>
//                                         <span className="px-2 py-1 bg-light text-xs rounded-full">User Experience Design</span>
//                                         <span className="px-2 py-1 bg-light text-xs rounded-full">Software Development</span>
//                                         <span className="px-2 py-1 bg-light text-xs rounded-full">Programming for Developers</span>
//                                         <span className="px-2 py-1 bg-light text-xs rounded-full">Programming and Algorithms</span>
//                                         <span className="px-2 py-1 bg-light text-xs rounded-full">Object Oriented Programming</span>
//                                         <span className="px-2 py-1 bg-light text-xs rounded-full">Database System</span>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;