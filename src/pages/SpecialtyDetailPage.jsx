import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SPECIALTY_PAGES } from '../data/specialtyPagesData';
import { CLINIC_INFO, DOCTOR_INFO } from '../data/doctorData';
import '../styles/specialty-detail.css';

const BASE = process.env.PUBLIC_URL || '';

// Route alias map
const ALIAS_MAP = {
  'knee': 'knee',
  'hip': 'hip',
  'joint-replacement': 'hip',
  'shoulder': 'shoulder',
  'sports-trauma': 'sports-trauma',
  'trauma-fracture': 'sports-trauma',
  'elbow-trauma': 'sports-trauma',
};

const SpecialtyDetailPage = ({ onOpenAppointmentModal }) => {
  const { specialtyId, categoryId } = useParams();
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const resolvedId = ALIAS_MAP[(specialtyId || categoryId)?.toLowerCase()] || 'knee';
  const data = SPECIALTY_PAGES[resolvedId] || SPECIALTY_PAGES.knee;

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Filter procedures if category selected
  const categories = ['all', ...new Set(data.procedures.map((p) => p.category))];
  const filteredProcedures = activeTab === 'all'
    ? data.procedures
    : data.procedures.filter((p) => p.category === activeTab);

  // Other specialties for cross-linking
  const otherSpecialties = Object.values(SPECIALTY_PAGES).filter((s) => s.id !== data.id);

  return (
    <div className="specialty-detail-page">
      {/* 1. Hero Section */}
      <section className="spec-hero">
        <div className="container">
          <nav className="spec-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="spec-breadcrumb-sep">/</span>
            <Link to="/#specialties">Specialties</Link>
            <span className="spec-breadcrumb-sep">/</span>
            <span className="spec-breadcrumb-curr">{data.navTitle}</span>
          </nav>

          <div className="spec-hero-grid">
            <div className="spec-hero-content">
              <span className="spec-hero-badge">{data.badge}</span>
              <h1 className="spec-hero-title">{data.heroTitle}</h1>
              <p className="spec-hero-subtitle">{data.heroSubtitle}</p>

              <div className="spec-hero-ctas">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={onOpenAppointmentModal}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                  Book In-Clinic Evaluation
                </button>

                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  WhatsApp Doctor
                </a>
              </div>
            </div>

            <div className="spec-hero-image-wrap">
              <img
                src={data.image}
                alt={data.navTitle}
                className="spec-hero-img"
              />
              <div className="spec-hero-img-badge">
                <span className="dot pulse"></span>
                <span>Fellowship-Trained Precision</span>
              </div>
            </div>
          </div>

          {/* Metrics Ribbon */}
          <div className="spec-metrics-ribbon">
            {data.metrics.map((metric, idx) => (
              <div key={idx} className="spec-metric-card">
                <span className="spec-metric-value">{metric.value}</span>
                <span className="spec-metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Clinical Overview & Common Symptoms */}
      <section className="spec-section spec-symptoms-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge teal">DIAGNOSTIC CRITERIA</span>
            <h2 className="section-title">Common Symptoms & When to Consult</h2>
            <p className="section-description">
              {data.clinicalSummary} If you experience any of the clinical signs below, prompt evaluation prevents irreversible joint degradation.
            </p>
          </div>

          <div className="spec-symptoms-grid">
            {data.symptoms.map((sym, idx) => (
              <div key={idx} className="spec-symptom-card">
                <div className="spec-symptom-icon-wrap">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <h3 className="spec-symptom-title">{sym.title}</h3>
                <p className="spec-symptom-desc">{sym.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. In-Depth Procedural Spectrum */}
      <section className="spec-section spec-procedures-section" id="procedures">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge navy">PROCEDURAL SPECTRUM</span>
            <h2 className="section-title">Procedures & Surgical Excellence in {data.navTitle}</h2>
            <p className="section-description">
              Every procedure utilizes sub-millimeter surgical instrumentation, tissue preservation protocols, and customized post-operative rehabilitation.
            </p>

            {/* Category Filter Pills */}
            {categories.length > 2 && (
              <div className="spec-filter-pills">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`spec-pill-btn ${activeTab === cat ? 'active' : ''}`}
                    onClick={() => setActiveTab(cat)}
                  >
                    {cat === 'all' ? 'All Procedures' : cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="spec-procedures-grid">
            {filteredProcedures.map((proc) => (
              <article key={proc.id} className="spec-procedure-card">
                <div className="spec-proc-header">
                  <div>
                    <span className="spec-proc-badge">{proc.badge}</span>
                    <h3 className="spec-proc-title">{proc.title}</h3>
                  </div>
                  <span className="spec-proc-cat">{proc.category}</span>
                </div>

                <p className="spec-proc-short-desc">{proc.shortDesc}</p>
                <p className="spec-proc-details">{proc.details}</p>

                <div className="spec-proc-meta-box">
                  <div className="spec-meta-item">
                    <strong>Primary Indications:</strong>
                    <span>{proc.indications}</span>
                  </div>
                  <div className="spec-meta-item">
                    <strong>Surgical Technique:</strong>
                    <span>{proc.technique}</span>
                  </div>
                  <div className="spec-meta-item">
                    <strong>Recovery & Rehab:</strong>
                    <span>{proc.recovery}</span>
                  </div>
                </div>

                <div className="spec-proc-footer">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={onOpenAppointmentModal}
                  >
                    Consult for this Procedure
                  </button>
                  <a
                    href={`https://wa.me/916361446411?text=${encodeURIComponent(`Hello Dr. Shashi, I would like to consult regarding ${proc.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spec-proc-whatsapp-link"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    WhatsApp Doctor
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Treatment Philosophy / Matrix */}
      <section className="spec-section spec-philosophy-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge teal">TREATMENT HIERARCHY</span>
            <h2 className="section-title">Conservative First, Surgical When Definitive</h2>
            <p className="section-description">
              Our clinical philosophy prioritizes joint preservation. We progress from non-surgical biological therapies to minimally invasive keyhole reconstruction, and modern arthroplasty only when joint integrity demands it.
            </p>
          </div>

          <div className="spec-philosophy-grid">
            {data.approaches.map((app, idx) => (
              <div key={idx} className="spec-philosophy-card">
                <span className="spec-tier-badge">{app.tier}</span>
                <h3 className="spec-tier-title">{app.title}</h3>
                <p className="spec-tier-desc">{app.desc}</p>
                <ul className="spec-tier-list">
                  {app.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 4-Stage Recovery Roadmap */}
      <section className="spec-section spec-recovery-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge navy">GUIDED REHABILITATION</span>
            <h2 className="section-title">Your Structured Recovery Roadmap</h2>
            <p className="section-description">
              Surgery is only half the cure; guided rehabilitation completes your return to pain-free active living.
            </p>
          </div>

          <div className="spec-timeline-grid">
            {data.recoveryTimeline.map((item, idx) => (
              <div key={idx} className="spec-timeline-card">
                <div className="spec-timeline-badge">{item.phase}</div>
                <h3 className="spec-timeline-title">{item.title}</h3>
                <p className="spec-timeline-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Patient Review & Clinical Case */}
      <section className="spec-section spec-testimonial-section">
        <div className="container">
          <div className="spec-testimonial-card">
            <div className="spec-testimonial-badge">VERIFIED CLINICAL OUTCOME</div>
            <div className="spec-testimonial-stars">
              {[...Array(data.testimonial.rating)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>
            <blockquote className="spec-testimonial-quote">
              "{data.testimonial.quote}"
            </blockquote>
            <div className="spec-testimonial-author">
              <span className="spec-author-name">{data.testimonial.patient}</span>
              <span className="spec-author-sep">•</span>
              <span className="spec-author-proc">{data.testimonial.procedure}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Frequently Asked Questions */}
      <section className="spec-section spec-faq-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge teal">CLEAR ANSWERS</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Clear clinical answers to common patient questions regarding {data.navTitle.toLowerCase()}.
            </p>
          </div>

          <div className="spec-faq-list">
            {data.faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`spec-faq-item ${openFaq === idx ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="spec-faq-question">
                  <span>{faq.q}</span>
                  <svg
                    className="spec-faq-chevron"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                {openFaq === idx && (
                  <div className="spec-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Doctor Spotlight Card */}
      <section className="spec-section spec-doctor-section">
        <div className="container">
          <div className="spec-doctor-card">
            <div className="spec-doc-img-wrap">
              <img
                src={`${BASE}/assets/images/dr-shashi-portrait.jpg`}
                alt="Dr. Shashikumar M S"
                className="spec-doc-img"
              />
              <span className="spec-doc-exp-badge">15+ Years Experience</span>
            </div>

            <div className="spec-doc-content">
              <span className="spec-doc-tag">PRIMARY OPERATING SURGEON</span>
              <h2 className="spec-doc-name">{DOCTOR_INFO.name}</h2>
              <div className="spec-doc-qualifications">{DOCTOR_INFO.qualifications}</div>
              <p className="spec-doc-bio">
                {DOCTOR_INFO.designation} at JSS Hospital and Consultant Orthopedic Surgeon at Dr. Shashi's Ortho Clinic, JP Nagar, Mysuru. Completed three advanced post-graduate fellowships in Arthroscopy & Sports Medicine, Shoulder Surgery, and Joint Replacement.
              </p>

              <div className="spec-doc-details-grid">
                <div className="spec-doc-detail-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <strong>Clinic Location:</strong>
                    <span>{CLINIC_INFO.address.area}, Mysuru</span>
                  </div>
                </div>

                <div className="spec-doc-detail-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <div>
                    <strong>Consultation Timings:</strong>
                    <span>{CLINIC_INFO.consultationTimings}</span>
                  </div>
                </div>
              </div>

              <div className="spec-doc-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onOpenAppointmentModal}
                >
                  Schedule Clinic Consultation
                </button>
                <a
                  href={`tel:${CLINIC_INFO.phoneClean}`}
                  className="btn btn-secondary"
                >
                  Call {CLINIC_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Cross-Navigation to Other Specialties */}
      <section className="spec-section spec-cross-nav-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge navy">EXPLORE OTHER SPECIALTIES</span>
            <h2 className="section-title">Comprehensive Orthopedic Care in Mysuru</h2>
          </div>

          <div className="spec-cross-grid">
            {otherSpecialties.map((spec) => (
              <Link
                key={spec.id}
                to={`/specialties/${spec.slug}`}
                className="spec-cross-card"
              >
                <div className="spec-cross-img-wrap">
                  <img src={spec.image} alt={spec.navTitle} className="spec-cross-img" />
                </div>
                <div className="spec-cross-content">
                  <span className="spec-cross-badge">{spec.badge}</span>
                  <h3 className="spec-cross-title">{spec.navTitle}</h3>
                  <p className="spec-cross-desc">{spec.clinicalSummary.slice(0, 110)}...</p>
                  <span className="spec-cross-link">
                    Explore {spec.navTitle} &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialtyDetailPage;
