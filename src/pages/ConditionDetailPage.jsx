import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CONDITIONS } from '../data/treatmentsData';
import { CLINIC_INFO } from '../data/doctorData';

const ConditionDetailPage = ({ onOpenAppointmentModal }) => {
  const { conditionId } = useParams();

  const condition = CONDITIONS.find((c) => c.id === conditionId) || CONDITIONS[0];
  const otherConditions = CONDITIONS.filter((c) => c.id !== condition.id);

  return (
    <div className="condition-detail-page">
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/conditions">Conditions</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{condition.title}</span>
          </nav>

          <span className="section-badge teal">{condition.tagline}</span>
          <h1 className="subpage-hero-title">{condition.title}</h1>
          <p className="subpage-hero-sub">
            Understanding causes, symptoms, and targeted treatment pathways with Dr. Shashikumar M S (Consultant Orthopedic Surgeon).
          </p>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <div className="container">
        <div className="subpage-container">
          <main className="article-full-content">
            <Link to="/conditions" className="subpage-back-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to All Conditions
            </Link>

            <div className="article-intro-lead">
              <p>{condition.description}</p>
            </div>

            <div className="article-body-section">
              <article>
                <h2>Common Symptoms & Red Flags</h2>
                <p>
                  Patients presenting with {condition.title.toLowerCase()} frequently report the following symptoms during clinical evaluations:
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                  {condition.symptoms.map((symptom, idx) => (
                    <li key={idx} style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                      <strong>{symptom}</strong>
                    </li>
                  ))}
                </ul>
              </article>

              <article style={{ marginTop: '24px' }}>
                <h2>Diagnostic & Care Protocol</h2>
                <p>
                  At Dr. Shashi's Ortho Clinic, we utilize physical biomechanical tests along with digital X-rays and MRI scans to pinpoint anatomical damage.
                </p>
                <div style={{ backgroundColor: 'var(--primary-light)', padding: '24px', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary)', marginTop: '16px' }}>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '8px' }}>
                    Specialized Treatment Approach
                  </h3>
                  <p style={{ color: 'var(--text-primary)', fontWeight: '600', lineHeight: 1.6 }}>
                    {condition.solution}
                  </p>
                </div>
              </article>
            </div>

            <div className="article-takeaways-highlight">
              <div className="takeaways-highlight-title">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>When should you consult an orthopedic surgeon?</span>
              </div>
              <ul className="takeaways-highlight-list">
                <li>If your joint pain persists for more than 48 hours following an injury.</li>
                <li>If you experience joint locking, instability, or inability to bear body weight.</li>
                <li>If night pain disrupts sleep or interferes with routine daily tasks.</li>
                <li>If over-the-counter painkillers no longer provide adequate pain relief.</li>
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '36px', paddingTop: '28px', borderTop: '1px solid var(--border-light)' }}>
              <button
                className="btn btn-primary"
                onClick={onOpenAppointmentModal}
              >
                Book In-Clinic Evaluation for {condition.title}
              </button>
              <Link to="/treatments" className="btn btn-secondary">
                View Related Surgical Procedures
              </Link>
            </div>
          </main>

          {/* Sticky Sidebar */}
          <aside className="subpage-sidebar">
            <div className="sidebar-consult-card">
              <div className="sidebar-doctor-mini">
                <img
                  src="/assets/images/dr-shashi-portrait.jpg"
                  alt="Dr. Shashikumar M S"
                  className="sidebar-doctor-img"
                />
                <div>
                  <div className="sidebar-doctor-name">Dr. Shashikumar M S</div>
                  <div className="sidebar-doctor-role">Consultant Orthopedic Surgeon</div>
                </div>
              </div>

              <h4 className="sidebar-card-title">Schedule a Consultation</h4>
              <p className="sidebar-card-desc">
                Consult Dr. Shashi for evidence-based diagnosis and treatment in Mysuru.
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
                Book Appointment
              </button>
            </div>

            {/* Other Conditions */}
            <div className="sidebar-consult-card">
              <h4 className="sidebar-card-title" style={{ fontSize: '1.1rem', marginBottom: '16px' }}>
                Other Orthopedic Conditions
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                {otherConditions.map((c) => (
                  <Link
                    key={c.id}
                    to={`/conditions/${c.id}`}
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
                    <span>{c.title}</span>
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

export default ConditionDetailPage;
