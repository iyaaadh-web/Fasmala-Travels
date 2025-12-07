import React from 'react';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const AboutPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden relative">
      {/* Subtle background image with very low opacity for depth */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 hidden lg:block"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop')`,
        }}
      />

      {/* Optional soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 hidden lg:block" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            <span className="text-sm lg:text-base font-medium tracking-wider text-amber-600 uppercase">
              Our Story
            </span>
            
            <h2 className="mt-4 text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Curating Paradise<br />
              <span className="text-amber-600">Since 2010</span>
            </h2>

            <div className="mt-8 space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Fasmala Travels was born from a deep love for the Maldives and a desire to share its hidden gems with the world. We are a team of local experts and luxury travel enthusiasts dedicated to crafting bespoke journeys that go beyond the ordinary.
              </p>
              <p>
                Whether you seek the thrill of diving with manta rays, the serenity of a private sandbank dinner under the stars, or the indulgence of a world-class overwater spa, we know the perfect island — and the perfect moment — for you.
              </p>
            </div>

            <div className="mt-10">
              <button className={clsx(
                "group inline-flex items-center text-amber-600 font-medium text-lg",
                "hover:text-amber-700 transition-all duration-300"
              )}>
                Read Our Full Story
                <ArrowRight 
                  size={22} 
                  className="ml-3 transition-transform duration-300 group-hover:translate-x-2" 
                />
              </button>
            </div>
          </div>

          {/* Optional: Decorative image on larger screens */}
          <div className="hidden lg:block">
            <div 
              className="rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center h-96 xl:h-[520px]"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop')`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
