import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CONDITIONS } from '../data/treatmentsData';

const Conditions = ({ onOpenAppointmentModal }) => {
  const navigate = useNavigate();

  const getConditionIcon = (iconType) => {
    switch (iconType) {
      case 'knee':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        );
      case 'shoulder':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="7" r="4"></circle>
            <path d="M5 21v-2a7 7 0 0 1 14 0v2"></path>
          </svg>
        );
      case 'running':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
            <path d="M17 21v-4l-4-4 2-5-4 1-2 4"></path>
            <path d="M7 21l3-6"></path>
          </svg>
        );
      case 'joint':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9"></circle>
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M12 3v6M12 15v6M3 12h6M15 12h6"></path>
          </svg>
        );
      case 'spine':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M8 5h8M7 9h10M6 13h12M7 17h10M8 21h8"></path>
          </svg>
        );
      case 'bone':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 10c.7-.7 1.6-1 2.5-1 2 0 3.5 1.5 3.5 3.5 0 .9-.3 1.8-1 2.5l-8 8c-.7.7-1.6 1-2.5 1-2 0-3.5-1.5-3.5-3.5 0-.9.3-1.8 1-2.5l8-8Z"></path>
            <path d="m14 14-4-4"></path>
          </svg>
        );
      case 'foot':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 16v-2.38C4 11.5 5.5 10 7.38 10H16c2.2 0 4 1.8 4 4v2"></path>
            <path d="M4 20h16"></path>
          </svg>
        );
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
            <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
            <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
          </svg>
        );
    }
  };

  return (
    <section className="section section-subtle" id="conditions">
      <div className="container">
        <div className="section-header">
          <span className="section-badge teal">DIAGNOSTIC SCOPE</span>
          <h2 className="section-title">Orthopedic Care Designed Around Your Recovery</h2>
          <p className="section-description">
            Comprehensive surgical and non-surgical treatments formulated to target your specific pain triggers and restore natural joint dynamics.
          </p>
        </div>

        <div className="conditions-grid">
          {CONDITIONS.map((cond) => (
            <div
              key={cond.id}
              className="condition-card"
              onClick={() => navigate(`/conditions/${cond.id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/conditions/${cond.id}`)}
              aria-label={`View clinical details for ${cond.title}`}
              style={{ cursor: 'pointer' }}
            >
              <div className="condition-icon-box">
                {getConditionIcon(cond.icon)}
              </div>
              <h3 className="condition-title">{cond.title}</h3>
              <div className="condition-tagline">{cond.tagline}</div>
              <p className="condition-description">{cond.description}</p>
              <Link
                to={`/conditions/${cond.id}`}
                className="condition-learn-btn"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Learn More</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/conditions" className="btn btn-secondary">
            View All Conditions & Clinical Care Pathways
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Conditions;
