import React from 'react';
import { Link } from 'react-router-dom';
import { CENTRES_OF_EXCELLENCE } from '../data/treatmentsData';

const CentresOfExcellence = ({ onOpenAppointmentModal }) => {
  return (
    <section className="centres-excellence-section" id="centres-of-excellence" aria-labelledby="coe-main-heading">
      <div className="container">
        <div className="coe-header">
          <span className="section-badge dark">CENTRE OF EXCELLENCE</span>
          <h2 className="section-title" id="coe-main-heading">
            Advanced Clinical Mastery in Joint Surgery & Preservation
          </h2>
          <p className="section-description">
            Providing comprehensive care across arthroscopic surgery, robotic joint replacements, sports injuries, trauma fixations, and restorative orthobiologics.
          </p>
        </div>

        {CENTRES_OF_EXCELLENCE.map((item) => (
          <div key={item.id} className={`coe-row ${item.reverse ? 'reverse' : ''}`}>
            {/* Visual Media */}
            <div className="coe-media">
              <img
                src={item.image}
                alt={item.title}
                className="coe-img"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="coe-media-overlay"></div>
            </div>

            {/* Content Column */}
            <div className="coe-content">
              <span className="coe-tag">{item.tag}</span>
              <h3 className="coe-title">{item.title}</h3>
              <p className="coe-subtitle">{item.subtitle}</p>
              <p className="coe-desc">{item.description}</p>

              {/* Standard bullet points */}
              {item.points && (
                <ul className="coe-points-list">
                  {item.points.map((pt, idx) => (
                    <li key={idx} className="coe-point-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#028090', flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* 6-Benefits Grid (if present, e.g. Sports Medicine) */}
              {item.benefits && (
                <div className="coe-benefits-grid">
                  {item.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="coe-benefit-box">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#028090', flexShrink: 0 }}>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <div>
                        <strong className="coe-benefit-title">{b.title}</strong>
                        <span className="coe-benefit-desc">{b.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <Link to={item.ctaLink} className="coe-cta-btn">
                  <span>{item.ctaText}</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>

                <button
                  type="button"
                  onClick={onOpenAppointmentModal}
                  className="coe-cta-btn"
                  style={{ background: '#028090' }}
                >
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CentresOfExcellence;
