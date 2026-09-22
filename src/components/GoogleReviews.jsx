import React, { useRef } from 'react';
import { VERIFIED_GOOGLE_REVIEWS, CLINIC_INFO } from '../data/doctorData';

const GoogleReviews = () => {
  const trackRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (trackRef.current) {
      const card = trackRef.current.querySelector('.google-review-card');
      const gap = 20;
      const scrollDistance = card ? card.offsetWidth + gap : 360;
      trackRef.current.scrollBy({
        left: direction * scrollDistance,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="google-reviews-section" id="patient-reviews" aria-labelledby="google-reviews-title">
      <div className="container">
        {/* Top bar */}
        <div className="google-reviews-topbar">
          <div>
            <div className="google-mark-pill">
              <span className="google-g-icon">G</span>
              <span>Google Verified Reviews</span>
            </div>
            <h2 className="section-title" id="google-reviews-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>
              What Patients Say About Dr. Shashikumar M S
            </h2>
            <p className="section-description" style={{ textAlign: 'left', maxWidth: '640px' }}>
              Real clinical feedback from patients and families treated for joint pain, sports injuries, knee & shoulder arthroscopy, robotic replacements, and fracture recovery.
            </p>
          </div>

          <div className="google-rating-summary-card" aria-label="Google reviews summary">
            <div className="google-rating-score">5.0</div>
            <div>
              <div className="google-stars" aria-label="5 stars out of 5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="google-rating-label">Google Rating &bull; Verified Reviews</p>
            </div>
          </div>
        </div>

        {/* Doctor Philosophy & Consultation Location Cards */}
        <div className="google-meta-cards">
          <div className="google-meta-card">
            <h3 className="google-meta-title">Clinical Philosophy</h3>
            <p className="google-meta-quote">
              "We combine advanced surgical precision with localized, empathetic patient care. Every treatment plan is uniquely tailored to preserve natural joints and ensure accelerated, sustainable recovery."
            </p>
            <p className="google-meta-text">
              Dr. Shashikumar M S is a fellowship-trained orthopedic consultant known for high-volume arthroscopy, robotic total and partial knee replacement, and patient-first conservative management at premier centers across Karnataka.
            </p>
          </div>

          <div className="google-meta-card">
            <h3 className="google-meta-title">Where to Consult</h3>
            <p className="google-meta-text" style={{ fontWeight: 700, color: '#17314c', marginBottom: '4px' }}>
              {CLINIC_INFO.name} (JP Nagar, Mysuru)
            </p>
            <p className="google-meta-text" style={{ marginBottom: '12px' }}>
              {CLINIC_INFO.address.full}
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
              <span className="google-treatment-tag">OPD Consultations</span>
              <span className="google-treatment-tag">Second Opinions</span>
              <span className="google-treatment-tag">Non-Surgical Joint Preservation</span>
              <span className="google-treatment-tag">JSS Hospital Mysore</span>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="google-reviews-carousel-wrap">
          <div className="google-reviews-track" ref={trackRef}>
            {VERIFIED_GOOGLE_REVIEWS.map((rev) => (
              <article key={rev.id} className="google-review-card">
                <div className="google-review-header">
                  <div className="google-review-author-wrap">
                    <div className="google-avatar">{rev.initials}</div>
                    <div>
                      <h4 className="google-author-name">{rev.author}</h4>
                      <p className="google-review-date">{rev.source} &bull; {rev.date}</p>
                    </div>
                  </div>
                  <div className="google-stars" style={{ margin: 0 }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                </div>

                <span className="google-treatment-tag">{rev.treatment}</span>

                <p className="google-review-body">
                  "{rev.fullReview}"
                </p>
              </article>
            ))}
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="google-carousel-nav" aria-label="Review carousel navigation">
            <button
              type="button"
              className="google-nav-btn"
              onClick={() => scrollCarousel(-1)}
              aria-label="Previous review"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              type="button"
              className="google-nav-btn"
              onClick={() => scrollCarousel(1)}
              aria-label="Next review"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Review Actions */}
        <div className="google-actions-bar">
          <a
            href={CLINIC_INFO.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="google-action-btn primary"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Read Google Reviews
          </a>

          <a
            href={CLINIC_INFO.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="google-action-btn secondary"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            Write a Patient Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
