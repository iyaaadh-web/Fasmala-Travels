import React from 'react';
import Hero from '../components/home/Hero';
import Destinations from '../components/home/Destinations';
import Experiences from '../components/home/Experiences';
import Highlights from '../components/home/Highlights';
import AboutPreview from '../components/home/AboutPreview';
import Testimonials from '../components/home/Testimonials';
import PlanTrip from '../components/home/PlanTrip';
import ItineraryBuilder from '../components/home/ItineraryBuilder';
import SustainableTravel from '../components/home/SustainableTravel';
import ContactBooking from '../components/home/ContactBooking';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Destinations />
            <Experiences />
            <Highlights />
            <AboutPreview />
            <Testimonials />
            <PlanTrip />
            <ItineraryBuilder />
            <SustainableTravel />
            <ContactBooking />
        </div>
    );
};

export default HomePage;
