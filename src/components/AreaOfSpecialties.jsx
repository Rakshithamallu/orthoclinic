import React from 'react';
import { Link } from 'react-router-dom';
import { AREA_OF_SPECIALTIES } from '../data/treatmentsData';
import { CLINIC_INFO } from '../data/doctorData';
import RotatingAnatomyShowcase from './RotatingAnatomyShowcase';

const AreaOfSpecialties = ({ onOpenAppointmentModal }) => {
  return (
    <section className="specialties-section" id="specialties" aria-labelledby="specialties-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge teal">PROCEDURAL SCOPE</span>
          <h2 className="section-title" id="specialties-heading">Area of Specialties</h2>
          <p className="section-description">
            Dr. Shashikumar M S specializes in sports medicine, hip, knee, shoulder, and elbow pain, reconstructive surgery, and biological joint preservation. We use conservative, minimally invasive arthroscopic, and open techniques as needed to achieve optimal recovery.
          </p>
        </div>

        {/* Clockwise Rotating 3D Anatomy Showcase */}
        <RotatingAnatomyShowcase />

        {/* Action Bar */}
        <div className="specialties-cta-bar">
          <button
            type="button"
            className="specialties-btn btn-navy"
            onClick={onOpenAppointmentModal}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
            </svg>
            Book Clinic Appointment
          </button>

          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="specialties-btn btn-whatsapp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Consult Online via WhatsApp
          </a>
        </div>

        {/* 4 Specialty Cards */}
        <div className="specialties-grid">
          {AREA_OF_SPECIALTIES.map((spec) => (
            <div key={spec.id} className="specialty-card">
              <div className="specialty-image-wrap">
                <img
                  src={spec.image}
                  alt={spec.title}
                  className="specialty-img"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to solid background if image fails
                    e.target.style.display = 'none';
                  }}
                />
                <span className="specialty-badge">{spec.badge}</span>
              </div>

              <div className="specialty-body">
                <h3 className="specialty-title">{spec.title}</h3>
                <p className="specialty-desc">{spec.description}</p>

                <ul className="specialty-procedures-list">
                  {spec.procedures.map((proc, idx) => (
                    <li key={idx} className="specialty-procedure-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#028090', flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{proc}</span>
                    </li>
                  ))}
                </ul>

                <Link to={spec.link} className="specialty-action-link">
                  <span>Explore All {spec.shortName} Procedures</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreaOfSpecialties;
