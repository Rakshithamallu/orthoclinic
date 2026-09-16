import React from 'react';
import { CLINIC_INFO } from '../data/doctorData';

const AppointmentCTA = ({ onOpenAppointmentModal }) => {
  return (
    <section className="section" id="appointment-section">
      <div className="container">
        <div className="appointment-cta-banner">
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">
              Ready to Take the Next Step Toward Better Movement?
            </h2>
            <p className="cta-banner-sub">
              Schedule a personalized clinical consultation with Dr. Shashi Kumar M S at Dr. Shashi's Ortho Clinic, JP Nagar, Mysuru.
            </p>

            <div className="cta-timing-pill">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Consultation Hours: {CLINIC_INFO.consultationTimings} ({CLINIC_INFO.consultationDays})</span>
            </div>

            <div className="cta-button-group">
              <button
                className="btn btn-teal btn-lg"
                onClick={onOpenAppointmentModal}
                id="cta-banner-book-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Book Appointment
              </button>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white btn-lg"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.58 1.961.905 2.796.905h.005c3.179 0 5.767-2.587 5.768-5.766 0-1.541-.6-2.99-1.69-4.08-1.09-1.088-2.54-1.692-4.083-1.692zm6.657 9.85c-.279.78-1.626 1.487-2.247 1.583-.599.09-1.381.127-3.957-.936-2.748-1.134-4.512-3.92-4.65-4.103-.137-.184-1.109-1.474-1.109-2.81 0-1.336.702-1.993.951-2.259.248-.267.544-.334.726-.334.181 0 .363.002.52.01.168.008.393-.064.615.47.229.549.78 1.904.848 2.043.069.138.115.3.023.483-.092.184-.138.3-.275.46-.138.161-.291.36-.415.483-.138.138-.283.288-.122.565.161.276.717 1.181 1.54 1.914 1.059.944 1.952 1.236 2.228 1.374.276.138.437.115.6-.07.161-.184.69-804.873-1.08.184-.276.368-.23.621-.138.253.092 1.61.76 1.886.898.276.138.46.207.529.322.069.115.069.667-.21 1.447zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.957-1.399C8.39 21.499 10.141 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                </svg>
                Chat on WhatsApp
              </a>

              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="btn btn-outline-white btn-lg"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call Now (+91-6361446411)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
