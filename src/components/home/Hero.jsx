import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1974&auto=format&fit=crop"
                >
                    {/* Placeholder video URL - ideally replace with local asset or high-quality CDN link */}
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-islands-in-the-ocean-1229-large.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 tracking-wide"
                >
                    Discover the <br /> <span className="text-brand-orange italic">Untouched</span> Maldives
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-lg md:text-xl max-w-2xl mb-10 font-light tracking-wider"
                >
                    Curated journeys to the world's most breathtaking islands.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.1 }}
                    className="flex flex-col md:flex-row gap-4"
                >
                    <button className="px-8 py-4 bg-brand-orange text-white font-semibold tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-300">
                        PLAN YOUR TRIP
                    </button>
                    <button className="px-8 py-4 border border-white text-white font-semibold tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-300">
                        EXPLORE PACKAGES
                    </button>
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
