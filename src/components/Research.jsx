import React from 'react';
import { DOCTOR_INFO } from '../data/doctorData';

const Research = () => {
  const { research } = DOCTOR_INFO;

  return (
    <section className="section" id="research">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">ACADEMIC EXCELLENCE</span>
          <h2 className="section-title">{research.heading}</h2>
          <p className="section-description">
            Advancing orthopedic knowledge through indexed national and international clinical research, biomechanical studies, and conference faculty addresses.
          </p>
        </div>

        {/* Overview Banner Card */}
        <div className="research-overview-card">
          <div className="research-overview-text">
            <h3>10+ National & International Publications</h3>
            <p>{research.summary}</p>
          </div>

          <div className="research-talks-box">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
            <div>
              <div className="research-talks-title">State & National Faculty Talks</div>
              <div className="research-talks-desc">{research.conferenceTalks}</div>
            </div>
          </div>
        </div>

        {/* Publications & Biomechanical Topics Grid */}
        <div className="publications-grid">
          {research.publicationTopics.map((item, idx) => (
            <div key={idx} className="publication-card">
              <span className="publication-field-badge">{item.field}</span>
              <h4 className="publication-topic">{item.topic}</h4>
              <p className="publication-detail">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
