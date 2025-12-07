import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutPreview = () => {
    return (
        <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20 hidden md:block" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="md:w-1/2">
                    <span className="text-brand-white font-serif italic text-xl mb-4 block">Our Story</span>
                    <h2 className="text-4xl font-serif font-bold mb-8">Curating Paradise Since 2010</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Fasmala Travels was born from a deep love for the Maldives and a desire to share its hidden gems with the world. We are a team of local experts and luxury travel enthusiasts dedicated to crafting bespoke journeys that go beyond the ordinary.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-10">
                        Whether you seek the thrill of diving with manta rays, the serenity of a private sandbank, or the indulgence of a world-class spa, we know the perfect island for you.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
