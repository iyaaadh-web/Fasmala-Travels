import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Destinations from './components/Destinations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-offwhite">
      <Navbar />
      <Hero />
      <About />
      <Destinations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
