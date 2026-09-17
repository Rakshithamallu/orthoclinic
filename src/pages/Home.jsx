import React from 'react';
import Hero from '../components/Hero';
import AboutDoctor from '../components/AboutDoctor';
import WhyChooseUs from '../components/WhyChooseUs';
import AppointmentCTA from '../components/AppointmentCTA';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = ({ onOpenAppointmentModal }) => {
  return (
    <div className="home-page">
      {/* 1. Hero Banner */}
      <Hero onOpenAppointmentModal={onOpenAppointmentModal} />

      {/* 2. ABOUT THE SURGEON */}
      <AboutDoctor onOpenAppointmentModal={onOpenAppointmentModal} />

      {/* 3. PATIENT ASSURANCE */}
      <WhyChooseUs />

      {/* 4. Ready to Take the Next Step Toward Better Movement? */}
      <AppointmentCTA onOpenAppointmentModal={onOpenAppointmentModal} />

      {/* 5. CLEAR CLINICAL ANSWERS */}
      <FAQ />

      {/* 6. LOCATION & APPOINTMENTS */}
      <Contact />
    </div>
  );
};

export default Home;
