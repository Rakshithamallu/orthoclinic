import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/anatomy.css';

const BODY_PARTS = [
  {
    id: 'shoulder-l',
    name: 'Shoulder',
    x: 23, y: 22,
    color: '#0f62fe', colorLight: '#edf5ff',
    treatment: 'Shoulder Arthroscopy',
    path: '/treatments/shoulder',
    conditions: ['Rotator Cuff Tear', 'SLAP Lesion', 'Shoulder Impingement', 'AC Joint Injury'],
    desc: 'Minimally invasive keyhole surgery for shoulder pain, tears and sports injuries with rapid recovery.',
  },
  {
    id: 'shoulder-r',
    name: 'Shoulder',
    x: 77, y: 22,
    color: '#0f62fe', colorLight: '#edf5ff',
    treatment: 'Shoulder Arthroscopy',
    path: '/treatments/shoulder',
    conditions: ['Rotator Cuff Tear', 'SLAP Lesion', 'Shoulder Impingement', 'AC Joint Injury'],
    desc: 'Minimally invasive keyhole surgery for shoulder pain, tears and sports injuries with rapid recovery.',
  },
  {
    id: 'elbow-l',
    name: 'Elbow',
    x: 14, y: 40,
    color: '#f97316', colorLight: '#fff7ed',
    treatment: 'Trauma & Fracture Care',
    path: '/treatments/trauma-fracture',
    conditions: ['Tennis Elbow', 'Olecranon Fracture', 'Radial Head Injury', 'Elbow Dislocation'],
    desc: 'Expert fracture fixation and reconstruction for elbow injuries sustained in sports and accidents.',
  },
  {
    id: 'elbow-r',
    name: 'Elbow',
    x: 86, y: 40,
    color: '#f97316', colorLight: '#fff7ed',
    treatment: 'Trauma & Fracture Care',
    path: '/treatments/trauma-fracture',
    conditions: ['Tennis Elbow', 'Olecranon Fracture', 'Radial Head Injury', 'Elbow Dislocation'],
    desc: 'Expert fracture fixation and reconstruction for elbow injuries sustained in sports and accidents.',
  },
  {
    id: 'spine',
    name: 'Spine',
    x: 50, y: 37,
    color: '#7c3aed', colorLight: '#f5f3ff',
    treatment: 'Conservative Spine Care',
    path: '/treatments/spine',
    conditions: ['Disc Herniation', 'Cervical Spondylosis', 'Low Back Pain', 'Sciatica'],
    desc: 'Evidence-based conservative spine management using targeted physiotherapy and minimally invasive interventions.',
  },
  {
    id: 'hip-l',
    name: 'Hip',
    x: 35, y: 51,
    color: '#dc2626', colorLight: '#fef2f2',
    treatment: 'Robotic Joint Replacement',
    path: '/treatments/joint-replacement',
    conditions: ['Hip Arthritis', 'Avascular Necrosis', 'Hip Fracture', 'Hip Dysplasia'],
    desc: 'Robotic-assisted total hip replacement for precise implant positioning, faster recovery and lasting results.',
  },
  {
    id: 'hip-r',
    name: 'Hip',
    x: 65, y: 51,
    color: '#dc2626', colorLight: '#fef2f2',
    treatment: 'Robotic Joint Replacement',
    path: '/treatments/joint-replacement',
    conditions: ['Hip Arthritis', 'Avascular Necrosis', 'Hip Fracture', 'Hip Dysplasia'],
    desc: 'Robotic-assisted total hip replacement for precise implant positioning, faster recovery and lasting results.',
  },
  {
    id: 'knee-l',
    name: 'Knee',
    x: 35, y: 71,
    color: '#00a389', colorLight: '#e6f7f4',
    treatment: 'Knee Arthroscopy & Replacement',
    path: '/treatments/knee',
    conditions: ['ACL Tear', 'Meniscus Injury', 'Knee Arthritis', 'Patellar Instability'],
    desc: 'From keyhole ACL reconstruction to robotic knee replacement — comprehensive care for all ages.',
  },
  {
    id: 'knee-r',
    name: 'Knee',
    x: 65, y: 71,
    color: '#00a389', colorLight: '#e6f7f4',
    treatment: 'Knee Arthroscopy & Replacement',
    path: '/treatments/knee',
    conditions: ['ACL Tear', 'Meniscus Injury', 'Knee Arthritis', 'Patellar Instability'],
    desc: 'From keyhole ACL reconstruction to robotic knee replacement — comprehensive care for all ages.',
  },
  {
    id: 'ankle-l',
    name: 'Ankle & Foot',
    x: 34, y: 88,
    color: '#f59e0b', colorLight: '#fffbeb',
    treatment: 'Ankle & Foot Care',
    path: '/treatments/ankle-foot',
    conditions: ['Ankle Ligament Tear', 'Achilles Rupture', 'Plantar Fasciitis', 'Ankle Fracture'],
    desc: 'Arthroscopic and surgical care for ankle instability, Achilles tendon and sports-related foot conditions.',
  },
  {
    id: 'ankle-r',
    name: 'Ankle & Foot',
    x: 66, y: 88,
    color: '#f59e0b', colorLight: '#fffbeb',
    treatment: 'Ankle & Foot Care',
    path: '/treatments/ankle-foot',
    conditions: ['Ankle Ligament Tear', 'Achilles Rupture', 'Plantar Fasciitis', 'Ankle Fracture'],
    desc: 'Arthroscopic and surgical care for ankle instability, Achilles tendon and sports-related foot conditions.',
  },
];

// Unique parts for the quick-select pills
const UNIQUE_PARTS = BODY_PARTS.filter(
  (v, i, a) => a.findIndex(t => t.name === v.name) === i
);

const AnatomyInteractive = ({ onOpenAppointmentModal }) => {
  const [active, setActive] = useState(null);

  const handleClick = (part) => {
    setActive(prev => prev?.id === part.id ? null : part);
  };

  return (
    <section className="anatomy-section section section-subtle">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            Interactive Anatomy
          </span>
          <h2 className="section-title">Click a Body Part to Explore</h2>
          <p className="section-description">
            Tap any glowing point on the body to discover the conditions treated and procedures offered by Dr. Shashi.
          </p>
        </div>

        {/* Main Two-Column Layout */}
        <div className="anatomy-layout">

          {/* ── LEFT: Body Figure ── */}
          <div className="anatomy-figure-wrapper">
            {/* SVG Human Body (front view) */}
            <svg
              className="anatomy-body-svg"
              viewBox="0 0 280 620"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="bodyFill" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dbeafe" />
                  <stop offset="100%" stopColor="#bfdbfe" />
                </linearGradient>
                <filter id="bodyGlow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* ── Head ── */}
              <ellipse cx="140" cy="50" rx="36" ry="42"
                fill="url(#bodyFill)" stroke="#93c5fd" strokeWidth="1.5" />

              {/* ── Neck ── */}
              <path d="M124 89 Q124 112 140 114 Q156 112 156 89 Z"
                fill="url(#bodyFill)" stroke="#93c5fd" strokeWidth="1.5" />

              {/* ── Torso ── */}
              <path d="M68 118 Q58 145 55 185 Q53 220 58 250
                       Q63 272 72 290 Q78 302 85 308
                       L195 308 Q202 302 208 290 Q217 272 222 250
                       Q227 220 225 185 Q222 145 212 118
                       Q190 108 140 108 Q90 108 68 118 Z"
                fill="url(#bodyFill)" stroke="#93c5fd" strokeWidth="1.5" />

              {/* ── Left Upper Arm ── */}
              <path d="M68 125 Q48 148 36 182 Q28 208 32 230
                       Q35 245 42 255 L58 248 Q52 238 50 222
                       Q46 200 54 176 Q62 150 78 138 Z"
                fill="url(#bodyFill)" stroke="#93c5fd" strokeWidth="1.5" />

              {/* ── Left Forearm ── */}
              <path d="M42 255 Q32 275 30 300 Q28 322 34 338
                       Q39 348 48 352 L62 344 Q53 340 48 328
                       Q43 312 45 290 Q47 268 58 250 Z"
                fill="url(#bodyFill)" stroke="#93c5fd" strokeWidth="1.5" />

              {/* ── Left Hand ── */}
              <ellipse cx="46" cy="364" rx="16" ry="22"
                fill="url(#bodyFill)" stroke="#93c5fd" strokeWidth="1.5" />

              {/* ── Right Upper Arm ── */}
              <path d="M212 125 Q232 148 244 182 Q252 208 248 230
                       Q245 245 238 255 L222 248 Q228 238 230 222
                       Q234 200 226 176 Q218 150 202 138 Z"
                fill="url(#bodyFill)" stroke="#93c5fd" strokeWidth="1.5" />

              {/* ── Right Forearm ── */}
              <path d="M238 255 Q248 275 250 300 Q252 322 246 338
                       Q241 348 232 352 L218 344 Q227 340 232 328
                       Q237 312 235 290 Q233 268 222 250 Z"
                fill="url(#bodyFill)" stroke="#93c5fd" strokeWidth="1.5" />

              {/* ── Right Hand ── */}
              <ellipse cx="234" cy="364" rx="16" ry="22"
                fill="url(#bodyFill)" stroke="#93c5fd" strokeWidth="1.5" />

              {/* ── Left Thigh ── */}
              <path d="M85 308 Q74 348 74 385 Q74 418 80 442
                       Q85 458 92 466 L112 462 Q106 454 100 438
                       Q94 416 94 384 Q94 347 106 310 Z"
                fill="url(#bodyFill)" stroke="#93c5fd" strokeWidth="1.5" />

              {/* ── Left Shin ── */}
              <path d="M92 466 Q84 498 84 530 Q84 555 90 570
                       Q95 580 104 582 L118 578 Q110 576 106 566
                       Q100 552 100 529 Q100 498 108 466 Z"
                fill="url(#bodyFill)" stroke="#93c5fd" strokeWidth="1.5" />

              {/* ── Left Foot ── */}
              <path d="M92 582 Q84 590 82 598 Q82 608 108 610
                       Q120 608 122 600 Q120 590 116 582 Z"
                fill="url(#bodyFill)" stroke="#93c5fd" strokeWidth="1.5" />

              {/* ── Right Thigh ── */}
              <path d="M195 308 Q206 348 206 385 Q206 418 200 442
                       Q195 458 188 466 L168 462 Q174 454 180 438
                       Q186 416 186 384 Q186 347 174 310 Z"
                fill="url(#bodyFill)" stroke="#93c5fd" strokeWidth="1.5" />

              {/* ── Right Shin ── */}
              <path d="M188 466 Q196 498 196 530 Q196 555 190 570
                       Q185 580 176 582 L162 578 Q170 576 174 566
                       Q180 552 180 529 Q180 498 172 466 Z"
                fill="url(#bodyFill)" stroke="#93c5fd" strokeWidth="1.5" />

              {/* ── Right Foot ── */}
              <path d="M188 582 Q196 590 198 598 Q198 608 172 610
                       Q160 608 158 600 Q160 590 164 582 Z"
                fill="url(#bodyFill)" stroke="#93c5fd" strokeWidth="1.5" />

              {/* ── Spine Detail Line ── */}
              <path d="M140 118 Q138 160 140 230 Q142 260 140 295"
                fill="none" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />

              {/* ── Rib Hint Lines ── */}
              {[148, 165, 182, 198].map((y, i) => (
                <g key={i} opacity="0.25">
                  <path d={`M140 ${y} Q118 ${y + 6} 102 ${y + 2}`} fill="none" stroke="#60a5fa" strokeWidth="1" />
                  <path d={`M140 ${y} Q162 ${y + 6} 178 ${y + 2}`} fill="none" stroke="#60a5fa" strokeWidth="1" />
                </g>
              ))}
            </svg>

            {/* ── Hotspot Dots (absolutely positioned) ── */}
            {BODY_PARTS.map(part => (
              <button
                key={part.id}
                className={`anatomy-hotspot${active?.id === part.id ? ' is-active' : ''}`}
                style={{
                  left: `${part.x}%`,
                  top: `${part.y}%`,
                  '--dot-color': part.color,
                }}
                onClick={() => handleClick(part)}
                aria-label={`Explore ${part.name} treatments`}
                title={part.name}
              >
                {/* Pulse rings */}
                <span className="hs-pulse hs-pulse-1" />
                <span className="hs-pulse hs-pulse-2" />
                {/* Inner dot */}
                <span className="hs-dot" />
                {/* Floating label tag when active */}
                {active?.id === part.id && (
                  <span className="hs-label-tag" style={{ '--dot-color': part.color }}>
                    {part.name}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* ── RIGHT: Info Panel ── */}
          <div className="anatomy-info-panel">
            {!active ? (
              /* Placeholder state */
              <div className="anatomy-placeholder">
                <div className="anatomy-ph-icon">
                  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3 className="anatomy-ph-title">Select a body part</h3>
                <p className="anatomy-ph-desc">
                  Tap any glowing dot on the body diagram to learn about the conditions and treatments available.
                </p>
                {/* Quick-select pills */}
                <div className="anatomy-pills">
                  {UNIQUE_PARTS.map(part => (
                    <button
                      key={part.id}
                      className="anatomy-pill"
                      style={{ '--dot-color': part.color }}
                      onClick={() => handleClick(part)}
                    >
                      <span className="anatomy-pill-dot" />
                      {part.name}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Active detail card */
              <div className="anatomy-detail-card" key={active.id}>
                {/* Header */}
                <div className="anatomy-detail-header" style={{ '--dot-color': active.color }}>
                  <div className="anatomy-header-dot" />
                  <div>
                    <h3 className="anatomy-part-title">{active.name}</h3>
                    <span className="anatomy-treatment-tag" style={{ '--dot-color': active.color, '--dot-light': active.colorLight }}>
                      {active.treatment}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="anatomy-desc">{active.desc}</p>

                {/* Conditions */}
                <div className="anatomy-conditions">
                  <span className="anatomy-conditions-heading">Common Conditions Treated:</span>
                  <div className="anatomy-conditions-grid">
                    {active.conditions.map((c, i) => (
                      <div key={i} className="anatomy-condition-item" style={{ animationDelay: `${i * 0.07}s` }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={active.color} strokeWidth="2.5" strokeLinecap="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {c}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="anatomy-cta-row">
                  <Link
                    to={active.path}
                    className="btn btn-primary btn-sm"
                    style={{ background: active.color, boxShadow: `0 4px 14px ${active.color}55` }}
                  >
                    View Treatment
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={onOpenAppointmentModal}
                  >
                    Book Consultation
                  </button>
                </div>

                {/* Close button */}
                <button
                  className="anatomy-close-btn"
                  onClick={() => setActive(null)}
                  aria-label="Close"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnatomyInteractive;
