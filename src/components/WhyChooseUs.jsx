import React from 'react';
import { WHY_CHOOSE_US } from '../data/treatmentsData';

const WhyChooseUs = () => {
  return (
    <section className="section why-choose-section" id="why-choose-us">
      <div className="container">
        <div className="section-header">
          <span className="section-badge dark">PATIENT ASSURANCE</span>
          <h2 className="section-title" style={{ color: '#ffffff' }}>Why Choose Dr. Shashi's Ortho Clinic?</h2>
          <p className="section-description" style={{ color: '#94a3b8' }}>
            Delivering high-precision orthopedic excellence in Mysuru through compassionate, evidence-based care and surgical mastery.
          </p>
        </div>

        <div className="why-choose-grid">
          {WHY_CHOOSE_US.map((item, index) => (
            <div key={index} className="why-card">
              <div className="why-stat-num">{item.stat}</div>
              <div className="why-stat-label">{item.statLabel}</div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
