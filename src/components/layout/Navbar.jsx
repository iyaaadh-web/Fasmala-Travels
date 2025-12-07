import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Collection', path: '/collection' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#3D2314]/95 backdrop-blur-md shadow-xl'  // ← 95% opacity + blur = works on any background
            : 'bg-white/80 backdrop-blur-md shadow-lg'       // ← white on hero, then brown
        }`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="container mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">

          {/* LOGO – Always perfect */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"  // ← Your original logo works everywhere now
              alt="Fasmala Travels"
              className="h-12 md:h-14 w-auto object-contain drop-shadow-lg"
            />
          </Link>

          {/* Desktop Menu – Colors adapt automatically */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-14">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`group text-base font-medium transition-all relative ${
                  isActive(link.path)
                    ? 'text-orange-500 font-semibold'
                    : 'text-gray-800 hover:text-orange-500'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full shadow-lg hover:shadow-orange-500/30 transform hover:scale-105 transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle – Always visible */}
          <button
            className="md:hidden text-gray-800 hover:text-orange-500 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu – Perfect overlay that works anywhere */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl shadow-2xl border-t border-gray-200">
            <div className="container mx-auto px-6 py-10 flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-semibold transition-all block py-3 px-6 rounded-xl ${
                    isActive(link.path) 
                      ? 'text-orange-500 bg-orange-50' 
                      : 'text-gray-800 hover:text-orange-500 hover:bg-orange-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mx-auto px-12 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full text-lg shadow-xl hover:shadow-orange-500/50 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
