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
        { name: 'Our Collection', path: '/our-collection' },
        { name: 'Destinations', path: '/destinations' },
        { name: 'Experiences', path: '/experiences' },
        { name: 'About Us', path: '/about' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    {/* Logo Text - Using Brand Orange */}
                    <span className={`text-2xl font-serif font-bold tracking-widest ${isScrolled ? 'text-brand-orange' : 'text-white'}`}>
                        FASMALA
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm uppercase tracking-wider hover:text-brand-orange transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white/90'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className={`px-6 py-2 border transition-all duration-300 ${isScrolled
                                ? 'border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white'
                                : 'border-white text-white hover:bg-white hover:text-brand-orange'
                            }`}
                    >
                        Plan Your Trip
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
