import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-10" /> {/* Overlay for text visibility */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-beautiful-turquoise-water-in-the-maldives-2626-large.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 tracking-tight leading-tight"
                    style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}
                >
                    Discover the <br /> <span className="text-brand-orange italic" style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.8), 0 0 20px rgba(245,166,35,0.3)' }}>Untouched</span> Maldives
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-xl md:text-2xl max-w-3xl mb-12 font-light tracking-wide leading-relaxed"
                    style={{ textShadow: '1px 2px 6px rgba(0,0,0,0.8)' }}
                >
                    Curated journeys to the world's most breathtaking islands
                </motion.p>
            </div>
        </div>
    );
};

export default Hero;
