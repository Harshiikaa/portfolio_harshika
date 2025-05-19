import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gradientStart via-gradientMid to-gradientEnd backdrop-blur-lg text-light pt-12 pb-8 border-t border-white/20 shadow-inner">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left: Text */}
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <p className="text-2xl font-bold mb-2">Let's Connect</p>
                        <p className="text-light/70">Open for new opportunities</p>
                    </div>

                    {/* Right: Social Icons */}
                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/Harshiikaa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-secondary transition"
                        >
                            <i className="fab fa-github text-2xl"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/harshika-chaudhary-b8662b222"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-secondary transition"
                        >
                            <i className="fab fa-linkedin text-2xl"></i>
                        </a>
                        <a
                            href="#"
                            className="hover:text-secondary transition"
                        >
                            <i className="fab fa-twitter text-2xl"></i>
                        </a>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="border-t border-white/20 mt-12 pt-8 text-center text-light/60 text-sm">
                    <p>&copy; 2023 Harshika. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
