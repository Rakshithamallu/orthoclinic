import React, { useState, useRef } from 'react';
import { CLINIC_INFO, DOCTOR_INFO } from '../data/doctorData';

const Hero = ({ onOpenAppointmentModal }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const toggleVideoMotion = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Dynamic Ambient Medical Video Background */}
      <div className="hero-video-container">
        <video
          ref={videoRef}
          className="hero-bg-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={`${process.env.PUBLIC_URL || ''}/assets/videos/ortho-care-ambient.webm`} type="video/webm" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      <div className="container">


        <div className="hero-grid">
          {/* Left Column: Storytelling & Action */}
          <div className="hero-content">


            <h1 className="hero-title">
              Move Better. <br />
              <span className="gradient-text">Live Better.</span>
            </h1>

            <h2 className="hero-subtitle">
              Expert Knee, Shoulder, Joint & Sports Injury Care
            </h2>

            {/* Doctor Credentials Card */}
            <div className="hero-doctor-card">
              <div className="hero-doctor-name">
                {DOCTOR_INFO.displayName}
                <span className="hero-doctor-deg">{DOCTOR_INFO.degrees}</span>
              </div>
              <div className="hero-doctor-role">
                {DOCTOR_INFO.role} • Dr. Shashi's Ortho Clinic & JSS Hospital
              </div>

              {/* Small Fellowship Badges */}
              <div className="hero-badges-wrapper">
                <span className="hero-fellowship-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Fellowship in Joint Replacement
                </span>
                <span className="hero-fellowship-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Fellowship in Arthroscopy & Sports Medicine
                </span>
                <span className="hero-fellowship-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Fellowship in Hand Trauma Surgery
                </span>
              </div>
            </div>

            <p className="hero-description">
              Dedicated to restoring active, painless mobility through specialized keyhole arthroscopic procedures, robotic joint replacement, precision fracture care, and tailored conservative rehabilitation in JP Nagar, Mysuru.
            </p>

            <div className="hero-cta-group">
              <button
                className="btn btn-primary btn-lg"
                onClick={onOpenAppointmentModal}
                id="hero-book-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Book an Appointment
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="hero-call-btn"
                title="Call Dr. Shashi's Ortho Clinic"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call +91-6361446411
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
