import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Our Collection', path: '/collection' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-lg py-3'
                : 'bg-brand-dark/80 backdrop-blur-sm py-5'
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 group">
                    {/* Logo Image with enhanced styling */}
                    <img
                        src="/logo.png"
                        alt="Fasmala Travels Logo"
                        className="h-14 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-lg"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${isScrolled ? 'text-brand-dark hover:text-brand-orange' : 'text-white hover:text-brand-orange'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className={`px-8 py-3 border-2 font-semibold uppercase tracking-wider transition-all duration-300 rounded-sm ${isScrolled
                            ? 'border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white'
                            : 'border-white text-white hover:bg-white hover:text-brand-dark'
                            }`}
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? 'text-brand-dark' : 'text-white'} />
                    ) : (
                        <Menu className={isScrolled ? 'text-brand-dark' : 'text-white'} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-8 space-y-6"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-brand-dark text-lg font-medium hover:text-brand-orange"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="px-8 py-3 bg-brand-orange text-white hover:bg-brand-dark transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Plan Your Trip
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
