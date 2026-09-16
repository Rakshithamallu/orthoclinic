import React from 'react';
import { Link } from 'react-router-dom';
import AboutDoctor from '../components/AboutDoctor';
import EducationTimeline from '../components/EducationTimeline';
import Fellowships from '../components/Fellowships';
import Stats from '../components/Stats';
import WhyChooseUs from '../components/WhyChooseUs';

const AboutPage = ({ onOpenAppointmentModal }) => {
  return (
    <div className="about-page">
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">About Doctor</span>
          </nav>

          <span className="section-badge">SURGICAL EXPERTISE & CREDENTIALS</span>
          <h1 className="subpage-hero-title">Meet Dr. Shashikumar M S</h1>
          <p className="subpage-hero-sub">
            Consultant Orthopedic Surgeon & Specialist in Knee Arthroscopy, Shoulder Surgery, and Robotic Joint Replacement in Mysuru.
          </p>
        </div>
      </section>

      <Stats />
      <AboutDoctor onOpenAppointmentModal={onOpenAppointmentModal} />
      <EducationTimeline />
      <Fellowships />
      <WhyChooseUs />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="appointment-cta-card">
            <div className="appointment-cta-content">
              <span className="section-badge teal">DIRECT SURGEON CONSULTATION</span>
              <h3 className="appointment-cta-title" style={{ fontSize: '2rem' }}>
                Consult Dr. Shashikumar M S in Mysuru
              </h3>
              <p className="appointment-cta-description">
                Personalized joint care, conservative therapy planning, and expert surgical opinions.
              </p>
              <button
                className="btn btn-primary btn-lg"
                onClick={onOpenAppointmentModal}
              >
                Schedule Appointment Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
