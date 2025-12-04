import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Destinations = () => {
    const atolls = [
        { name: "North Male Atoll", description: "Home to the capital and luxury resorts." },
        { name: "South Male Atoll", description: "Famous for diving and currents." },
        { name: "Baa Atoll", description: "UNESCO Biosphere Reserve." },
        { name: "Ari Atoll", description: "Whale shark spotting haven." },
    ];

    return (
        <section className="py-20 bg-brand-dark text-white overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                {/* Content */}
                <div className="w-full md:w-1/3">
                    <h2 className="text-4xl font-serif font-bold mb-6">Explore the Atolls</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        The Maldives consists of 26 atolls, each offering a unique slice of paradise. From the vibrant marine life of Baa Atoll to the surf breaks of North Male, discover your perfect island.
                    </p>
                    <div className="space-y-4">
                        {atolls.map((atoll, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group"
                            >
                                <MapPin className="text-brand-orange group-hover:scale-110 transition-transform" />
                                <div>
                                    <h4 className="font-semibold">{atoll.name}</h4>
                                    <p className="text-xs text-gray-500">{atoll.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <button className="mt-8 px-8 py-3 border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300">
                        View Interactive Map
                    </button>
                </div>

                {/* Map Placeholder */}
                <div className="w-full md:w-2/3 h-[500px] bg-white/5 rounded-2xl relative overflow-hidden border border-white/10 flex items-center justify-center group">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589979481223-deb893043163?q=80&w=1987&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative z-10 text-center">
                        <MapPin size={64} className="text-brand-orange mx-auto mb-4 animate-bounce" />
                        <p className="text-xl font-serif tracking-widest">INTERACTIVE MAP COMING SOON</p>
                    </div>

                    {/* Decorative dots representing islands */}
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full animate-ping" />
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full animate-ping delay-75" />
                    <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white rounded-full animate-ping delay-150" />
                </div>
            </div>
        </section>
    );
};

export default Destinations;
