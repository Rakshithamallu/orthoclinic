import React from 'react';
import { Link } from 'react-router-dom';
import FacilitiesAvailable from '../components/FacilitiesAvailable';
import ClinicAmbience from '../components/ClinicAmbience';
import OurWork from '../components/OurWork';
import { CLINIC_INFO } from '../data/doctorData';

const FacilitiesPage = ({ onOpenAppointmentModal }) => {
  return (
    <div className="facilities-page">
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Facilities & Ambience</span>
          </nav>

          <span className="section-badge teal">MODERN CLINICAL INFRASTRUCTURE</span>
          <h1 className="subpage-hero-title">Clinic Facilities & Ambience</h1>
          <p className="subpage-hero-sub">
            Equipped with on-site digital X-rays, specialized physical therapy rehabilitation, sterile plaster application, and modern consultation suites in JP Nagar, Mysuru.
          </p>
        </div>
      </section>

      {/* Facilities Available with authentic photos */}
      <FacilitiesAvailable onOpenAppointmentModal={onOpenAppointmentModal} />

      {/* Our Clinic Ambience Virtual Tour */}
      <ClinicAmbience onOpenAppointmentModal={onOpenAppointmentModal} />

      {/* Our Clinical Work Showcase */}
      <OurWork onOpenAppointmentModal={onOpenAppointmentModal} />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="appointment-cta-card">
            <div className="appointment-cta-content">
              <span className="section-badge teal">VISIT US TODAY</span>
              <h3 className="appointment-cta-title" style={{ fontSize: '2rem' }}>
                Walk-ins & Scheduled Appointments Welcome
              </h3>
              <p className="appointment-cta-description">
                Located conveniently at {CLINIC_INFO.address.full}. Open Monday through Saturday.
              </p>
              <button
                className="btn btn-primary btn-lg"
                onClick={onOpenAppointmentModal}
              >
                Book Your Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;
