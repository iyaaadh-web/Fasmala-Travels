// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Auto-close mobile menu when changing page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Detect scroll → make navbar solid
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // TRUE = dark background (your brown hero), FALSE = light background pages
  const isDarkHero = location.pathname === '/' && !scrolled;

  const textColor = isDarkHero ? 'text-[#F5E6D3]' : 'text-gray-800';
  const hoverColor = 'hover:text-orange-500';
  const activeColor = 'text-orange-500 font-semibold';
  const mobileBg = scrolled || !isDarkHero ? 'bg-[#3D2314]' : 'bg-[#3D2314]/95';

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
          scrolled || !isDarkHero ? 'bg-[#3D2314] shadow-lg' : 'bg-transparent'
        }`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="container mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">

          {/* LOGO – always visible */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo-white.png"
              alt="Fasmala Travels"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu – color adapts automatically */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-14">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-medium transition ${                    isActive(link.path)
                      ? activeColor
                      : `${textColor} ${hoverColor}`
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full shadow-lg transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle – icon color adapts
          <button
            className={`md:hidden text-3xl ${isDarkHero ? 'text-[#F5E6D3]' : 'text-gray-800'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu – adapts perfectly */}
        {isMobileMenuOpen && (
          <div className={`md:hidden ${mobileBg} backdrop-blur-sm border-t border-white/10`}>
            <div className="container mx-auto px-6 py-10 flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-medium transition ${
                    isActive(link.path) ? activeColor : textColor
                  } ${hoverColor}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mx-auto px-12 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full text-lg shadow-xl"
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
