import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Image Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10" /> {/* Elegant gradient overlay */}
                <img
                    src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop"
                    alt="Maldives Paradise"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 tracking-tight leading-tight"
                >
                    Discover the <br /> <span className="text-brand-orange italic">Untouched</span> Maldives
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-xl md:text-2xl max-w-3xl mb-12 font-light tracking-wide leading-relaxed"
                >
                    Curated journeys to the world's most breathtaking islands
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.1 }}
                    className="flex flex-col md:flex-row gap-6"
                >
                    <a href="/contact" className="px-10 py-4 bg-brand-orange text-white font-semibold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-lg hover:shadow-xl">
                        Contact Us
                    </a>
                    <a href="/collection" className="px-10 py-4 border-2 border-white text-white font-semibold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-300">
                        Explore Collection
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
            >
                <div className="w-px h-16 bg-white/50 mx-auto"></div>
            </motion.div>
        </div>
    );
};

export default Hero;
