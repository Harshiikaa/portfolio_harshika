import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-night text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left mb-6 md:mb-0">
                            <p className="text-2xl font-bold mb-2">Let's Connect</p>
                            <p className="text-gray-400">Open for new opportunities</p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="hover:text-peach transition">
                                <i className="fab fa-github text-2xl"></i>
                            </a>
                            <a href="#" className="hover:text-peach transition">
                                <i className="fab fa-linkedin text-2xl"></i>
                            </a>
                            <a href="#" className="hover:text-peach transition">
                                <i className="fab fa-twitter text-2xl"></i>
                            </a>
                        </div>
                    </div>
                    <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2023 Your Name. All rights reserved</p>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
