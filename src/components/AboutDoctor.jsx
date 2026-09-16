import React, { useState } from 'react';
import { DOCTOR_INFO, CLINIC_INFO } from '../data/doctorData';
import { IMAGES } from '../data/images';

const AboutDoctor = ({ onOpenAppointmentModal }) => {
  const [profileExpanded, setProfileExpanded] = useState(false);

  return (
    <section id="about-doctor" className="section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Doctor Portrait Card */}
          <div className="about-media-col">
            <div className="about-image-card">
              <img
                src={IMAGES.doctor.portrait}
                alt={DOCTOR_INFO.fullName}
                className="about-img"
                loading="lazy"
              />
              <div className="about-badge-overlay">
                <div className="about-badge-title">{DOCTOR_INFO.fullName}</div>
                <div className="about-badge-sub">
                  Consultant Orthopedic Surgeon • {CLINIC_INFO.address.city}, Karnataka
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Qualifications & Expertise */}
          <div className="about-content-col">
            <span className="section-badge">ABOUT THE SURGEON</span>

            <h2 className="section-title">
              Meet Dr. Shashi Kumar M S
            </h2>

            <div className="about-subtitle">
              {DOCTOR_INFO.fullQualifications} • {DOCTOR_INFO.role}
            </div>

            <p className="about-lead-text">
              {DOCTOR_INFO.bioSummary}
            </p>

            <p className="about-body-text">
              Recognized across Mysuru and Karnataka for precision diagnostic acumen and surgical skill, Dr. Shashikumar combines cutting-edge minimally invasive techniques with a compassionate, patient-first approach. He emphasizes anatomy preservation, ensuring surgical intervention is performed only when conservative modalities have been exhausted.
            </p>

            {/* Core Areas of Clinical Expertise */}
            <div className="about-expertise-tags">
              {DOCTOR_INFO.areasOfExpertise.map((item, index) => (
                <span key={index} className="expertise-tag">
                  {item}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                className="btn btn-secondary"
                onClick={() => setProfileExpanded(!profileExpanded)}
                aria-expanded={profileExpanded}
              >
                <span>{profileExpanded ? 'Collapse Profile' : 'View Full Profile & Clinical Background'}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: profileExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              <button
                className="btn btn-primary"
                onClick={onOpenAppointmentModal}
              >
                Book Consultation
              </button>
            </div>

            {/* Animated Expandable Panel */}
            <div className={`profile-expanded-panel ${profileExpanded ? 'expanded' : ''}`}>
              <div className="profile-expanded-content">
                <h4>Clinical Practice & Hospital Associations</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                  {DOCTOR_INFO.clinicalPhilosophy}
                </p>

                <div className="profile-institutions-list">
                  {DOCTOR_INFO.institutions.map((inst, i) => (
                    <div key={i} className="institution-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{inst}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
