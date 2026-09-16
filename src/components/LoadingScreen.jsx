import React, { useState, useEffect, useRef } from 'react';

const TOTAL_DURATION_MS = 3000; // Exactly 3 seconds

const LoadingScreen = ({ onComplete }) => {
  const [elapsedMs, setElapsedMs] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const startTimeRef = useRef(Date.now());
  const rafRef = useRef(null);

  const finishAnimation = () => {
    setIsFadingOut(true);
    try {
      sessionStorage.setItem('ortho_clinic_intro_seen', 'true');
    } catch (e) {
      // sessionStorage might be restricted
    }
    setTimeout(() => {
      setIsCompleted(true);
      if (onComplete) onComplete();
    }, 600);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        finishAnimation();
      }, 800);
      return () => clearTimeout(timer);
    }

    startTimeRef.current = Date.now();

    const updateTimer = () => {
      const now = Date.now();
      const currentElapsed = now - startTimeRef.current;

      if (currentElapsed >= TOTAL_DURATION_MS) {
        setElapsedMs(TOTAL_DURATION_MS);
        finishAnimation();
      } else {
        setElapsedMs(currentElapsed);
        rafRef.current = requestAnimationFrame(updateTimer);
      }
    };

    rafRef.current = requestAnimationFrame(updateTimer);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (isCompleted) return null;

  const seconds = elapsedMs / 1000;
  const progressPercent = Math.min(100, (elapsedMs / TOTAL_DURATION_MS) * 100);

  // Dynamic 3-second status messages
  let statusText = 'Restoring Mobility & Strength...';
  if (seconds >= 1.0 && seconds < 2.0) {
    statusText = 'Advanced Orthopedic & Sports Care...';
  } else if (seconds >= 2.0) {
    statusText = 'Welcome to Dr. Shashi’s Ortho Clinic';
  }

  return (
    <div
      className={`loading-screen-overlay ${isFadingOut ? 'fading-out' : ''}`}
      role="dialog"
      aria-label="Welcome Loading Animation"
    >
      {/* Skip Button */}
      <button
        className="loading-skip-btn"
        onClick={finishAnimation}
        aria-label="Skip loading animation"
      >
        <span>Skip</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Top Clinic Branding */}
      <div className="loading-brand-header">
        <div className="loading-brand-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 8v8"></path>
            <path d="M8 12h8"></path>
          </svg>
        </div>
        <h1 className="loading-brand-title">
          Dr. SHASHI'S <span>ORTHO CLINIC</span>
        </h1>
        <div className="loading-brand-sub">
          ADVANCED KNEE, SHOULDER & JOINT CARE • MYSURU
        </div>
      </div>

      {/* Moving Wheelchair Track Stage (Left to Right over 3s) */}
      <div className="wheelchair-stage-wrapper">
        <div className="wheelchair-track-container">
          {/* Floating Medical Sparkles */}
          <div className="floating-sparkle sparkle-1">✦</div>
          <div className="floating-sparkle sparkle-2">✚</div>
          <div className="floating-sparkle sparkle-3">✦</div>

          {/* Heartbeat / ECG Wave Track */}
          <svg className="track-pulse-wave" viewBox="0 0 800 40" preserveAspectRatio="none">
            <path d="M0,20 L200,20 L210,10 L220,30 L230,5 L240,35 L250,20 L500,20 L510,12 L520,28 L530,6 L540,32 L550,20 L800,20" />
          </svg>

          {/* Runway Floor Line */}
          <div className="track-floor-line"></div>

          {/* The Moving Wheelchair Actor (Animated Left to Right) */}
          <div className="wheelchair-moving-actor">
            {/* Speed Motion Lines */}
            <div className="wheelchair-speed-trails">
              <div className="speed-line"></div>
              <div className="speed-line"></div>
              <div className="speed-line"></div>
            </div>

            {/* SVG Wheelchair with Patient */}
            <svg viewBox="0 0 120 110" width="100%" height="100%">
              {/* Wheelchair Frame (Metallic Blue/Gray) */}
              <path
                d="M24,40 L44,40 L40,78 L78,78 L82,90"
                fill="none"
                stroke="#0f62fe"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Backrest Cushion */}
              <path
                d="M44,40 L42,66"
                stroke="#00a389"
                strokeWidth="7"
                strokeLinecap="round"
              />
              {/* Seat Cushion */}
              <path
                d="M40,68 L70,68"
                stroke="#00a389"
                strokeWidth="7"
                strokeLinecap="round"
              />
              {/* Footrest Extension */}
              <path
                d="M74,78 L82,90 L90,90"
                stroke="#1e293b"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />

              {/* Patient / Rider Figure */}
              <g className="wheelchair-passenger">
                {/* Head */}
                <circle cx="56" cy="22" r="11" fill="#f6ad55" />
                {/* Athletic Headband & Hair */}
                <path d="M47,18 Q56,11 65,18" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" fill="none" />
                <path d="M45,21 Q56,18 67,21" stroke="#0f62fe" strokeWidth="3" fill="none" />
                {/* Smile & Eye */}
                <circle cx="61" cy="22" r="1.5" fill="#1e293b" />
                <path d="M58,26 Q62,29 65,26" stroke="#1e293b" strokeWidth="1.2" strokeLinecap="round" fill="none" />

                {/* Torso */}
                <path d="M48,34 Q56,32 64,34 L62,64 L46,64 Z" fill="#00a389" />
                {/* Arm pushing wheel/holding armrest */}
                <path d="M52,42 Q40,58 38,72" stroke="#f6ad55" strokeWidth="5.5" strokeLinecap="round" fill="none" />

                {/* Thigh & Leg resting on footrest */}
                <path d="M46,64 L72,64 Q78,74 82,88" stroke="#1e293b" strokeWidth="6.5" strokeLinecap="round" fill="none" />
                {/* Sneaker */}
                <path d="M82,88 L92,89" stroke="#0f62fe" strokeWidth="5" strokeLinecap="round" />
              </g>

              {/* Push Handles at Back */}
              <path d="M38,40 L30,40" stroke="#64748b" strokeWidth="3.5" strokeLinecap="round" />

              {/* Large Main Wheel (Spinning Spokes) */}
              <g className="wheel-rotating-large">
                <circle cx="38" cy="84" r="24" stroke="#0f62fe" strokeWidth="4" fill="none" />
                <circle cx="38" cy="84" r="19" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,3" fill="none" />
                <circle cx="38" cy="84" r="5" fill="#0f62fe" />
                {/* Rotating Spokes */}
                <line x1="38" y1="60" x2="38" y2="108" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="14" y1="84" x2="62" y2="84" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="21" y1="67" x2="55" y2="101" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="21" y1="101" x2="55" y2="67" stroke="#94a3b8" strokeWidth="1.5" />
              </g>

              {/* Small Front Castor Wheel (Spinning) */}
              <g className="wheel-rotating-small">
                <circle cx="82" cy="93" r="8" stroke="#0f62fe" strokeWidth="3" fill="#ffffff" />
                <circle cx="82" cy="93" r="3" fill="#0f62fe" />
                <line x1="82" y1="85" x2="82" y2="101" stroke="#94a3b8" strokeWidth="1.2" />
                <line x1="74" y1="93" x2="90" y2="93" stroke="#94a3b8" strokeWidth="1.2" />
              </g>
            </svg>
          </div>
        </div>

        {/* Story Status Text */}
        <div className="wheelchair-status-caption">
          <p key={statusText} className="wheelchair-status-text">
            {statusText}
          </p>
        </div>
      </div>

      {/* 3-Second Progress Bar at Bottom */}
      <div className="loading-progress-section">
        <div className="progress-info-row">
          <span>Preparing clinic experience...</span>
          <span>{Math.round(progressPercent)}%</span>
        </div>
        <div className="progress-track-bar">
          <div
            className="progress-fill-bar"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
