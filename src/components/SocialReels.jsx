import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/doctorData';

const SINGLE_REEL = {
  id: 'reel-featured',
  author: 'dr.shashi_ortho_clinic',
  authorAudio: 'Original audio',
  badge: 'Featured Reel',
  title: 'KNEE & SHOULDER RECOVERY',
  subtitle: 'Clinical Case & Patient Mobility Insights',
  likes: '340+ likes',
  reelUrl: 'https://www.instagram.com/reel/Dc3az8UzHOo/?stkn=MXQxYmFleTQ3c3J6Yg==',
  embedUrl: 'https://www.instagram.com/reel/Dc3az8UzHOo/embed/',
};

const SocialReels = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="social-reels-section" id="social-reels" aria-label="Featured Instagram Reel">
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

        {/* Single Centered Reel Showcase */}
        <div className="single-reel-wrapper">
          <div className="reel-card single-reel-card">
            {/* Instagram Profile Header */}
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
                  <span className="reel-author-name">{SINGLE_REEL.author}</span>
                  <span className="reel-author-audio">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                    {SINGLE_REEL.authorAudio}
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

            {/* Reel Video Area: Shows In-Place Video Player or Preview Card */}
            {isPlaying ? (
              <div className="reel-live-player">
                <iframe
                  src={SINGLE_REEL.embedUrl}
                  title="Dr. Shashi's Ortho Clinic Instagram Reel"
                  allowFullScreen
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="reel-inline-iframe"
                />
              </div>
            ) : (
              <div
                className="reel-screen single-reel-screen"
                onClick={() => setIsPlaying(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setIsPlaying(true);
                }}
                aria-label={`Play Reel: ${SINGLE_REEL.title}`}
              >
                <div className="reel-screen-overlay" />

                {/* Clinic Watermark */}
                <div className="reel-watermark">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#ffffff' }}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v8"></path>
                    <path d="M8 12h8"></path>
                  </svg>
                </div>

                <div className="reel-screen-content">
                  <div className="reel-play-btn single-reel-play-btn" aria-hidden="true">
                    <svg width="26" height="26" viewBox="0 0 24 24">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>

                  <span className="reel-tap-badge">TAP TO PLAY</span>
                  <div className="reel-video-title single-reel-title">{SINGLE_REEL.title}</div>
                  <div className="reel-video-tag single-reel-tag">{SINGLE_REEL.subtitle}</div>
                  <span className="reel-episode-pill">{SINGLE_REEL.badge}</span>
                </div>
              </div>
            )}

            {/* Instagram Card Bottom Interactions */}
            <div className="reel-footer">
              <div className="reel-actions-row">
                <div className="reel-actions-left">
                  {/* Heart */}
                  <a
                    href={SINGLE_REEL.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reel-action-icon heart"
                    title="Like Reel on Instagram"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </a>

                  {/* Comment */}
                  <a
                    href={SINGLE_REEL.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reel-action-icon"
                    title="Comment on Instagram"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </a>

                  {/* Share */}
                  <a
                    href={SINGLE_REEL.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reel-action-icon"
                    title="Share on Instagram"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </a>
                </div>

                {/* Bookmark */}
                <a
                  href={SINGLE_REEL.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reel-action-icon bookmark"
                  title="Save on Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </a>
              </div>

              <div className="reel-likes-count">{SINGLE_REEL.likes}</div>

              <a
                href={SINGLE_REEL.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="reel-comment-input"
                title="Open Reel on Instagram"
              >
                <span>Add a comment...</span>
                <span role="img" aria-label="comment">💬</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dual Actions: Watch on Instagram & Follow Profile */}
        <div className="social-reels-cta-wrap">
          <a
            href={SINGLE_REEL.reelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-reel-watch"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Watch Full Reel on Instagram
          </a>

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
    </section>
  );
};

export default SocialReels;
