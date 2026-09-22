import React, { useState, useEffect } from 'react';
import '../styles/rotating-showcase.css';

// Anatomical hotspots with exact coordinates and part names
const ANATOMY_HOTSPOTS = {
  knee: [
    { id: 'patella', label: 'Patella (Kneecap)', sub: 'Extensor Mechanism', x: 77, y: 22, color: '#38bdf8' },
    { id: 'cartilage', label: 'Articular Cartilage', sub: 'Joint Glide Surface', x: 33, y: 30, color: '#00a389' },
    { id: 'acl', label: 'ACL Ligament', sub: 'Anterior Cruciate Pivot', x: 48, y: 44, color: '#0f62fe' },
    { id: 'pcl', label: 'PCL Ligament', sub: 'Posterior Restraint', x: 55, y: 52, color: '#7c3aed' },
    { id: 'meniscus', label: 'Meniscus Cushion', sub: 'Shock-Absorbing Pad', x: 42, y: 64, color: '#dc2626' },
    { id: 'femur', label: 'Femoral Condyle', sub: 'Thigh Bone Base', x: 28, y: 15, color: '#f59e0b' },
    { id: 'tibia', label: 'Tibia Plateau', sub: 'Shin Bone Foundation', x: 38, y: 82, color: '#f97316' },
  ],
  hip: [
    { id: 'hip-cup', label: 'Acetabular Cup', sub: 'Pelvic Socket Shell', x: 78, y: 28, color: '#06b6d4' },
    { id: 'hip-head', label: 'Ceramic Femoral Head', sub: 'Articulating Ball', x: 74, y: 36, color: '#dc2626' },
    { id: 'hip-stem', label: 'Femoral Stem', sub: 'Titanium Canal Anchor', x: 65, y: 68, color: '#0f62fe' },
    { id: 'pelvis', label: 'Pelvis (Acetabulum)', sub: 'Natural Hip Socket', x: 88, y: 16, color: '#f97316' },
    { id: 'femoral-comp', label: 'Femoral Component', sub: 'Titanium Bearing Surface', x: 31, y: 34, color: '#00a389' },
    { id: 'poly-insert', label: 'Polyethylene Bearing', sub: 'Low-Friction Insert', x: 27, y: 58, color: '#7c3aed' },
  ],
  shoulder: [
    { id: 'clavicle', label: 'Clavicle', sub: 'Collarbone Joint', x: 78, y: 17, color: '#0f62fe' },
    { id: 'acromion', label: 'Acromion Arch', sub: 'Shoulder Roof', x: 44, y: 13, color: '#06b6d4' },
    { id: 'suprasp', label: 'Rotator Cuff (Supraspinatus)', sub: 'Dynamic Stability Tendon', x: 47, y: 24, color: '#e11d48' },
    { id: 'labrum', label: 'Glenoid Labrum', sub: 'Socket Rim Cartilage', x: 52, y: 46, color: '#00a389' },
    { id: 'humerus', label: 'Humeral Head', sub: 'Ball Articulation', x: 42, y: 44, color: '#38bdf8' },
    { id: 'biceps', label: 'Biceps Tendon Anchor', sub: 'Long Head Anchor', x: 35, y: 72, color: '#f97316' },
  ],
  'elbow-trauma': [
    { id: 'plate', label: 'Locking Titanium Plate', sub: 'Rigid Internal Bridge', x: 50, y: 48, color: '#00a389' },
    { id: 'screws', label: 'Bicortical Screws', sub: 'Threaded Rigid Stabilization', x: 63, y: 54, color: '#7c3aed' },
    { id: 'fracture', label: 'Fracture Gap', sub: 'Anatomic Reduction Site', x: 48, y: 58, color: '#dc2626' },
    { id: 'cortex', label: 'Cortical Bone Shaft', sub: 'Dense Outer Bone Wall', x: 24, y: 55, color: '#06b6d4' },
    { id: 'fem-head', label: 'Femoral Head Articulation', sub: 'Proximal Bone Joint', x: 10, y: 36, color: '#0f62fe' },
    { id: 'condyle', label: 'Distal Condyle', sub: 'Joint Interface Surface', x: 89, y: 52, color: '#f59e0b' },
  ],
};

const SHOWCASE_ITEMS = [
  {
    id: 'knee',
    podClass: 'pod-top',
    shortName: 'Knee Anatomy',
    title: '3D Knee Joint Anatomy & Arthroscopy',
    badge: 'Keyhole & Robotic',
    image: `${process.env.PUBLIC_URL || ''}/assets/images/knee-anatomy-clean.jpg`,
    caption: 'Sub-millimeter keyhole arthroscopy, ACL reconstruction & meniscus preservation',
  },
  {
    id: 'hip',
    podClass: 'pod-right',
    shortName: 'Hip Arthroplasty',
    title: '3D Hip Joint & Pelvis Anatomy',
    badge: 'Joint Preservation',
    image: `${process.env.PUBLIC_URL || ''}/assets/images/joint-replacement-clean.jpg`,
    caption: 'Robotic-assisted hip replacement, anatomical cup alignment & joint preservation',
  },
  {
    id: 'shoulder',
    podClass: 'pod-bottom',
    shortName: 'Shoulder Joint',
    title: '3D Shoulder Joint Anatomy',
    badge: 'Specialized Arthroscopy',
    image: `${process.env.PUBLIC_URL || ''}/assets/images/shoulder-anatomy-clean.jpg`,
    caption: 'Keyhole rotator cuff repair, Bankart labrum stabilization & shoulder mobility',
  },
  {
    id: 'elbow-trauma',
    podClass: 'pod-left',
    shortName: 'Sports Trauma',
    title: '3D Fracture & Bone Alignment',
    badge: 'Trauma & Fracture Care',
    image: `${process.env.PUBLIC_URL || ''}/assets/images/trauma-fracture-clean.jpg`,
    caption: 'Rigid anatomical fixation, tendon repair & early kinetic sports rehabilitation',
  },
];

const RotatingAnatomyShowcase = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeHotspot, setActiveHotspot] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
        setActiveHotspot(null);
      }
    };
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setActiveHotspot(null);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedItem]);

  const handleOpenItem = (item) => {
    setSelectedItem(item);
    setActiveHotspot(null);
  };

  const getLabelPosClass = (spot) => {
    if (spot.y < 30) return 'pos-bottom';
    if (spot.y > 70) return 'pos-top';
    if (spot.x < 30) return 'pos-right';
    if (spot.x > 70) return 'pos-left';
    return 'pos-top';
  };

  const currentHotspots = selectedItem ? (ANATOMY_HOTSPOTS[selectedItem.id] || []) : [];

  return (
    <div className="rotating-showcase-section" aria-label="Clockwise Rotating Anatomy Showcase">
      {/* Informative Header Pill */}
      <div className="rotating-showcase-caption">
        <span className="showcase-beacon" />
        <span>Clockwise 3D Anatomical Explorer • Click Any Joint</span>
      </div>

      {/* Clockwise Orbit Stage */}
      <div className="orbit-stage">
        {/* Background Decorative Rings */}
        <div className="orbit-halo-bg" />
        <div className="orbit-halo-ring" />

        {/* Center Hub */}
        <div className="orbit-center-hub">
          <svg
            className="hub-center-icon"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v12" />
            <path d="M6 12h12" />
          </svg>
          <span className="hub-center-title">3D Anatomy</span>
          <span className="hub-center-sub">Tap Image</span>
        </div>

        {/* Clockwise Orbit Track */}
        <div className="orbit-track">
          {SHOWCASE_ITEMS.map((item) => (
            <div key={item.id} className={`orbit-pod ${item.podClass}`}>
              <button
                type="button"
                className="orbit-item-content"
                onClick={() => handleOpenItem(item)}
                aria-label={`Open animated view for ${item.title}`}
                title={`Click to open ${item.title}`}
              >
                <div className="orbit-thumb-wrapper">
                  <img
                    src={item.image}
                    alt={item.shortName}
                    className="orbit-thumb-img"
                    draggable={false}
                  />
                  <div className="orbit-thumb-scan" />
                </div>
                <span className="orbit-pod-label">{item.shortName}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal: "when i click on that just animation image should open with dots of the name of the parts" */}
      {selectedItem && (
        <div
          className="animation-lightbox-backdrop"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          <div
            className="animation-lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="animation-lightbox-header">
              <div className="lightbox-title-wrap">
                <span className="lightbox-badge">{selectedItem.badge}</span>
                <h3 className="lightbox-title">{selectedItem.title}</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="lightbox-instruction-pill">
                  <span className="instruction-dot" />
                  <span>Click dot to view part name</span>
                </div>
                <button
                  type="button"
                  className="lightbox-close-btn"
                  onClick={() => setSelectedItem(null)}
                  aria-label="Close animated image"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Body: THE ANIMATED IMAGE + DOTS WITH NAMES OF PARTS */}
            <div
              className="animation-lightbox-body"
              onClick={() => setActiveHotspot(null)}
            >
              {/* Corner Viewport Brackets */}
              <span className="lightbox-corner tl" />
              <span className="lightbox-corner tr" />
              <span className="lightbox-corner bl" />
              <span className="lightbox-corner br" />

              {/* Luminous Diagnostic Laser Scanline */}
              <div className="lightbox-scanline" />

              {/* Breathing Animated Image */}
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="lightbox-animated-img"
                draggable={false}
              />

              {/* Anatomical Dots — Name displays ONLY when that particular dot is clicked */}
              {currentHotspots.map((spot) => {
                const isActive = activeHotspot?.id === spot.id;
                const posClass = getLabelPosClass(spot);
                return (
                  <button
                    key={spot.id}
                    type="button"
                    className={`modal-hotspot-pin ${isActive ? 'active' : ''}`}
                    style={{
                      left: `${spot.x}%`,
                      top: `${spot.y}%`,
                      '--dot-color': spot.color,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHotspot(prev => (prev?.id === spot.id ? null : spot));
                    }}
                    aria-label={`Anatomical part: ${spot.label}`}
                    title={`Click to view: ${spot.label}`}
                  >
                    {/* Pulsing radar rings */}
                    <span className="modal-hotspot-ring-1" />
                    <span className="modal-hotspot-ring-2" />
                    {/* Glowing center dot */}
                    <span className="modal-hotspot-core" />

                    {/* NAME DISPLAYS ONLY WHEN CLICKED */}
                    {isActive && (
                      <div className={`modal-hotspot-label ${posClass}`}>
                        <span className="modal-hotspot-title">{spot.label}</span>
                        <span className="modal-hotspot-sub">{spot.sub}</span>
                      </div>
                    )}
                  </button>
                );
              })}

              {/* Active Hotspot Callout Card */}
              {activeHotspot && (
                <div
                  className="modal-active-part-card"
                  style={{ '--dot-color': activeHotspot.color }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal-active-part-left">
                    <span className="modal-active-part-name">{activeHotspot.label}</span>
                    <span className="modal-active-part-sub">{activeHotspot.sub}</span>
                  </div>
                  <button
                    type="button"
                    className="modal-active-part-close"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHotspot(null);
                    }}
                    aria-label="Dismiss active part description"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>

            {/* Modal Footer Caption */}
            <div className="animation-lightbox-footer">
              <div className="lightbox-footer-caption">
                <span className="lightbox-footer-beacon" />
                <span>{selectedItem.caption}</span>
              </div>
              <span className="lightbox-hint">Click any dot for details • Esc to exit</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RotatingAnatomyShowcase;
