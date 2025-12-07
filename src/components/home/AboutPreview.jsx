import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutPreview = () => {
    return (
        <section className="py-20 bg-orange-950 text-white relative overflow-hidden">
            {/* Optional subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-orange-950 to-amber-950/70 pointer-events-none" />

            {/* Background image (right side on desktop) */}
            <div 
                className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center opacity-25 hidden md:block"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="md:w-1/2">
                    <span className="text-orange-200 font-serif italic text-xl mb-4 block">
                        Our Story
                    </span>
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-white">
                        Curating Paradise Since 2024
                    </h2>
                    <p className="text-orange-100 font-serif leading-relaxed mb-6 text-lg">
                        Fasmala Travels was born from a deep love for the Maldives and a desire to share its hidden gems with the world. We are a team of local experts and luxury travel enthusiasts dedicated to crafting bespoke journeys that go beyond the ordinary.
                    </p>
                    <p className="text-orange-100 font-serif leading-relaxed mb-10 text-lg">
                        Whether you seek the thrill of diving with manta rays, the serenity of a private sandbank, or the indulgence of a world-class spa, we know the perfect island for you.
                    </p>

                    <button className="group inline-flex items-center gap-3 bg-white text-orange-950 font-semibold py-4 px-8 rounded-full hover:bg-orange-100 transition">
                        Discover Our Journey
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
