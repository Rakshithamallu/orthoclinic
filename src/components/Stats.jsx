import React, { useState, useEffect, useRef } from 'react';

const STAT_ITEMS = [
  { id: 1, endValue: 8, suffix: '+', label: 'Years of Experience', desc: 'Dedicated clinical & surgical practice' },
  { id: 2, endValue: 2000, suffix: '+', label: 'Successful Surgeries', desc: 'Joint replacements & arthroscopies' },
  { id: 3, endValue: 3000, suffix: '+', label: 'Patients Treated', desc: 'Restored to pain-free movement' },
  { id: 4, isText: true, text: 'Advanced', suffix: '', label: 'Orthopedic Treatments', desc: 'Robotic & keyhole surgical care' },
];

const Stats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({ 1: 0, 2: 0, 3: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate numbers smoothly
          const duration = 1800; // ms
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic formula
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCounts({
              1: Math.floor(easeProgress * 8),
              2: Math.floor(easeProgress * 2000),
              3: Math.floor(easeProgress * 3000),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts({ 1: 8, 2: 2000, 3: 3000 });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="stats-strip" ref={sectionRef} aria-label="Clinic Statistics and Achievements">
      <div className="container">
        <div className="stats-grid">
          {STAT_ITEMS.map((item) => (
            <div key={item.id} className="stat-item">
              <div className="stat-number-wrap">
                {item.isText ? (
                  <span className="stat-number" style={{ fontSize: '2rem' }}>{item.text}</span>
                ) : (
                  <span className="stat-number">
                    {hasAnimated ? counts[item.id].toLocaleString() : '0'}
                  </span>
                )}
                {item.suffix && <span className="stat-suffix">{item.suffix}</span>}
              </div>
              <div className="stat-label">{item.label}</div>
              <div className="stat-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
