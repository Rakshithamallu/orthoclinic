import React, { useState } from 'react';
import { CLINIC_AMBIENCE } from '../data/clinicGalleryData';
import { CLINIC_INFO } from '../data/doctorData';

const AMBIENCE_CATEGORIES = [
  'All Spaces',
  'Reception & Lounge',
  'Consultation',
  'Physiotherapy',
  'Procedures',
];

const ClinicAmbience = ({ onOpenAppointmentModal }) => {
  const [activeTab, setActiveTab] = useState('All Spaces');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeTab === 'All Spaces'
    ? CLINIC_AMBIENCE
    : CLINIC_AMBIENCE.filter((item) => {
        if (activeTab === 'Reception & Lounge') {
          return item.category === 'Reception' || item.category === 'Waiting Lounge' || item.category === 'Exterior';
        }
        return item.category.toLowerCase().includes(activeTab.toLowerCase());
      });

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <section className="section clinic-ambience-section" id="clinic-ambience">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge teal">PHYSICAL CLINIC TOUR</span>
          <h2 className="section-title">Our Clinic Ambience</h2>
          <p className="section-description mx-auto" style={{ maxWidth: '700px' }}>
            Experience patient-centered care in a hygienic, modern, and warmly designed clinical environment situated conveniently in JP Nagar, Mysuru.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="ambience-filter-bar">
          {AMBIENCE_CATEGORIES.map((tab) => (
            <button
              key={tab}
              className={`ambience-filter-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Ambience Gallery Grid */}
        <div className="ambience-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="ambience-card"
              onClick={() => setSelectedImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(item)}
            >
              <div className="ambience-img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="ambience-img"
                  loading="lazy"
                />
                <div className="ambience-card-overlay">
                  <span className="ambience-expand-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <polyline points="9 21 3 21 3 15"></polyline>
                      <line x1="21" y1="3" x2="14" y2="10"></line>
                      <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
                  </span>
                  <span className="ambience-overlay-title">{item.title}</span>
                </div>
                <span className="ambience-badge">{item.badge}</span>
              </div>

              <div className="ambience-card-caption">
                <h4 className="ambience-title">{item.title}</h4>
                <p className="ambience-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Clinic Visit Callout Card */}
        <div className="ambience-visit-card">
          <div className="ambience-visit-info">
            <div className="ambience-visit-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Visit Us in JP Nagar, Mysuru</span>
            </div>
            <h3 className="ambience-visit-heading">Dr. Shashi's Ortho Clinic</h3>
            <p className="ambience-visit-address">
              {CLINIC_INFO.address.full}
            </p>
            <div className="ambience-visit-hours">
              <span className="hours-dot" />
              <span>Consultation Hours: <strong>{CLINIC_INFO.timings.evening}</strong> (Monday – Saturday)</span>
            </div>
          </div>

          <div className="ambience-visit-actions">
            <button
              className="btn btn-primary btn-md"
              onClick={onOpenAppointmentModal}
            >
              Book Appointment
            </button>
            <a
              href={CLINIC_INFO.address.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-md"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Preview */}
      {selectedImage && (
        <div className="ambience-lightbox-backdrop" onClick={() => setSelectedImage(null)}>
          <div className="ambience-lightbox-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="ambience-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close Preview"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="ambience-lightbox-view">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="ambience-lightbox-img"
              />
              <button
                className="ambience-lightbox-nav prev"
                onClick={handlePrev}
                aria-label="Previous image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                className="ambience-lightbox-nav next"
                onClick={handleNext}
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            <div className="ambience-lightbox-footer">
              <div className="ambience-lightbox-meta">
                <span className="ambience-lightbox-badge">{selectedImage.badge}</span>
                <h4>{selectedImage.title}</h4>
                <p>{selectedImage.description}</p>
              </div>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => {
                  setSelectedImage(null);
                  if (onOpenAppointmentModal) onOpenAppointmentModal();
                }}
              >
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ClinicAmbience;
