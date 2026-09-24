/**
 * Centralized Image Configuration
 * Uses process.env.PUBLIC_URL so paths work on GitHub Pages subdirectory
 * and localhost alike.
 */
const BASE = process.env.PUBLIC_URL || '';

export const IMAGES = {
  doctor: {
    portrait: `${BASE}/assets/images/dr-shashi-portrait.jpg`,
    alt: 'Dr. Shashikumar M S - Consultant Orthopedic Surgeon',
  },
  hero: {
    mainVisual: `${BASE}/assets/images/dr-shashi-portrait.jpg`,
    bgBadge: `${BASE}/assets/images/knee-arthroscopy.jpg`,
  },
  treatments: {
    knee: `${BASE}/assets/images/knee-arthroscopy.jpg`,
    shoulder: `${BASE}/assets/images/shoulder-arthroscopy.jpg`,
    jointReplacement: `${BASE}/assets/images/joint-replacement.jpg`,
    sportsRehab: `${BASE}/assets/images/sports-rehab.jpg`,
    spine: `${BASE}/assets/images/knee-arthroscopy.jpg`,
    trauma: `${BASE}/assets/images/shoulder-arthroscopy.jpg`,
    arthritis: `${BASE}/assets/images/joint-replacement.jpg`,
    footAnkle: `${BASE}/assets/images/sports-rehab.jpg`,
  },
  facilities: {
    consultation: `${BASE}/assets/images/facilities/consultation.jpg`,
    xray: `${BASE}/assets/images/facilities/digital-xray.jpg`,
    physiotherapy: `${BASE}/assets/images/facilities/physiotherapy.jpg`,
    plaster: `${BASE}/assets/images/facilities/plaster-pop.jpg`,
    dressing: `${BASE}/assets/images/facilities/dressing.jpg`,
  },
  video: {
    ambient: `${BASE}/assets/videos/ortho-care-ambient.webm`,
  },
};

export default IMAGES;
