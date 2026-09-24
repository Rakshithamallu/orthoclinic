import React from 'react';
import { CLINIC_FACILITIES } from '../data/treatmentsData';

const FacilitiesAvailable = ({ onOpenAppointmentModal }) => {
  return (
    <section className="section facilities-available-section" id="facilities-available">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge teal">IN-HOUSE INFRASTRUCTURE</span>
          <h2 className="section-title">Facilities Available</h2>
          <p className="section-description mx-auto" style={{ maxWidth: '680px' }}>
            Fully integrated in-clinic diagnostic, orthopedic examination, minor procedure, and recovery facilities designed for streamlined, comfortable patient care under one roof.
          </p>
        </div>

        <div className="facilities-available-grid">
          {CLINIC_FACILITIES.map((facility) => (
            <div key={facility.id} className="facility-available-card">
              <div className="facility-img-wrap">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="facility-card-img"
                  loading="lazy"
                />
                <span className="facility-card-badge">{facility.badge}</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">{facility.title}</h3>
                <p className="facility-card-desc">{facility.description}</p>
                <ul className="facility-feature-bullets">
                  {facility.features.map((feat, idx) => (
                    <li key={idx} className="facility-bullet-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="facilities-cta-strip">
          <div className="facilities-cta-text">
            <span className="facilities-cta-pill">Direct Walk-In & Appointments</span>
            <h4>Need Immediate Orthopedic Evaluation or X-Ray?</h4>
            <p>Our in-house digital X-ray and dressing facilities ensure swift relief without lengthy hospital waiting lines.</p>
          </div>
          <button
            className="btn btn-primary btn-md"
            onClick={onOpenAppointmentModal}
          >
            Book Clinic Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesAvailable;
