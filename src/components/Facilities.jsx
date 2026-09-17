import React from 'react';
import { CLINIC_FACILITIES } from '../data/treatmentsData';

const Facilities = () => {
  const getFacilityIcon = (iconType) => {
    switch (iconType) {
      case 'consultation':
        return (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      case 'xray':
        return (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
            <path d="M7 8l5 5 5-5"></path>
          </svg>
        );
      case 'physio':
        return (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
            <path d="M17 21v-4l-4-4 2-5-4 1-2 4"></path>
            <path d="M7 21l3-6"></path>
          </svg>
        );
      case 'cast':
        return (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        );
      case 'dressing':
        return (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="8" width="18" height="12" rx="2"></rect>
            <path d="M10 8V5a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v3"></path>
            <line x1="12" y1="11" x2="12" y2="17"></line>
            <line x1="9" y1="14" x2="15" y2="14"></line>
          </svg>
        );
      default:
        return (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        );
    }
  };

  return (
    <section className="section section-subtle" id="facilities">
      <div className="container">
        <div className="section-header">
          <span className="section-badge teal">IN-HOUSE CAPABILITIES</span>
          <h2 className="section-title">Our Clinic Facilities</h2>
          <p className="section-description">
            Modern on-site diagnostics, minor procedure suites, and physical rehabilitation designed for comfortable, streamlined patient care under one roof.
          </p>
        </div>

        <div className="facilities-grid">
          {CLINIC_FACILITIES.map((facility) => (
            <div key={facility.id} className="facility-card">
              <span className="facility-badge">{facility.badge}</span>
              <div className="facility-icon-wrap">
                {getFacilityIcon(facility.icon)}
              </div>
              <h3 className="facility-title">{facility.title}</h3>
              <p className="facility-desc">{facility.description}</p>

              <div className="facility-features">
                {facility.features.map((feat, idx) => (
                  <div key={idx} className="facility-feature-item">
                    <span className="facility-check-dot" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
