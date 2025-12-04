import React from 'react';
import { motion } from 'framer-motion';

const ResortCollection = () => {
    const resorts = [
        {
            name: "Soneva Jani",
            atoll: "Noonu Atoll",
            description: "Overwater villas with slides into the lagoon",
            image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
            stars: 5
        },
        {
            name: "Gili Lankanfushi",
            atoll: "North Male Atoll",
            description: "Eco-luxury overwater bungalows",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
            stars: 5
        },
        {
            name: "Baros Maldives",
            atoll: "North Male Atoll",
            description: "Intimate island with pristine beaches",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop",
            stars: 5
        },
        {
            name: "Anantara Kihavah",
            atoll: "Baa Atoll",
            description: "UNESCO Biosphere Reserve luxury",
            image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=2074&auto=format&fit=crop",
            stars: 5
        },
        {
            name: "Conrad Maldives",
            atoll: "South Ari Atoll",
            description: "Twin-island paradise resort",
            image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1974&auto=format&fit=crop",
            stars: 5
        },
        {
            name: "Velaa Private Island",
            atoll: "Noonu Atoll",
            description: "Ultra-luxury private island experience",
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop",
            stars: 5
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-dark mb-4">Our Resort Collection</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Handpicked luxury resorts across the Maldives' most stunning atolls
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resorts.map((resort, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <img
                                    src={resort.image}
                                    alt={resort.name}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <div className="flex items-center mb-2">
                                        {[...Array(resort.stars)].map((_, i) => (
                                            <span key={i} className="text-brand-orange text-sm">★</span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold mb-1 text-brand-orange">{resort.name}</h3>
                                    <p className="text-sm text-gray-300 mb-2">{resort.atoll}</p>
                                    <p className="text-sm text-gray-200">{resort.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="/collection"
                        className="inline-block px-10 py-4 bg-brand-orange text-white font-semibold uppercase tracking-wider hover:bg-brand-dark transition-colors duration-300"
                    >
                        View All Resorts
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ResortCollection;
