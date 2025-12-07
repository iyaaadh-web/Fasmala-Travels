import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false); // ← fixes crash
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
          scrolled ? 'bg-[#3D2314] shadow-xl' : 'bg-transparent'
        }`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="container mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
          
          {/* LOGO – BULLETPROOF VERSION */}
          <Link to="/" className="flex items-center gap-3">
            {/* Try to show image first */}
            {!logoError ? (
              <img
                src="/logo-white.png"
                alt="Fasmala Travels"
                onError={() => setLogoError(true)}   // ← if image fails → switch to text
                className="h-12 md:h-14 w-auto object-contain"
              />
            ) : (
              /* Fallback: Beautiful text logo if image crashes */
              <div className="flex items-baseline">
                <span className="text-3xl md:text-4xl font-bold text-[#F5E6D3]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Fasmala
                </span>
                <span className="text-xl md:text-2xl font-medium text-orange-400 ml-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Travels
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-medium tracking-wide transition-all ${
                  isActive(link.path)
                    ? 'text-orange-400'
                    : 'text-[#F5E6D3] hover:text-orange-400'
                } after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-orange-400 after:transition-all hover:after:w-full ${isActive(link.path) ? 'after:w-full' : ''}`}
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

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#F5E6D3] hover:text-orange-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#3D2314] shadow-2xl">
            <div className="container mx-auto px-6 py-10 flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-medium tracking-wider ${
                    isActive(link.path) ? 'text-orange-400' : 'text-[#F5E6D3] hover:text-orange-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mx-auto px-12 py-4 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-full shadow-xl"
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
