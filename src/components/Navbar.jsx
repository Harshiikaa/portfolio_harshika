import React from 'react';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#', hover: 'hover:text-secondary' },
    { name: 'About', href: '#', hover: 'hover:text-secondary' },
    { name: 'Skills', href: '#', hover: 'hover:text-secondary' },
    { name: 'Projects', href: '#', hover: 'hover:text-secondary' },
    { name: 'Contact', href: '#', hover: 'hover:text-secondary' },
  ];

  return (
    <nav className="sticky top-0 bg-light/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-3xl font-bold text-dark hover:text-primary transition-colors duration-300"
          >
            Portfolio
          </a>

          <div className="flex space-x-10 text-lg">
            {navItems.map(({ name, href, hover }) => (
              <a
                key={name}
                href={href}
                className={`text-dark transition-all duration-300 hover:scale-105 ${hover}`}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
