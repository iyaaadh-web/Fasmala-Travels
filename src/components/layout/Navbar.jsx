// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // close mobile menu when route changes
  useEffect(() => setIsMobileOpen(false), [location.pathname]);

  // detect scroll → switch to solid background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Collection', path: '/collection' },
  ];

  const isActive = (p: string) => location.pathname === p;

  // true only on the very top of the homepage (dark hero)
  const isHero = location.pathname === '/' && !scrolled;

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#3D2314] shadow-xl' : 'bg-transparent'
        }`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="container mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">

          {/* LOGO – white on dark, original on light */}
          <Link to="/" className="flex items-center">
            <img
              src={isHero ? '/logo-white.png' : '/logo.png'}
              alt="Fasmala Travels"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative pb-1 text-base font-medium tracking-wide transition-colors ${
                  isHero
                    ? isActive(link.path)
                      ? 'text-orange-400'
                      : 'text-[#F5E6D3] hover:text-orange-400'
                    : isActive(link.path)
                    ? 'text-orange-500'
                    : 'text-gray-800 hover:text-orange-500'
                }`}
              >
                {link.name}
                {/* orange underline only for active page */}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full" />
                )}
              </Link>
            ))}

            <Link
              to="/contact"
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full shadow-lg transition-transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden transition-colors ${
              isHero ? 'text-[#F5E6D3]' : 'text-gray-800'
            }`}
            onClick={() => setIsMobileOpen((v) => !v)}
          >
            {isMobileOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu – same colour logic */}
        {isMobileOpen && (
          <div className="md:hidden absolute inset-x-0 top-full bg-[#3D2314] shadow-2xl border-t border-orange-900/30">
            <div className="container mx-auto px-6 py-10 flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-orange-400'
                      : 'text-[#F5E6D3] hover:text-orange-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mx-auto px-12 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-xl"
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
