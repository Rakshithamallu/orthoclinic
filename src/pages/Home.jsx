import React from 'react';
import AboutDoctor from '../components/AboutDoctor';
import WhyChooseUs from '../components/WhyChooseUs';
import AppointmentCTA from '../components/AppointmentCTA';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = ({ onOpenAppointmentModal }) => {
  return (
    <div className="home-page">
      <AboutDoctor onOpenAppointmentModal={onOpenAppointmentModal} />
      <WhyChooseUs />
      <AppointmentCTA onOpenAppointmentModal={onOpenAppointmentModal} />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
