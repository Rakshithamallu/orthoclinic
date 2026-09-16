import React from 'react';
import { DOCTOR_INFO } from '../data/doctorData';

const Fellowships = () => {
  return (
    <section className="section" id="fellowships">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">ADVANCED SPECIALIZATION</span>
          <h2 className="section-title">Sub-Specialty Fellowships</h2>
          <p className="section-description">
            Recognized specialized post-doctoral surgical training across arthroscopy, robotic joint replacement, and micro-reconstructive hand trauma.
          </p>
        </div>

        <div className="fellowships-grid">
          {DOCTOR_INFO.fellowships.map((fellowship) => (
            <div key={fellowship.id} className="fellowship-card">
              <span className="fellowship-badge">{fellowship.badge}</span>
              <div className="fellowship-code">{fellowship.code}</div>
              <h3 className="fellowship-title">{fellowship.title}</h3>
              <p className="fellowship-desc">{fellowship.description}</p>

              <div className="fellowship-highlights">
                {fellowship.highlights.map((highlight, idx) => (
                  <div key={idx} className="fellowship-highlight-item">
                    <svg className="fellowship-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{highlight}</span>
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

export default Fellowships;
