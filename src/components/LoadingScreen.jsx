import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // 1200ms display time matching Sainik Hospital reference
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      const finishTimer = setTimeout(() => {
        setIsCompleted(true);
        if (onComplete) onComplete();
      }, 400); // 400ms smooth fade-out transition

      return () => clearTimeout(finishTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (isCompleted) return null;

  return (
    <div
      className={`hospital-loader-overlay ${isFadingOut ? 'fading-out' : ''}`}
      role="status"
      aria-label="Loading Dr. Shashi's Ortho Clinic"
    >
      <div className="loader-content-wrapper text-center">
        {/* Emblem Box with gentle breathing pulse */}
        <div className="loader-svg-box">
          <img
            src={`${process.env.PUBLIC_URL || ''}/assets/images/ortho-loader-emblem.png`}
            alt="Dr. Shashi's Ortho Clinic Official Emblem"
            className="loader-emblem-img"
          />
        </div>

        {/* Clinic Brand Name */}
        <h3 className="loader-brand-title fw-bold">
          Dr. SHASHI'S <span>ORTHO CLINIC</span>
        </h3>

        {/* Subtitle / Department */}
        <p className="loader-brand-subtitle text-uppercase text-muted">
          CENTRE FOR ADVANCED ORTHOPAEDICS
        </p>

        {/* Slim Animated Progress Bar */}
        <div className="loader-progress-bar-bg">
          <div className="loader-progress-bar-fill" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
