import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import AboutDoctor from '../components/AboutDoctor';
import EducationTimeline from '../components/EducationTimeline';
import Fellowships from '../components/Fellowships';
import Conditions from '../components/Conditions';
import Treatments from '../components/Treatments';
import Facilities from '../components/Facilities';
import WhyChooseUs from '../components/WhyChooseUs';
import Research from '../components/Research';
import PatientJourney from '../components/PatientJourney';
import Blog from '../components/Blog';
import AppointmentCTA from '../components/AppointmentCTA';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = ({ onOpenAppointmentModal }) => {
  return (
    <div className="home-page">
      <Hero onOpenAppointmentModal={onOpenAppointmentModal} />
      <Stats />
      <AboutDoctor onOpenAppointmentModal={onOpenAppointmentModal} />
      <EducationTimeline />
      <Fellowships />
      <Conditions onOpenAppointmentModal={onOpenAppointmentModal} />
      <Treatments onOpenAppointmentModal={onOpenAppointmentModal} />
      <Facilities />
      <WhyChooseUs />
      <Research />
      <PatientJourney />
      <Blog onOpenAppointmentModal={onOpenAppointmentModal} />
      <AppointmentCTA onOpenAppointmentModal={onOpenAppointmentModal} />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
