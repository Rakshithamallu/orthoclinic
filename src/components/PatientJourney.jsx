import React from 'react';
import { PATIENT_JOURNEY } from '../data/treatmentsData';

const PatientJourney = () => {
  return (
    <section className="section section-subtle" id="journey">
      <div className="container">
        <div className="section-header">
          <span className="section-badge teal">YOUR CARE PATHWAY</span>
          <h2 className="section-title">The Patient Recovery Journey</h2>
          <p className="section-description">
            A structured, transparent three-step clinical approach designed to take you from initial discomfort to restored strength and lasting mobility.
          </p>
        </div>

        <div className="journey-grid">
          {PATIENT_JOURNEY.map((item) => (
            <div key={item.step} className="journey-card">
              <div className="journey-step-num">{item.step}</div>
              <div className="journey-phase">{item.phase}</div>
              <h3 className="journey-title">{item.title}</h3>
              <p className="journey-desc">{item.description}</p>
              <div className="journey-action-badge">{item.action}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientJourney;
