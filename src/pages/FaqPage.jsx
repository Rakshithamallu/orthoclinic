import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';

const FaqPage = ({ onOpenAppointmentModal }) => {
  return (
    <div className="faq-page">
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Frequently Asked Questions</span>
          </nav>

          <span className="section-badge teal">PATIENT CLARITY</span>
          <h1 className="subpage-hero-title">Frequently Asked Questions</h1>
          <p className="subpage-hero-sub">
            Answers to common questions regarding orthopedic consultations, surgery recovery, second opinions, and clinic visits.
          </p>
        </div>
      </section>

      <FAQ />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="appointment-cta-card">
            <div className="appointment-cta-content">
              <span className="section-badge teal">HAVE A SPECIFIC QUESTION?</span>
              <h3 className="appointment-cta-title" style={{ fontSize: '2rem' }}>
                Dr. Shashi is here to help
              </h3>
              <p className="appointment-cta-description">
                Schedule a consultation to discuss your specific imaging, diagnosis, or rehabilitation query.
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

export default FaqPage;
