import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TREATMENT_CATEGORIES } from '../data/treatmentsData';

const Treatments = ({ onOpenAppointmentModal }) => {
  const [activeCategoryId, setActiveCategoryId] = useState('knee');
  const navigate = useNavigate();

  const activeCategory = TREATMENT_CATEGORIES.find((cat) => cat.id === activeCategoryId) || TREATMENT_CATEGORIES[0];

  return (
    <section className="section" id="treatments">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">CLINICAL EXCELLENCE</span>
          <h2 className="section-title">Specialized Orthopedic Treatments</h2>
          <p className="section-description">
            Explore state-of-the-art keyhole arthroscopy, robotic joint replacement, trauma fixations, and conservative spinal care. Select a category below to explore specific procedures.
          </p>
        </div>

        <div className="treatments-explorer">
          {/* Category Navigation Tabs */}
          <div className="treatment-tabs-container" role="tablist" aria-label="Treatment Categories">
            {TREATMENT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategoryId === cat.id}
                aria-controls={`panel-${cat.id}`}
                id={`tab-${cat.id}`}
                className={`treatment-tab-btn ${activeCategoryId === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategoryId(cat.id)}
              >
                <span>{cat.shortTitle}</span>
              </button>
            ))}
          </div>

          {/* Active Category Panel */}
          <div
            id={`panel-${activeCategory.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory.id}`}
            className="treatment-active-panel"
          >
            <div className="treatment-panel-header">
              <div className="treatment-panel-header-info">
                <span className="section-badge teal">{activeCategory.badge}</span>
                <h3 className="treatment-panel-title">{activeCategory.name}</h3>
                <p className="treatment-panel-summary">{activeCategory.summary}</p>
                <div style={{ marginTop: '16px' }}>
                  <Link
                    to={`/treatments/${activeCategory.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View All {activeCategory.shortTitle} Procedures
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="treatment-panel-image-wrap">
                <img
                  src={activeCategory.image}
                  alt={activeCategory.name}
                  className="treatment-panel-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Procedures Grid for Active Category */}
            <div className="procedures-grid">
              {activeCategory.treatments.map((proc, index) => (
                <div
                  key={index}
                  className="procedure-item-card"
                  onClick={() => navigate(`/treatments/${activeCategory.id}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && navigate(`/treatments/${activeCategory.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="procedure-top">
                    <span className="procedure-type-badge">{proc.type}</span>
                    <h4 className="procedure-title">{proc.title}</h4>
                    <p className="procedure-desc">{proc.description}</p>
                  </div>

                  <div className="procedure-bottom">
                    <div className="procedure-indication">
                      <strong>Indications:</strong> {proc.indications}
                    </div>
                    <Link
                      to={`/treatments/${activeCategory.id}`}
                      className="procedure-view-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Page
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/treatments" className="btn btn-secondary">
            View All Specialized Orthopedic Treatments
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
