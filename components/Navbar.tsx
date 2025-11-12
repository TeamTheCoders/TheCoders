'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'portfolio', 'services', 'testimonials', 'terms', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-100 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg'
          : 'glass'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center float-animation">
              <i className="fas fa-code text-white"></i>
            </div>
            <span className="text-2xl font-bold text-gradient font-display">THE CODERS</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'portfolio', 'services', 'testimonials', 'terms', 'contact'].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={`nav-link font-medium capitalize ${
                  activeSection === section
                    ? 'text-purple-600'
                    : scrolled
                    ? 'text-gray-700 hover:text-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {section === 'terms' ? 'Terms & Conditions' : section}
              </Link>
            ))}
          </div>
          
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden mt-4 pb-4 ${isOpen ? 'block' : 'hidden'}`}>
          {['home', 'about', 'portfolio', 'services', 'testimonials', 'terms', 'contact'].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              onClick={closeMenu}
              className={`block py-2 font-medium capitalize ${
                activeSection === section
                  ? 'text-purple-600'
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              {section === 'terms' ? 'Terms & Conditions' : section}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;