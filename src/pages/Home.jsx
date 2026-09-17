import React from 'react';
import Hero from '../components/Hero';
import AboutDoctor from '../components/AboutDoctor';
import WhyChooseUs from '../components/WhyChooseUs';
import SocialReels from '../components/SocialReels';
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

      {/* 4. Social Media & Instagram Reels (Our Happy Clients) */}
      <SocialReels />

      {/* 5. Ready to Take the Next Step Toward Better Movement? */}
      <AppointmentCTA onOpenAppointmentModal={onOpenAppointmentModal} />

      {/* 6. CLEAR CLINICAL ANSWERS */}
      <FAQ />

      {/* 7. LOCATION & APPOINTMENTS */}
      <Contact />
    </div>
  );
};

export default Home;
