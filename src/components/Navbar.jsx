import React, { useState, useEffect } from 'react';
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
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Destinations', href: '#destinations' },
        { name: 'Experiences', href: '#experiences' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
                isScrolled 
                    ? 'bg-[#2C1810]/95 backdrop-blur-md shadow-xl py-4' 
                    : 'bg-transparent py-8'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo - Elegant Serif with Orange Accent */}
                <a href="#" className="relative">
                    <h1 className="text-4xl md:text-5xl font-serif text-white tracking-widest">
                        Fasmala<span className="text-[#E86A33] ml-1">Travels</span>
                    </h1>
                    <p className="absolute -bottom-6 left-0 text-xs tracking-widest text-white/70 font-light">
                        CURATING PARADISE SINCE 2024
                    </p>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-white font-light text-sm tracking-widest uppercase 
                                     hover:text-[#E86A33] transition-all duration-300
                                     after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-px 
                                     after:bg-[#E86A33] after:transition-all after:duration-300
                                     hover:after:w-full"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="ml-8 px-8 py-3 bg-[#E86A33] text-white font-medium tracking-wider uppercase text-sm rounded-sm hover:bg-[#d15a2a] transition-all duration-300 shadow-lg hover:shadow-[#E86A33]/30">
                        Inquire Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-[#E86A33] transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="md:hidden absolute top-full left-0 w-full bg-[#2C1810]/98 backdrop-blur-lg shadow-2xl border-t border-[#E86A33]/20"
                    >
                        <div className="flex flex-col items-center py-12 space-y-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-white text-xl font-light tracking-widest hover:text-[#E86A33] transition-colors duration-300"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="mt-6 px-12 py-4 bg-[#E86A33] text-white font-medium tracking-wider uppercase rounded-sm hover:bg-[#d15a2a] transition-all duration-300 shadow-lg">
                                Inquire Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
