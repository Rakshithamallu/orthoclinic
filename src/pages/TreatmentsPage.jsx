import React from 'react';
import { Link } from 'react-router-dom';
import { TREATMENT_CATEGORIES } from '../data/treatmentsData';

const TreatmentsPage = ({ onOpenAppointmentModal }) => {
  return (
    <div className="treatments-page">
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Treatments</span>
          </nav>

          <span className="section-badge">CLINICAL EXCELLENCE</span>
          <h1 className="subpage-hero-title">Specialized Orthopedic Treatments</h1>
          <p className="subpage-hero-sub">
            Advanced arthroscopy, joint replacement, sports injury management, fracture fixation, and spinal care delivered with surgical precision in Mysuru.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {TREATMENT_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="blog-card"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div className="blog-image-wrap" style={{ height: '220px' }}>
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="blog-img"
                    loading="lazy"
                  />
                  <span className="blog-category-tag">{cat.badge}</span>
                </div>

                <div className="blog-card-content" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h2 className="blog-card-title" style={{ fontSize: '1.4rem' }}>{cat.name}</h2>
                    <p className="blog-card-excerpt" style={{ WebkitLineClamp: 3 }}>
                      {cat.summary}
                    </p>

                    <div style={{ margin: '16px 0', borderTop: '1px solid var(--border-light)', paddingTop: '12px' }}>
                      <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: '700', color: 'var(--text-muted)' }}>
                        Featured Procedures ({cat.treatments.length}):
                      </span>
                      <ul style={{ listStyle: 'disc', paddingLeft: '18px', marginTop: '6px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        {cat.treatments.slice(0, 3).map((t, idx) => (
                          <li key={idx} style={{ marginBottom: '4px' }}>{t.title}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                    <Link
                      to={`/treatments/${cat.id}`}
                      className="btn btn-primary btn-sm"
                      style={{ flex: 1, textAlign: 'center' }}
                    >
                      View All Procedures
                    </Link>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={onOpenAppointmentModal}
                    >
                      Consult
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="appointment-cta-card" style={{ marginTop: '64px' }}>
            <div className="appointment-cta-content">
              <span className="section-badge teal">NOT SURE WHICH TREATMENT APPLIES?</span>
              <h3 className="appointment-cta-title" style={{ fontSize: '2rem' }}>
                Get an In-Person Clinical Assessment
              </h3>
              <p className="appointment-cta-description">
                Dr. Shashikumar M S conducts an in-depth physical examination and review of your MRI / X-rays to recommend the exact treatment roadmap you need.
              </p>
              <button
                className="btn btn-primary btn-lg"
                onClick={onOpenAppointmentModal}
              >
                Schedule Appointment Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentsPage;
