import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/doctorData';

const REELS_DATA = [
  {
    id: 'reel-1',
    author: 'dr.shashi_ortho_clinic',
    authorAudio: 'Original audio',
    badge: 'Featured Reel',
    title: 'KNEE & SHOULDER CARE',
    subtitle: 'Clinical Surgery & Recovery Insights',
    likes: '130 likes',
    reelUrl: 'https://www.instagram.com/reel/Dc3az8UzHOo/?stkn=MXQxYmFleTQ3c3J6Yg==',
    isPrimary: true,
  },
  {
    id: 'reel-2',
    author: 'dr.shashi_ortho_clinic',
    authorAudio: 'Original audio',
    badge: 'Episode - 02',
    title: 'ROBOTIC JOINT REPLACEMENT',
    subtitle: 'Pain-Free Walking After Knee Surgery',
    likes: '270 likes',
    reelUrl: 'https://www.instagram.com/reel/Dc3az8UzHOo/?stkn=MXQxYmFleTQ3c3J6Yg==',
  },
  {
    id: 'reel-3',
    author: 'dr.shashi_ortho_clinic',
    authorAudio: 'Original audio',
    badge: 'Episode - 03',
    title: 'KEYHOLE ARTHROSCOPY',
    subtitle: 'Ligament Tear & Sports Recovery',
    likes: '232 likes',
    reelUrl: 'https://www.instagram.com/reel/Dc3az8UzHOo/?stkn=MXQxYmFleTQ3c3J6Yg==',
  },
  {
    id: 'reel-4',
    author: 'dr.shashi_ortho_clinic',
    authorAudio: 'Original audio',
    badge: 'Episode - 04',
    title: 'PATIENT MOBILITY STORIES',
    subtitle: 'Back to Active Life & Pain Relief',
    likes: '109 likes',
    reelUrl: 'https://www.instagram.com/reel/Dc3az8UzHOo/?stkn=MXQxYmFleTQ3c3J6Yg==',
  },
];

const SocialReels = () => {
  const [activeReel, setActiveReel] = useState(null);

  const openReelModal = (reel) => {
    setActiveReel(reel);
  };

  const closeReelModal = () => {
    setActiveReel(null);
  };

  return (
    <section className="social-reels-section" id="social-reels" aria-label="Social Media & Instagram Reels">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge teal">POST-SURGERY HAPPINESS</span>
          <h2 className="section-title">
            Our Happy <span className="highlight">Clients</span>
          </h2>
          <p className="section-description">
            Real moments, real smiles—patients walking pain-free after surgery with Dr. Shashikumar M S.
          </p>
        </div>

        {/* Reels 4-Column Grid */}
        <div className="reels-grid">
          {REELS_DATA.map((reel) => (
            <div key={reel.id} className="reel-card">
              {/* Instagram Card Header */}
              <div className="reel-header">
                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reel-author-info"
                  title="View Instagram Profile"
                >
                  <div className="reel-author-avatar">DS</div>
                  <div className="reel-author-text">
                    <span className="reel-author-name">{reel.author}</span>
                    <span className="reel-author-audio">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                      </svg>
                      {reel.authorAudio}
                    </span>
                  </div>
                </a>

                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reel-view-profile-btn"
                >
                  View profile
                </a>
              </div>

              {/* Reel Video Screen Area */}
              <div
                className="reel-screen"
                onClick={() => openReelModal(reel)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') openReelModal(reel);
                }}
                aria-label={`Watch Reel: ${reel.title}`}
              >
                <div className="reel-screen-overlay" />

                {/* Subtle Clinic Logo Watermark */}
                <div className="reel-watermark">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#ffffff' }}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v8"></path>
                    <path d="M8 12h8"></path>
                  </svg>
                </div>

                <div className="reel-screen-content">
                  <div className="reel-play-btn" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>

                  <span className="reel-tap-badge">TAP TO PLAY</span>
                  <div className="reel-video-title">{reel.title}</div>
                  <div className="reel-video-tag">{reel.subtitle}</div>
                  <span className="reel-episode-pill">{reel.badge}</span>
                </div>
              </div>

              {/* Instagram Card Bottom Interactions */}
              <div className="reel-footer">
                <div className="reel-actions-row">
                  <div className="reel-actions-left">
                    {/* Heart Like */}
                    <button
                      type="button"
                      className="reel-action-icon heart"
                      title="Like Reel"
                      onClick={() => window.open(reel.reelUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </button>

                    {/* Comment Bubble */}
                    <button
                      type="button"
                      className="reel-action-icon"
                      title="Comment on Instagram"
                      onClick={() => window.open(reel.reelUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </button>

                    {/* Share / Link */}
                    <button
                      type="button"
                      className="reel-action-icon"
                      title="Share Reel"
                      onClick={() => window.open(reel.reelUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </button>
                  </div>

                  {/* Bookmark Ribbon */}
                  <button
                    type="button"
                    className="reel-action-icon bookmark"
                    title="Save Reel"
                    onClick={() => window.open(reel.reelUrl, '_blank', 'noopener,noreferrer')}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </button>
                </div>

                <div className="reel-likes-count">{reel.likes}</div>

                <div
                  className="reel-comment-input"
                  onClick={() => window.open(reel.reelUrl, '_blank', 'noopener,noreferrer')}
                >
                  <span>Add a comment...</span>
                  <span role="img" aria-label="smiley">💬</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow on Instagram CTA Button */}
        <div className="social-reels-cta-wrap">
          <a
            href={CLINIC_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-instagram-follow"
            id="instagram-follow-btn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @{CLINIC_INFO.instagramHandle || 'dr.shashi_ortho_clinic'}
          </a>
        </div>
      </div>

      {/* Modal Reel Video Player */}
      {activeReel && (
        <div className="reel-modal-backdrop" onClick={closeReelModal}>
          <div className="reel-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="reel-modal-close-btn"
              onClick={closeReelModal}
              aria-label="Close Reel Modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="reel-modal-iframe-wrap">
              <iframe
                src="https://www.instagram.com/reel/Dc3az8UzHOo/embed/"
                title="Instagram Reel"
                allowFullScreen
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>

            <div className="reel-modal-footer">
              <span className="reel-modal-footer-title">{activeReel.title}</span>
              <a
                href={activeReel.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="reel-modal-open-link"
              >
                Watch on Instagram
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SocialReels;
