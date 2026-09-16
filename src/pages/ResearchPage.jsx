import React from 'react';
import { Link } from 'react-router-dom';
import Research from '../components/Research';

const ResearchPage = ({ onOpenAppointmentModal }) => {
  return (
    <div className="research-page">
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Research & Publications</span>
          </nav>

          <span className="section-badge teal">ACADEMIC EXCELLENCE</span>
          <h1 className="subpage-hero-title">Research Publications & Scientific Papers</h1>
          <p className="subpage-hero-sub">
            Dr. Shashikumar M S actively contributes to peer-reviewed international and national orthopedic literature, evaluating surgical outcomes and novel techniques.
          </p>
        </div>
      </section>

      <Research />
    </div>
  );
};

export default ResearchPage;
