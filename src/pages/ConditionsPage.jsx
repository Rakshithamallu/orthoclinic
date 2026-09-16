import React from 'react';
import { Link } from 'react-router-dom';
import { CONDITIONS } from '../data/treatmentsData';

const ConditionsPage = ({ onOpenAppointmentModal }) => {
  return (
    <div className="conditions-page">
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Conditions</span>
          </nav>

          <span className="section-badge teal">DIAGNOSTIC SCOPE</span>
          <h1 className="subpage-hero-title">Orthopedic Conditions & Symptoms</h1>
          <p className="subpage-hero-sub">
            Comprehensive diagnostic insights for knee, shoulder, sports injuries, joint wear, fractures, and spinal discomfort. Select a condition to explore clinical treatment pathways.
          </p>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {CONDITIONS.map((cond) => (
              <div
                key={cond.id}
                className="condition-card"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <span className="section-badge teal" style={{ marginBottom: '12px' }}>{cond.tagline}</span>
                  <h2 className="condition-title" style={{ fontSize: '1.35rem' }}>{cond.title}</h2>
                  <p className="condition-description" style={{ marginBottom: '16px' }}>{cond.description}</p>
                  
                  <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '12px', borderRadius: '8px', marginBottom: '16px' }}>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>Key Symptoms:</strong>
                    <ul style={{ listStyle: 'disc', paddingLeft: '18px', marginTop: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {cond.symptoms.slice(0, 3).map((sym, idx) => (
                        <li key={idx}>{sym}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <Link
                    to={`/conditions/${cond.id}`}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1, textAlign: 'center' }}
                  >
                    Clinical Details
                  </Link>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={onOpenAppointmentModal}
                  >
                    Consult
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="appointment-cta-card" style={{ marginTop: '64px' }}>
            <div className="appointment-cta-content">
              <span className="section-badge teal">EARLY INTERVENTION IS KEY</span>
              <h3 className="appointment-cta-title" style={{ fontSize: '2rem' }}>
                Experiencing acute joint swelling, pain, or instability?
              </h3>
              <p className="appointment-cta-description">
                Timely diagnosis prevents further damage to cartilage and ligaments. Book your clinical consultation with Dr. Shashikumar M S today.
              </p>
              <button
                className="btn btn-primary btn-lg"
                onClick={onOpenAppointmentModal}
              >
                Book Consultation Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConditionsPage;
