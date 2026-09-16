import React from 'react';
import { CLINIC_INFO } from '../data/doctorData';

const Contact = () => {
  return (
    <section className="section section-subtle" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">LOCATION & APPOINTMENTS</span>
          <h2 className="section-title">Get In Touch With Our Clinic</h2>
          <p className="section-description">
            Conveniently located in JP Nagar, Mysuru. Visit us during evening consultation hours or connect via phone or WhatsApp.
          </p>
        </div>

        <div className="contact-grid">
          {/* Clinic Information Card */}
          <div className="contact-card">
            <div>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1.45rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {CLINIC_INFO.name}
                </h3>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-teal)', letterSpacing: '0.05em' }}>
                  {CLINIC_INFO.subname}
                </div>
              </div>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-label">Clinic Location</div>
                    <div className="contact-info-value" style={{ fontSize: '1rem' }}>
                      {CLINIC_INFO.address.line1},<br />
                      {CLINIC_INFO.address.area},<br />
                      {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} - {CLINIC_INFO.address.pincode}
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon teal">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-label">Consultation Timings</div>
                    <div className="contact-info-value">
                      {CLINIC_INFO.consultationTimings}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {CLINIC_INFO.consultationDays}
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-label">Phone & Inquiries</div>
                    <div className="contact-info-value">
                      <a href={`tel:${CLINIC_INFO.phoneClean}`} style={{ color: 'var(--primary)' }}>
                        {CLINIC_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon teal">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <div className="contact-info-value" style={{ fontSize: '0.98rem' }}>
                      <a href={`mailto:${CLINIC_INFO.email}`} style={{ color: 'var(--text-primary)' }}>
                        {CLINIC_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="contact-actions-row">
              <a
                href={CLINIC_INFO.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                </svg>
                Get Directions
              </a>

              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="btn btn-secondary btn-sm"
              >
                Call Clinic
              </a>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-teal btn-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Interactive Google Maps Frame */}
          <div className="map-card-wrapper">
            <iframe
              title="Dr. Shashi's Ortho Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.665796249673!2d76.6436!3d12.2825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf6ff87e9cf291%3A0x8bb8c187bc95f5c7!2sJP%20Nagar%2C%20Mysuru%2C%20Karnataka%20570008!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
              className="map-iframe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
