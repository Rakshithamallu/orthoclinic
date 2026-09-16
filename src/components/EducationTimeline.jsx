import React from 'react';
import { DOCTOR_INFO } from '../data/doctorData';

const EducationTimeline = () => {
  return (
    <section className="section section-subtle" id="education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge teal">ACADEMIC FOUNDATION</span>
          <h2 className="section-title">Education & Advanced Training</h2>
          <p className="section-description">
            Rigorous surgical training from premier medical institutes across Karnataka, grounding Dr. Shashikumar's practice in advanced trauma and orthopedic science.
          </p>
        </div>

        <div className="education-timeline-wrap">
          <div className="timeline-track" />

          {DOCTOR_INFO.education.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-card">
                <span className="timeline-period-badge">{item.period}</span>
                <h3 className="timeline-degree">{item.degree}</h3>
                <div className="timeline-institution">{item.institution}</div>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
