import React, { useEffect, useRef } from 'react';
import { DOCTOR_INFO } from '../data/doctorData';

const EducationTimeline = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll('.timeline-item');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            // Remove on scroll away so it animates again when scrolling up or down
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="section section-subtle education-section" id="education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge teal">ACADEMIC FOUNDATION</span>
          <h2 className="section-title">Education & Advanced Training</h2>
          <p className="section-description">
            Rigorous surgical training from premier medical institutes across Karnataka, grounding Dr. Shashikumar's practice in advanced trauma and orthopedic science.
          </p>
        </div>

        <div className="education-timeline-wrap" ref={containerRef}>
          <div className="timeline-track" />

          {DOCTOR_INFO.education.map((item, index) => {
            // index 0: Right, index 1: Left, index 2: Right
            const isRight = index % 2 === 0;
            const sideClass = isRight ? 'timeline-item--right' : 'timeline-item--left';

            return (
              <div key={index} className={`timeline-item ${sideClass}`}>
                <div className="timeline-marker" />
                <div className="timeline-card">
                  <span className="timeline-period-badge">{item.period}</span>
                  <h3 className="timeline-degree">{item.degree}</h3>
                  <div className="timeline-institution">{item.institution}</div>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;

