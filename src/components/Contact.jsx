import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiFile } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        try {
            const result = await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );
            console.log('Email sent:', result.text);
            e.target.reset();
        } catch (error) {
            console.error('Submission failed:', error);
        } finally {
            setIsSubmitted(false);
        }
    };


    return (
        <section id="contact" className="relative py-20 bg-light text-dark">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    Let's Connect
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ scale: 0.95 }}
                        whileInView={{ scale: 1 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-muted">Name</label>
                                <motion.input
                                    whileFocus={{ scale: 1.01 }}
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full p-3.5 rounded-xl bg-white border border-gray-300 text-dark placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-muted">Email</label>
                                <motion.input
                                    whileFocus={{ scale: 1.01 }}
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    className="w-full p-3.5 rounded-xl bg-white border border-gray-300 text-dark placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-muted">Message</label>
                                <motion.textarea
                                    whileFocus={{ scale: 1.01 }}
                                    name="message"
                                    rows="3"
                                    placeholder="How can I help you?"
                                    className="w-full p-3.5 rounded-xl bg-white border border-gray-300 text-dark placeholder-gray-400 shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    required
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                type="submit"
                                className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-md flex items-center justify-center gap-2"
                            >
                                {isSubmitted ? (
                                    <>
                                        <span className="animate-pulse">🚀</span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <FiMail className="text-xl" />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Social Links */}
                    <div className="space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-semibold mb-6">Other Ways to Reach Me</h3>


                        </motion.div>

                        <div className="flex justify-center lg:justify-start gap-4">

                            <div className="space-y-4">
                                <motion.a
                                    href="mailto:chaudharyharshika8@gmail.com"
                                    whileHover={{ x: 5 }}
                                    className="inline-flex items-center gap-3 px-6 py-2.5 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors text-sm shadow-sm"
                                >
                                    <FiMail className="text-2xl text-primary" />
                                    <span className="text-lg text-dark">chaudharyharshika8@gmail.com</span>
                                </motion.a>


                                <motion.a
                                    href="https://www.linkedin.com/in/harshika-chaudhary-b8662b222"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 5 }}
                                    className="inline-flex items-center gap-3 px-6 py-2.5 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors text-sm shadow-sm"
                                >
                                    <FiLinkedin className="text-2xl text-secondary" />
                                    <span className="text-lg">LinkedIn Profile</span>
                                </motion.a>

                                <motion.a
                                    href="https://github.com/Harshiikaa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 5 }}
                                    className="inline-flex items-center gap-3 px-6 py-2.5 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors text-sm shadow-sm"
                                >
                                    <FiGithub className="text-2xl text-accent" />
                                    <span className="text-lg">GitHub Link </span>
                                </motion.a>

                                <motion.a
                                    href="/my_resume_Harshika.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 5 }}
                                    className="inline-flex items-center gap-3 px-6 py-2.5 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors text-sm shadow-sm"
                                >
                                    <FiFile className="text-2xl text-secondary" />
                                    <span className="text-lg">Resume</span>
                                </motion.a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
