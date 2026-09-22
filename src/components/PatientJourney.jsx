import React from 'react';
import { PATIENT_JOURNEY } from '../data/treatmentsData';

const PatientJourney = ({ onOpenAppointmentModal }) => {
  return (
    <section className="journey-shell" id="treatment-journey" aria-labelledby="journey-heading">
      <div className="container">
        <div className="journey-header-wrap">
          <span className="section-badge teal">PATIENT CARE ROADMAP</span>
          <h2 className="section-title" id="journey-heading">
            Your Path to Pain-Free Living: The 7-Step Treatment Journey
          </h2>
          <p className="section-description">
            Successful orthopedic recovery starts with a structured, transparent care pathway. We do not merely manage symptoms; we systematically restore your joint biomechanics and lifestyle through a patient-centric, evidence-based approach.
          </p>
        </div>

        {/* Top Direct Action Banner */}
        <div className="journey-top-cta">
          <div>
            <h3 className="journey-cta-title">Ready to take your first step toward effortless movement?</h3>
            <p className="journey-cta-sub">
              Schedule your in-person clinical evaluation with Dr. Shashikumar M S and start your personalized recovery roadmap.
            </p>
          </div>
          <button
            type="button"
            className="journey-cta-btn"
            onClick={onOpenAppointmentModal}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
            </svg>
            Schedule Consultation
          </button>
        </div>

        {/* 7-Step Grid */}
        <div className="journey-timeline-grid">
          {PATIENT_JOURNEY.map((item) => (
            <div
              key={item.step}
              className={`journey-step-card ${item.highlight ? 'highlight' : ''}`}
            >
              <div className="journey-step-top">
                <span className="journey-step-pill">{item.phase}</span>
                <div className="journey-step-number">{item.step}</div>
              </div>

              <h4 className="journey-step-title">{item.title}</h4>
              <p className="journey-step-desc">{item.description}</p>
              <div className="journey-step-action">{item.action}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientJourney;
