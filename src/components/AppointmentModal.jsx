import React, { useState, useEffect, useRef } from 'react';
import { submitAppointmentRequest } from '../services/api';

const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '05:30 PM - 06:30 PM',
    reason: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const [successData, setSuccessData] = useState(null);

  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
      // Reset state when closed
      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '05:30 PM - 06:30 PM',
        reason: '',
      });
      setErrors({});
      setApiError('');
      setSuccessData(null);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (minimum 2 characters).';
    }

    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{3,4}[-\s.]?[0-9]{3,6}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a preferred date for your visit.';
    }

    if (!formData.reason.trim() || formData.reason.trim().length < 3) {
      newErrors.reason = 'Please provide details about your orthopedic condition or symptoms.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const result = await submitAppointmentRequest(formData);

      if (result.success) {
        setSuccessData(result.data || formData);
      } else {
        setApiError(result.message || 'Failed to submit appointment. Please try again.');
      }
    } catch (err) {
      setApiError('Unable to connect to the server. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get tomorrow's date formatted as YYYY-MM-DD for min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-modal-title"
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close appointment modal"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {!successData ? (
          <>
            <div className="modal-header">
              <span className="modal-badge">PRIORITY CONSULTATION</span>
              <h3 id="appointment-modal-title" className="modal-title">Book an Appointment</h3>
              <p className="modal-subtitle">
                Consult with Dr. Shashikumar M S (5:30 PM – 8:30 PM, Mon–Sat)
              </p>
            </div>

            {apiError && (
              <div style={{ padding: '12px 16px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', color: '#b91c1c', fontSize: '0.9rem', marginBottom: '20px' }}>
                {apiError}
              </div>
            )}

            <form className="appointment-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="appt-name">Full Name *</label>
                <input
                  id="appt-name"
                  name="name"
                  type="text"
                  ref={firstInputRef}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Gowda"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  required
                />
                {errors.name && <span className="form-error-msg">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="appt-phone">Contact Phone Number *</label>
                <input
                  id="appt-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  required
                />
                {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="appt-date">Preferred Date *</label>
                  <input
                    id="appt-date"
                    name="date"
                    type="date"
                    min={minDate}
                    value={formData.date}
                    onChange={handleChange}
                    className={`form-input ${errors.date ? 'error' : ''}`}
                    required
                  />
                  {errors.date && <span className="form-error-msg">{errors.date}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="appt-time">Preferred Slot *</label>
                  <select
                    id="appt-time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="05:30 PM - 06:30 PM">05:30 PM – 06:30 PM</option>
                    <option value="06:30 PM - 07:30 PM">06:30 PM – 07:30 PM</option>
                    <option value="07:30 PM - 08:30 PM">07:30 PM – 08:30 PM</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="appt-reason">Reason for Visit / Symptoms *</label>
                <textarea
                  id="appt-reason"
                  name="reason"
                  rows="3"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Describe your pain, joint discomfort, sports injury or surgical consultation request..."
                  className={`form-textarea ${errors.reason ? 'error' : ''}`}
                  required
                />
                {errors.reason && <span className="form-error-msg">{errors.reason}</span>}
              </div>

              <button
                type="submit"
                className="btn btn-primary form-submit-btn"
                disabled={isSubmitting}
                id="submit-appointment-btn"
              >
                {isSubmitting ? (
                  <span>Processing Request...</span>
                ) : (
                  <>
                    <span>Request Appointment</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="modal-success-state">
            <div className="success-icon-wrap">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            <h3 className="success-title">Appointment Request Received!</h3>
            <p className="success-message">
              Thank you, <strong>{successData.name}</strong>. Your consultation request has been logged. Our clinic team will reach out on <strong>{successData.phone}</strong> shortly to confirm your booking.
            </p>

            <div className="success-details-box">
              <div className="success-detail-row">
                <span className="success-detail-label">Reference ID</span>
                <span className="success-detail-val">{successData.id || 'CONFIRMED'}</span>
              </div>
              <div className="success-detail-row">
                <span className="success-detail-label">Preferred Date</span>
                <span className="success-detail-val">{successData.date}</span>
              </div>
              <div className="success-detail-row">
                <span className="success-detail-label">Time Slot</span>
                <span className="success-detail-val">{successData.time}</span>
              </div>
              <div className="success-detail-row">
                <span className="success-detail-label">Clinic Address</span>
                <span className="success-detail-val">JP Nagar, Mysuru</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                className="btn btn-primary"
                onClick={onClose}
              >
                Done
              </button>
              <a
                href="https://wa.me/916361446411?text=Hello%20Dr.%20Shashi%27s%20Clinic,%20I%20just%20submitted%20an%20appointment%20request."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Open in WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;
