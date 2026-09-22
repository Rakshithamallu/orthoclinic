import React from 'react';
import Hero from '../components/Hero';
import SurgicalTrackRecord from '../components/SurgicalTrackRecord';
import AreaOfSpecialties from '../components/AreaOfSpecialties';
import CentresOfExcellence from '../components/CentresOfExcellence';
import AboutDoctor from '../components/AboutDoctor';
import WhyChooseUs from '../components/WhyChooseUs';
import PatientJourney from '../components/PatientJourney';
import GoogleReviews from '../components/GoogleReviews';
import SocialReels from '../components/SocialReels';
import AppointmentCTA from '../components/AppointmentCTA';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = ({ onOpenAppointmentModal }) => {
  return (
    <div className="home-page">
      {/* 1. Hero Banner */}
      <Hero onOpenAppointmentModal={onOpenAppointmentModal} />

      {/* 2. Surgical Track Record & Clinical Statistics Grid (5000+ Surgeries, Verifiable Metrics) */}
      <SurgicalTrackRecord />

      {/* 3. Area of Specialties (Knee, Hip, Shoulder, Elbow & Trauma Procedures with Direct CTAs) */}
      <AreaOfSpecialties onOpenAppointmentModal={onOpenAppointmentModal} />

      {/* 4. Centres of Excellence Deep Dives (Arthroscopy, Robotic Joint Replacement, Sports Medicine, Orthobiologics) */}
      <CentresOfExcellence onOpenAppointmentModal={onOpenAppointmentModal} />

      {/* 5. About the Consultant Surgeon */}
      <AboutDoctor onOpenAppointmentModal={onOpenAppointmentModal} />

      {/* 6. Why Patients Across Karnataka Trust Us (6-Pillar Clinical Assurance) */}
      <WhyChooseUs />

      {/* 7. The 7-Step Treatment Journey: Patient Care Roadmap */}
      <PatientJourney onOpenAppointmentModal={onOpenAppointmentModal} />

      {/* 8. Verified Google Reviews & Patient Testimonials Carousel */}
      <GoogleReviews />

      {/* 9. Social Media & Instagram Reels */}
      <SocialReels />

      {/* 10. Call to Action Banner */}
      <AppointmentCTA onOpenAppointmentModal={onOpenAppointmentModal} />

      {/* 11. Clear Clinical Answers & FAQs */}
      <FAQ />

      {/* 12. Clinic Location, Map & Timings */}
      <Contact />
    </div>
  );
};

export default Home;
