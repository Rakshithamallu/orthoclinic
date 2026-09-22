import React from 'react';
import { SURGICAL_TRACK_RECORD } from '../data/doctorData';

const getStatIcon = (iconId) => {
  switch (iconId) {
    case 'total-surgeries':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      );
    case 'experience':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6"></circle>
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
        </svg>
      );
    case 'happy-patients':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      );
    case 'knee-bone':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      );
    case 'knee-pain':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"></circle>
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 3v6M12 15v6M3 12h6M15 12h6"></path>
        </svg>
      );
    case 'shoulder':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="4"></circle>
          <path d="M5 21v-2a7 7 0 0 1 14 0v2"></path>
        </svg>
      );
    case 'trauma':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="m8 8 8 8M16 8l-8 8"></path>
        </svg>
      );
    case 'robotic':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="12" x="4" y="8" rx="2"></rect>
          <path d="M12 2v6M2 14h2M20 14h2M15 13v2M9 13v2"></path>
        </svg>
      );
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      );
  }
};

const SurgicalTrackRecord = () => {
  return (
    <section className="surgical-track-section" aria-labelledby="surgical-track-title" id="track-record">
      <div className="container">
        <div className="surgical-track-inner">
          <div className="surgical-track-header">
            <div className="surgical-track-kicker">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
              Surgical Track Record & Clinical Statistics
            </div>
            <h2 className="surgical-track-title" id="surgical-track-title">
              High-Volume Orthopedic Expertise Backed by Verifiable Surgical Numbers
            </h2>
            <p className="surgical-track-intro">
              These verifiable numbers reflect Dr. Shashikumar's high-volume experience in tertiary orthopedic care, joint preservation, and robotic surgery — a proven track record patients can weigh with confidence when choosing a surgeon for their procedure.
            </p>
          </div>

          <div className="surgical-track-grid">
            {SURGICAL_TRACK_RECORD.map((item) => (
              <div
                key={item.id}
                className={`surgical-stat-card ${item.isPrimary ? 'primary-hero-stat' : ''}`}
              >
                <div className="surgical-stat-top">
                  <div className="surgical-stat-icon" aria-hidden="true">
                    {getStatIcon(item.icon)}
                  </div>
                  <strong className="surgical-stat-number">{item.stat}</strong>
                </div>
                <p className="surgical-stat-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurgicalTrackRecord;
