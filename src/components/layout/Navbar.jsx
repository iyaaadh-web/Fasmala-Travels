import React, { useState, useEffect } from 'react';           // ← ADD useEffect
import { Link, useLocation } from 'react-router-dom';       // ← ADD useLocation
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // ADD THESE TWO LINES
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Collection', path: '/collection' },
    ];

    // ADD THIS WHOLE useEffect (closes menu on route change + scroll effect)
    useEffect(() => {
        // Close mobile menu when page changes
        setIsMobileMenuOpen(false);

        // Make navbar solid when scrolled
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]); // ← this also closes menu when clicking a link

    // ADD THIS helper function (optional but looks great)
    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 
            ${scrolled ? 'bg-[#3D2314] shadow-lg' : 'bg-transparent'}`} // ← CHANGE HERE
        >
            <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src="/logo-white.png"                     // ← CHANGE to white logo
                        alt="Fasmala Travels Logo"
                        className="h-12 w-auto"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition-colors 
                                ${isActive(link.path) 
                                    ? 'text-orange-400' 
                                    : 'text-[#F5E6D3] hover:text-orange-400'}`} // ← CHANGE colors
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="px-6 py-2 bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors rounded-md" // ← better orange
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-3xl text-[#F5E6D3]" // ← cream icon
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#3D2314] border-t border-[#4A2A1A]"> {/* ← dark brown */}
                    <div className="container mx-auto px-6 py-6 flex flex-col space-y-4 space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-lg font-medium transition-colors 
                                    ${isActive(link.path) 
                                        ? 'text-orange-400' 
                                        : 'text-[#F5E6D3] hover:text-orange-400'}`}
                                // onClick not needed anymore — useEffect closes it
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="px-8 py-3 bg-orange-500 text-white font-medium text-center rounded-md hover:bg-orange-600 transition"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
