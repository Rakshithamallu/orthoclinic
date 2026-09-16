import React from 'react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO, DOCTOR_INFO } from '../data/doctorData';

const Footer = ({ onOpenAppointmentModal }) => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col">
            <div className="footer-brand">
              <div className="footer-brand-title">
                Dr. SHASHI'S <span>ORTHO CLINIC</span>
              </div>
              <div className="footer-brand-sub">
                ADVANCED KNEE & SHOULDER CARE • MYSURU
              </div>
            </div>
            <p className="footer-bio">
              Led by Dr. Shashikumar M S (MBBS, MS Ortho), providing comprehensive, evidence-based orthopedic solutions ranging from keyhole arthroscopy and robotic joint replacement to personalized conservative physical rehabilitation in JP Nagar, Mysuru.
            </p>
            <div>
              <button
                className="btn btn-teal btn-sm"
                onClick={onOpenAppointmentModal}
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-nav-list">
              <Link to="/" className="footer-nav-link">Home</Link>
              <Link to="/about" className="footer-nav-link">About Doctor</Link>
              <Link to="/treatments" className="footer-nav-link">Treatments</Link>
              <Link to="/conditions" className="footer-nav-link">Conditions</Link>
              <Link to="/facilities" className="footer-nav-link">Facilities</Link>
              <Link to="/research" className="footer-nav-link">Research & Talks</Link>
              <Link to="/blog" className="footer-nav-link">Blog & Guides</Link>
              <Link to="/faqs" className="footer-nav-link">FAQs</Link>
              <Link to="/contact" className="footer-nav-link">Contact</Link>
            </div>
          </div>

          {/* Column 3: Specialized Treatments */}
          <div className="footer-col">
            <h4 className="footer-heading">Treatments</h4>
            <div className="footer-nav-list">
              <Link to="/treatments/knee" className="footer-nav-link">Knee Arthroscopy</Link>
              <Link to="/treatments/shoulder" className="footer-nav-link">Shoulder Arthroscopy</Link>
              <Link to="/treatments/joint-replacement" className="footer-nav-link">Robotic Joint Replacement</Link>
              <Link to="/treatments/trauma-fracture" className="footer-nav-link">Fracture & Trauma Care</Link>
              <Link to="/treatments/spine" className="footer-nav-link">Conservative Spine Care</Link>
              <Link to="/treatments/ankle-foot" className="footer-nav-link">Ankle & Foot Injuries</Link>
              <Link to="/treatments/arthritis" className="footer-nav-link">Rheumatoid Arthritis</Link>
            </div>
          </div>

          {/* Column 4: Contact Details */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Information</h4>

            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>
                {CLINIC_INFO.address.line1}, {CLINIC_INFO.address.area}, {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.pincode}
              </span>
            </div>

            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <a href={`tel:${CLINIC_INFO.phoneClean}`} style={{ color: '#38bdf8' }}>
                {CLINIC_INFO.phone}
              </a>
            </div>

            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>{CLINIC_INFO.email}</span>
            </div>

            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Consultation: {CLINIC_INFO.consultationTimings}</span>
            </div>
          </div>
        </div>

        {/* Medical Content Safety Disclaimer */}
        <div className="footer-disclaimer-box">
          <strong>Medical Information Disclaimer:</strong> {DOCTOR_INFO.disclaimer} Always seek the advice of your physician or other qualified healthcare provider regarding any clinical condition.
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © 2026 Dr. SHASHI'S ORTHO CLINIC. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ color: '#64748b' }}>Privacy Policy</span>
            <span style={{ color: '#64748b' }}>Terms & Patient Rights</span>
            <span style={{ color: '#64748b' }}>Mysuru, Karnataka</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
