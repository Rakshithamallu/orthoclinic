import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Contact Us</span>
          </nav>

          <span className="section-badge teal">GET IN TOUCH</span>
          <h1 className="subpage-hero-title">Contact & Clinic Location</h1>
          <p className="subpage-hero-sub">
            Visit Dr. Shashi's Ortho Clinic in Vijayanagar 1st Stage, Mysuru. Direct appointments, emergency directions, and query messaging.
          </p>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default ContactPage;
