import React, { useState, useRef, useEffect } from 'react';

/**
 * Clean images (no baked-in text labels) per treatment.
 * Falls back to category.image if no clean version defined.
 */
const CLEAN_IMAGES = {
  knee: `${process.env.PUBLIC_URL || ''}/assets/images/knee-anatomy-clean.jpg`,
  shoulder: `${process.env.PUBLIC_URL || ''}/assets/images/shoulder-anatomy-clean.jpg`,
  'joint-replacement': `${process.env.PUBLIC_URL || ''}/assets/images/joint-replacement-clean.jpg`,
  'trauma-fracture': `${process.env.PUBLIC_URL || ''}/assets/images/trauma-fracture-clean.jpg`,
  spine: `${process.env.PUBLIC_URL || ''}/assets/images/spine-anatomy-clean.jpg`,
  'ankle-foot': `${process.env.PUBLIC_URL || ''}/assets/images/ankle-foot-clean.jpg`,
  arthritis: `${process.env.PUBLIC_URL || ''}/assets/images/arthritis-clean.jpg`,
};

/**
 * Hotspot positions per treatment — dots only, no pre-visible labels.
 * Labels appear ONLY when clicked (animated).
 */
const TREATMENT_HOTSPOTS = {
  knee: [
    { id: 'patella',   label: 'Patella',                    sub: 'Kneecap',              x: 78, y: 18, color: '#0f62fe' },
    { id: 'acl',       label: 'ACL Ligament',               sub: 'Anterior Cruciate',    x: 48, y: 42, color: '#00a389' },
    { id: 'pcl',       label: 'PCL Ligament',               sub: 'Posterior Cruciate',   x: 55, y: 50, color: '#7c3aed' },
    { id: 'meniscus',  label: 'Meniscus',                   sub: 'Shock-Absorbing Disc', x: 42, y: 62, color: '#dc2626' },
    { id: 'cartilage', label: 'Articular Cartilage',        sub: 'Joint Surface',        x: 35, y: 30, color: '#f59e0b' },
    { id: 'femur',     label: 'Femur',                      sub: 'Thigh Bone',           x: 28, y: 15, color: '#0f62fe' },
    { id: 'tibia',     label: 'Tibia',                      sub: 'Shin Bone',            x: 38, y: 80, color: '#f97316' },
    { id: 'synovial',  label: 'Synovial Fluid',             sub: 'Joint Lubricant',      x: 60, y: 32, color: '#06b6d4' },
  ],
  shoulder: [
    { id: 'clavicle',  label: 'Clavicle',                   sub: 'Collarbone',           x: 78, y: 17, color: '#0f62fe' },
    { id: 'acromion',  label: 'Acromion',                   sub: 'Bony Shoulder Roof',   x: 44, y: 13, color: '#06b6d4' },
    { id: 'suprasp',   label: 'Supraspinatus Tendon',       sub: 'Upper Rotator Cuff',   x: 47, y: 24, color: '#e11d48' },
    { id: 'coracoid',  label: 'Coracoid Process',           sub: 'Anterior Bone Anchor', x: 58, y: 31, color: '#7c3aed' },
    { id: 'humerus',   label: 'Humeral Head',               sub: 'Ball of the Joint',    x: 42, y: 44, color: '#dc2626' },
    { id: 'labrum',    label: 'Glenoid Labrum',             sub: 'Socket Rim Cartilage', x: 52, y: 46, color: '#00a389' },
    { id: 'subscap',   label: 'Subscapularis',              sub: 'Internal Rotator Cuff',x: 66, y: 56, color: '#f59e0b' },
    { id: 'biceps',    label: 'Biceps Tendon',              sub: 'Long Head Anchor',     x: 35, y: 72, color: '#f97316' },
  ],
  'joint-replacement': [
    { id: 'femoral-comp', label: 'Femoral Component',       sub: 'Titanium Knee Surface',x: 31, y: 34, color: '#0f62fe' },
    { id: 'poly-insert',  label: 'Polyethylene Insert',     sub: 'Low-Friction Bearing', x: 27, y: 58, color: '#7c3aed' },
    { id: 'tibial-tray',  label: 'Tibial Baseplate',        sub: 'Shin Anchor Tray',     x: 28, y: 64, color: '#00a389' },
    { id: 'tibia-bone',   label: 'Tibia Joint Base',        sub: 'Prepared Bone Bed',    x: 25, y: 86, color: '#f59e0b' },
    { id: 'hip-cup',      label: 'Acetabular Cup',          sub: 'Pelvic Socket Shell',  x: 78, y: 28, color: '#06b6d4' },
    { id: 'hip-head',     label: 'Ceramic Femoral Head',    sub: 'Articulating Ball',    x: 76, y: 34, color: '#dc2626' },
    { id: 'hip-stem',     label: 'Femoral Stem',            sub: 'Titanium Canal Anchor',x: 65, y: 68, color: '#0f62fe' },
    { id: 'pelvis',       label: 'Pelvis / Acetabulum',     sub: 'Natural Hip Socket',   x: 88, y: 16, color: '#f97316' },
  ],
  'trauma-fracture': [
    { id: 'fem-head',  label: 'Femoral Head / Neck',        sub: 'Proximal Articulation',x: 10, y: 36, color: '#0f62fe' },
    { id: 'cortex',    label: 'Cortical Bone',              sub: 'Dense Outer Bone Wall',x: 24, y: 55, color: '#06b6d4' },
    { id: 'plate',     label: 'Locking Titanium Plate',     sub: 'Rigid Internal Bridge',x: 50, y: 48, color: '#00a389' },
    { id: 'fracture',  label: 'Fracture Gap',               sub: 'Trauma Fracture Site', x: 48, y: 58, color: '#dc2626' },
    { id: 'screws',    label: 'Bicortical Screws',          sub: 'Threaded Stabilization',x: 63, y: 54, color: '#7c3aed' },
    { id: 'condyle',   label: 'Distal Condyle',             sub: 'Distal Joint Interface',x: 89, y: 52, color: '#f59e0b' },
  ],
  spine: [
    { id: 'cervical',  label: 'Cervical / Upper Spine',     sub: 'Cranial Motion Base',  x: 13, y: 20, color: '#0f62fe' },
    { id: 'thoracic',  label: 'Thoracic Vertebrae',         sub: 'Rib-Stabilized Column',x: 32, y: 32, color: '#00a389' },
    { id: 'disc',      label: 'Intervertebral Disc',        sub: 'Shock-Absorber Cushion',x: 46, y: 46, color: '#7c3aed' },
    { id: 'nerve',     label: 'Spinal Nerve Roots',         sub: 'Peripheral Neural Path',x: 58, y: 53, color: '#dc2626' },
    { id: 'lumbar',    label: 'Lumbar Vertebrae',           sub: 'Load-Bearing Spine',   x: 64, y: 57, color: '#f59e0b' },
    { id: 'facet',     label: 'Facet Joint',                sub: 'Articular Motion Pair',x: 42, y: 38, color: '#06b6d4' },
    { id: 'sacrum',    label: 'Sacrum Base',                sub: 'Pelvic Spinal Anchor', x: 82, y: 73, color: '#f97316' },
  ],
  'ankle-foot': [
    { id: 'tibia-fib', label: 'Tibia & Fibula',             sub: 'Lower Leg Joint Mortise',x: 32, y: 20, color: '#0f62fe' },
    { id: 'achilles',  label: 'Achilles Tendon',            sub: 'Calf-to-Heel Cord',    x: 17, y: 46, color: '#dc2626' },
    { id: 'calcaneus', label: 'Calcaneus',                  sub: 'Heel Bone',            x: 20, y: 69, color: '#f59e0b' },
    { id: 'atfl',      label: 'ATFL Ligament',              sub: 'Lateral Ankle Band',   x: 30, y: 50, color: '#00a389' },
    { id: 'talus',     label: 'Talus',                      sub: 'Pivot Joint Bone',     x: 38, y: 42, color: '#7c3aed' },
    { id: 'midfoot',   label: 'Tarsals & Metatarsals',      sub: 'Midfoot Structural Arch',x: 58, y: 64, color: '#06b6d4' },
    { id: 'plantar',   label: 'Plantar Fascia',             sub: 'Sole Support Aponeurosis',x: 44, y: 78, color: '#f97316' },
    { id: 'phalanges', label: 'Phalanges',                  sub: 'Toe Bone Articulations',x: 83, y: 78, color: '#e11d48' },
  ],
  arthritis: [
    { id: 'healthy-cart', label: 'Articular Cartilage',     sub: 'Smooth Protective Glide',x: 41, y: 30, color: '#0f62fe' },
    { id: 'eroded-cart',  label: 'Cartilage Degeneration',  sub: 'Osteoarthritic Wear',  x: 66, y: 41, color: '#dc2626' },
    { id: 'synovium',     label: 'Inflamed Synovium',       sub: 'Joint Synovitis / Swelling',x: 77, y: 42, color: '#f97316' },
    { id: 'meniscus-arth',label: 'Meniscus Cushion',        sub: 'Fibrocartilaginous Disc',x: 37, y: 58, color: '#7c3aed' },
    { id: 'subchondral',  label: 'Subchondral Bone',        sub: 'Trabecular Stress Area',x: 50, y: 81, color: '#f59e0b' },
    { id: 'cruciate-arth',label: 'Cruciate Ligaments',      sub: 'Internal Stabilizers', x: 51, y: 50, color: '#00a389' },
  ],
};

const DEFAULT_HOTSPOTS = [
  { id: 'zone1', label: 'Primary Treatment Zone',  sub: 'Main Surgical Area',  x: 45, y: 35, color: '#0f62fe' },
  { id: 'zone2', label: 'Secondary Region',        sub: 'Supporting Tissue',   x: 58, y: 55, color: '#00a389' },
  { id: 'zone3', label: 'Recovery Focus Area',     sub: 'Rehabilitation Zone', x: 35, y: 62, color: '#f59e0b' },
];

const TreatmentAnatomyImage = ({ category }) => {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const wrapperRef = useRef(null);

  const hotspots = TREATMENT_HOTSPOTS[category.id] || DEFAULT_HOTSPOTS;
  // Use clean image if available, otherwise use the original
  const imageUrl = CLEAN_IMAGES[category.id] || category.image;

  const handleHotspotClick = (spot) => {
    setActiveHotspot(prev => prev?.id === spot.id ? null : spot);
  };

  /**
   * Smart label direction:
   * - y < 30  → show label BELOW the dot  (labelDir = 'bottom')
   * - y >= 30 → show label ABOVE the dot  (labelDir = 'top')
   * - x < 20  → shift label to the right  (labelAlign = 'left-edge')
   * - x > 80  → shift label to the left   (labelAlign = 'right-edge')
   */
  const getLabelClass = (spot) => {
    const dir   = spot.y < 30 ? 'tai-label--below' : '';
    const align = spot.x < 20 ? 'tai-label--align-left'
                : spot.x > 80 ? 'tai-label--align-right'
                : '';
    return `tai-label${activeHotspot?.id === spot.id ? ' tai-label--visible' : ''} ${dir} ${align}`.trim();
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setActiveHotspot(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="tai-wrapper" ref={wrapperRef}>

      {/* The clean anatomy image — no baked-in text */}
      <img
        src={imageUrl}
        alt={`${category.name} anatomy`}
        className="tai-image"
        draggable={false}
      />

      {/* Dark vignette overlay */}
      <div className="tai-overlay" />

      {/* Hotspot dots — labels only show on click */}
      {hotspots.map((spot) => {
        const isActive = activeHotspot?.id === spot.id;
        const isBelow  = spot.y < 30;
        return (
          <button
            key={spot.id}
            className={`tai-dot${isActive ? ' tai-dot--active' : ''}`}
            style={{
              left: `${spot.x}%`,
              top: `${spot.y}%`,
              '--dot-color': spot.color,
            }}
            onClick={() => handleHotspotClick(spot)}
            aria-label={`Tap to reveal: ${spot.label}`}
          >
            {/* Pulse rings */}
            <span className="tai-ring tai-ring-1" />
            <span className="tai-ring tai-ring-2" />

            {/* Core dot */}
            <span className="tai-core" style={{ '--dot-color': spot.color }} />

            {/* Animated label — ONLY visible on click, smart direction */}
            <span
              className={getLabelClass(spot)}
              style={{ '--dot-color': spot.color }}
            >
              {/* Arrow flips based on direction */}
              {isBelow && <span className="tai-label-arrow tai-label-arrow--top" style={{ borderBottomColor: spot.color }} />}
              <span className="tai-label-name" style={{ background: spot.color }}>
                {spot.label}
              </span>
              <span className="tai-label-sub">{spot.sub}</span>
              {!isBelow && <span className="tai-label-arrow" />}
            </span>
          </button>
        );
      })}

      {/* Active info banner at bottom */}
      {activeHotspot && (
        <div className="tai-active-banner" style={{ '--dot-color': activeHotspot.color }}>
          <span className="tai-active-dot" />
          <strong>{activeHotspot.label}</strong>
          <span className="tai-active-sep">—</span>
          <span>{activeHotspot.sub}</span>
          <button className="tai-active-close" onClick={() => setActiveHotspot(null)} aria-label="Close">✕</button>
        </div>
      )}

      {/* Bottom legend hint */}
      {!activeHotspot && (
        <div className="tai-legend">
          <span className="tai-legend-dot" />
          <span>Click any glowing point to identify the anatomical structure</span>
        </div>
      )}
    </div>
  );
};

export default TreatmentAnatomyImage;
