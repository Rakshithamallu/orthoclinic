import React, { useState } from 'react';
import { CLINICAL_WORK } from '../data/clinicGalleryData';

const CATEGORIES = [
  'All Cases',
  'Joint Replacement',
  'Knee Arthroscopy',
  'Trauma & Fracture',
];

const OurWork = ({ onOpenAppointmentModal }) => {
  const [activeCategory, setActiveCategory] = useState('All Cases');
  const [selectedCase, setSelectedCase] = useState(null);

  const filteredCases = activeCategory === 'All Cases'
    ? CLINICAL_WORK
    : CLINICAL_WORK.filter((item) =>
        item.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
        item.tag.toLowerCase().includes(activeCategory.toLowerCase())
      );

  const handleNext = () => {
    if (!selectedCase) return;
    const currentIndex = filteredCases.findIndex(c => c.id === selectedCase.id);
    const nextIndex = (currentIndex + 1) % filteredCases.length;
    setSelectedCase(filteredCases[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedCase) return;
    const currentIndex = filteredCases.findIndex(c => c.id === selectedCase.id);
    const prevIndex = (currentIndex - 1 + filteredCases.length) % filteredCases.length;
    setSelectedCase(filteredCases[prevIndex]);
  };

  return (
    <section className="section our-work-section" id="our-work">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge teal">SURGICAL PORTFOLIO</span>
          <h2 className="section-title">Our Work</h2>
          <p className="section-description mx-auto" style={{ maxWidth: '720px' }}>
            A curated showcase of verified surgical outcomes, anatomical fracture fixations, keyhole joint reconstructions, and robotic arthroplasties performed by Dr. Shashikumar M S.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="work-filter-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`work-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clinical Cases Grid */}
        <div className="work-grid">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="work-card"
              onClick={() => setSelectedCase(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedCase(item)}
            >
              <div className="work-img-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="work-img"
                  loading="lazy"
                />
                <div className="work-overlay">
                  <span className="work-zoom-badge">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                    <span>View Case Study</span>
                  </span>
                </div>
                <span className="work-tag-badge">{item.tag}</span>
              </div>

              <div className="work-content">
                <span className="work-category">{item.category}</span>
                <h3 className="work-title">{item.shortTitle}</h3>
                <p className="work-desc">{item.description}</p>
                <div className="work-footer-meta">
                  <span className="work-outcome-label">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {item.outcome}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Disclaimer & Consultation Link */}
        <div className="work-bottom-note">
          <p>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>
              Radiological documentation and clinical records are shared for surgical education and patient awareness. Individual clinical results vary depending on bone quality, fracture pattern, and rehabilitation adherence.
            </span>
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCase && (
        <div className="work-lightbox-overlay" onClick={() => setSelectedCase(null)}>
          <div className="work-lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="work-lightbox-close"
              onClick={() => setSelectedCase(null)}
              aria-label="Close Case Details"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="work-lightbox-content">
              <div className="work-lightbox-media">
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="work-lightbox-img"
                />
                <button
                  className="work-lightbox-nav prev"
                  onClick={handlePrev}
                  aria-label="Previous case"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button
                  className="work-lightbox-nav next"
                  onClick={handleNext}
                  aria-label="Next case"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>

              <div className="work-lightbox-info">
                <span className="work-lightbox-tag">{selectedCase.tag}</span>
                <span className="work-lightbox-category">{selectedCase.category}</span>
                <h3 className="work-lightbox-title">{selectedCase.title}</h3>
                
                <div className="work-lightbox-detail-box">
                  <div className="work-lightbox-field">
                    <span className="field-label">Surgical Procedure:</span>
                    <span className="field-val">{selectedCase.procedure}</span>
                  </div>
                  <div className="work-lightbox-field">
                    <span className="field-label">Clinical Result:</span>
                    <span className="field-val">{selectedCase.outcome}</span>
                  </div>
                </div>

                <p className="work-lightbox-desc">{selectedCase.description}</p>

                <div className="work-lightbox-actions">
                  <button
                    className="btn btn-primary btn-md w-100"
                    onClick={() => {
                      setSelectedCase(null);
                      if (onOpenAppointmentModal) onOpenAppointmentModal();
                    }}
                  >
                    Consult Doctor About This Procedure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurWork;
