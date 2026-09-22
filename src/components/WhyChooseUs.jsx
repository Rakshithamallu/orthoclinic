import React from 'react';
import { TRUST_BENEFITS } from '../data/doctorData';

const getTrustIcon = (iconId, color) => {
  switch (iconId) {
    case 'fellowship':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6"></circle>
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
        </svg>
      );
    case 'robotic':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="12" x="4" y="8" rx="2"></rect>
          <path d="M12 2v6M2 14h2M20 14h2M15 13v2M9 13v2"></path>
        </svg>
      );
    case 'keyhole':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      );
    case 'hospital':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
          <path d="M2 20h20"></path>
          <path d="M14 12v.01M10 12v.01M14 16v.01M10 16v.01"></path>
        </svg>
      );
    case 'biologics':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      );
    case 'location':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      );
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      );
  }
};

const WhyChooseUs = () => {
  return (
    <section className="trust-benefits-section" id="why-choose-us" aria-labelledby="why-choose-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge dark">CLINICAL DIFFERENTIATION</span>
          <h2 className="section-title" id="why-choose-heading">
            Why Patients Across Karnataka Trust Dr. Shashikumar M S
          </h2>
          <p className="section-description">
            From high-performance knee arthroscopy for athletes to precision robotic joint replacement for seniors, we combine international surgical protocols with state-of-the-art medical technology.
          </p>
        </div>

        <div className="trust-benefits-grid">
          {TRUST_BENEFITS.map((item) => (
            <div key={item.id} className="trust-benefit-card">
              <div
                className="trust-benefit-top-bar"
                style={{ backgroundColor: item.accentColor }}
              ></div>

              <div
                className="trust-benefit-icon-wrap"
                style={{ backgroundColor: `${item.accentColor}18` }}
              >
                {getTrustIcon(item.icon, item.accentColor)}
              </div>

              <h3 className="trust-benefit-title">{item.title}</h3>
              <p className="trust-benefit-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
