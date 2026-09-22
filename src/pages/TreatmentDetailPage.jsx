import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TREATMENT_CATEGORIES } from '../data/treatmentsData';
import { CLINIC_INFO } from '../data/doctorData';
import TreatmentAnatomyImage from '../components/TreatmentAnatomyImage';
import SpecialtyDetailPage from './SpecialtyDetailPage';
import '../styles/anatomy-image.css';

const ENHANCED_SPECIALTIES = ['knee', 'hip', 'joint-replacement', 'shoulder', 'sports-trauma', 'trauma-fracture', 'elbow-trauma'];

const TreatmentDetailPage = ({ onOpenAppointmentModal }) => {
  const { categoryId } = useParams();

  if (ENHANCED_SPECIALTIES.includes(categoryId?.toLowerCase())) {
    return <SpecialtyDetailPage onOpenAppointmentModal={onOpenAppointmentModal} />;
  }

  const category = TREATMENT_CATEGORIES.find((cat) => cat.id === categoryId) || TREATMENT_CATEGORIES[0];
  const otherCategories = TREATMENT_CATEGORIES.filter((cat) => cat.id !== category.id);

  return (
    <div className="treatment-detail-page">
      {/* Subpage Hero Banner */}
      <section className="subpage-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/treatments">Treatments</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{category.name}</span>
          </nav>

          <span className="section-badge teal">{category.badge}</span>
          <h1 className="subpage-hero-title">{category.name}</h1>
          <p className="subpage-hero-sub">
            Advanced orthopedic treatments performed by Dr. Shashikumar M S (Fellowship in Arthroscopy, Joint Replacement & Shoulder Surgery).
          </p>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <div className="container">
        <div className="subpage-container">
          {/* Main Column */}
          <main className="treatment-full-content">
            <Link to="/treatments" className="subpage-back-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to All Treatments
            </Link>

            {/* Hero Overview Box — full-width landscape anatomy image */}
            <div className="treatment-detail-hero-box treatment-hero-landscape">
              {/* ── Interactive Anatomy Image (landscape, full width) ── */}
              <TreatmentAnatomyImage category={category} />
            </div>


            {/* Procedures Detailed List */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px' }}>
                Procedures & Surgical Options in {category.name}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Every procedure is tailored using advanced diagnostic imaging, tissue preservation, and guided post-operative physical therapy.
              </p>
            </div>

            <div className="treatment-procedures-full-list">
              {category.treatments.map((proc, idx) => (
                <article key={idx} className="treatment-procedure-full-card">
                  <div className="treatment-proc-title-row">
                    <h4 className="treatment-proc-title">{proc.title}</h4>
                    <span className="procedure-type-badge">{proc.type}</span>
                  </div>

                  <p className="treatment-proc-desc">{proc.description}</p>

                  <div className="treatment-proc-indications-box">
                    <strong>Primary Clinical Indications:</strong> {proc.indications}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '18px' }}>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={onOpenAppointmentModal}
                    >
                      Book Consultation for this Procedure
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Care Protocol Highlight */}
            <div className="article-takeaways-highlight">
              <div className="takeaways-highlight-title">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>Surgical & Rehabilitation Standards</span>
              </div>
              <ul className="takeaways-highlight-list">
                <li>Minimally invasive keyhole techniques with millimeter-scale incisions for faster wound healing.</li>
                <li>Rigorous sterilization protocols and highest patient safety standards.</li>
                <li>Comprehensive pre-operative assessment and structured multi-phase physical rehabilitation plan.</li>
                <li>Direct follow-up care and progress monitoring with Dr. Shashikumar M S.</li>
              </ul>
            </div>
          </main>

          {/* Sticky Sidebar */}
          <aside className="subpage-sidebar">
            <div className="sidebar-consult-card">
              <div className="sidebar-doctor-mini">
                <img
                  src={`${process.env.PUBLIC_URL || ''}/assets/images/dr-shashi-portrait.jpg`}
                  alt="Dr. Shashikumar M S"
                  className="sidebar-doctor-img"
                />
                <div>
                  <div className="sidebar-doctor-name">Dr. Shashikumar M S</div>
                  <div className="sidebar-doctor-role">Consultant Orthopedic Surgeon</div>
                </div>
              </div>

              <h4 className="sidebar-card-title">Book an In-Clinic Evaluation</h4>
              <p className="sidebar-card-desc">
                Have your MRI, X-rays, or joint pain thoroughly reviewed by Dr. Shashi in Mysuru.
              </p>

              <div className="sidebar-contact-details">
                <div className="sidebar-contact-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{CLINIC_INFO.address.area}, Mysuru</span>
                </div>
                <div className="sidebar-contact-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{CLINIC_INFO.consultationTimings}</span>
                </div>
              </div>

              <button
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={onOpenAppointmentModal}
              >
                Schedule Appointment
              </button>
            </div>

            {/* Other Treatment Categories */}
            <div className="sidebar-consult-card">
              <h4 className="sidebar-card-title" style={{ fontSize: '1.1rem', marginBottom: '16px' }}>
                Other Specialized Treatments
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                {otherCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/treatments/${cat.id}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--bg-subtle)',
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-primary)',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>{cat.name}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetailPage;
