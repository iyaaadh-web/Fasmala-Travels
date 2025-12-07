// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false); // close mobile menu on route change
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
      {/* Google Fonts – Playfair Display (elegant) + Inter (clean modern) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#3D2314] shadow-xl' : 'bg-transparent'
        }`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="container mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
          {/* Logo – with elegant Playfair font fallback */}
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Fasmala Travels"
              className="h-12 md:h-14 w-auto"
            />
            {/* Optional text logo if you want */}
            {/* <span className="text-2xl md:text-3xl font-bold text-[#F5E6D3]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Fasmala Travels
            </span> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-base font-medium tracking-wide transition-all duration-300
                  ${isActive(link.path)
                    ? 'text-orange-400'
                    : 'text-[#F5E6D3] hover:text-orange-400'
                  } after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-0.5 after:bg-orange-400 after:transition-all after:duration-300
                  ${isActive(link.path) ? 'after:w-full' : 'hover:after:w-full'}`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#F5E6D3] hover:text-orange-400 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu – Full Luxury Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#3D2314] shadow-2xl border-t border-orange-900/30">
            <div className="container mx-auto px-6 py-10 flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-medium tracking-wider transition-all
                    ${isActive(link.path)
                      ? 'text-orange-400'
                      : 'text-[#F5E6D3] hover:text-orange-400'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mx-auto px-12 py-4 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-full shadow-xl transform hover:shadow-orange-500/25 transition-all"
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
