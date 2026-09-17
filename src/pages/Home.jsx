import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import AppointmentCTA from '../components/AppointmentCTA';
import Contact from '../components/Contact';

const Home = ({ onOpenAppointmentModal }) => {
  return (
    <div className="home-page">
      <Hero onOpenAppointmentModal={onOpenAppointmentModal} />
      <Stats />
      <WhyChooseUs />
      <FAQ />
      <AppointmentCTA onOpenAppointmentModal={onOpenAppointmentModal} />
      <Contact />
    </div>
  );
};

export default Home;
