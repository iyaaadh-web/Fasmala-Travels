import React from 'react';
import Hero from '../components/home/Hero';
import Destinations from '../components/home/Destinations';
import AboutPreview from '../components/home/AboutPreview';
import SustainableTravel from '../components/home/SustainableTravel';
import ContactBooking from '../components/home/ContactBooking';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Destinations />
            <AboutPreview />
            <SustainableTravel />
            <ContactBooking />
        </div>
    );
};

export default HomePage;
