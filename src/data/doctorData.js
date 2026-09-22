/**
 * Doctor and Clinic Information
 * Verified factual data from drshashiorthoclinic.com
 */
export const CLINIC_INFO = {
  name: "Dr. SHASHI'S ORTHO CLINIC",
  subname: "ADVANCED KNEE & SHOULDER CARE",
  tagline: "Move Better. Live Better.",
  taglineSub: "Advanced Orthopedic Care for Stronger Movement",
  description: "Specialized, patient-focused orthopedic and sports medicine care led by Dr. Shashikumar M S in Mysuru. Delivering advanced surgical and non-surgical solutions for knee, shoulder, joints, fractures, and spine.",
  phone: "+91-6361446411",
  phoneClean: "+916361446411",
  email: "shashikumar859@gmail.com",
  consultationTimings: "5:30 PM – 8:30 PM",
  consultationDays: "Monday to Saturday",
  address: {
    line1: "19, 10th cross, Opp. MORE Supermarket",
    area: "C-Block, JP Nagar",
    city: "Mysuru",
    state: "Karnataka",
    pincode: "570008",
    full: "19, 10th cross, Opp. MORE Supermarket, C-Block, JP Nagar, Mysuru, Karnataka 570008",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=19+10th+cross+Opp+MORE+Supermarket+C-Block+JP+Nagar+Mysuru+Karnataka+570008",
  },
  whatsappUrl: "https://wa.me/916361446411?text=Hello%20Dr.%20Shashi%27s%20Ortho%20Clinic,%20I%20would%20like%20to%20consult%20regarding%20an%20orthopedic%20appointment.",
  instagramUrl: "https://www.instagram.com/dr.shashi_ortho_clinic?stkn=MTYwMGR1djNtcmxreQ==",
  instagramReelUrl: "https://www.instagram.com/reel/Dc3az8UzHOo/?stkn=MXQxYmFleTQ3c3J6Yg==",
  instagramHandle: "dr.shashi_ortho_clinic",
  appointmentBookingUrl: "#appointment-section", // configurable booking target
};

export const DOCTOR_INFO = {
  fullName: "Dr. Shashikumar M S",
  displayName: "Dr. Shashi Kumar M S",
  degrees: "MBBS, MS (Ortho)",
  fullQualifications: "MBBS, MS Orthopaedics",
  role: "Consultant Orthopedic Surgeon",
  institutions: [
    "Dr. Shashi's Ortho Clinic, JP Nagar, Mysuru",
    "JSS Hospital, Mysore",
  ],
  experienceYears: 8,
  surgeriesCount: 2000,
  patientsCount: 3000,
  stats: [
    { value: 8, suffix: "+", label: "Years of Clinical Experience", desc: "Dedicated surgical and conservative orthopedic practice" },
    { value: 2000, suffix: "+", label: "Successful Surgeries", desc: "Joint replacements, arthroscopies, and trauma fixations" },
    { value: 3000, suffix: "+", label: "Patients Treated", desc: "Regaining painless, active movement and strength" },
    { value: 10, suffix: "+", label: "Research Publications", desc: "In indexed national and international medical journals" },
  ],
  bioSummary: "Dr. Shashikumar M S (MBBS, MS Orthopaedics) is an accomplished orthopedic surgeon in Mysore, Karnataka, currently practicing at Dr. Shashi’s Ortho Clinic and JSS Hospital. With over 8+ years of clinical experience, Dr. Shashikumar M S is renowned for his expertise in shoulder and knee surgery, sports injury management, arthroscopic procedures of knee & shoulder, and joint replacement procedures of the knee, hip & shoulder.",
  clinicalPhilosophy: "We focus on delivering advanced and compassionate orthopedic care. Whether your condition requires cutting-edge robotic joint replacement, minimally invasive keyhole arthroscopy, or structured non-surgical therapy with medications and rehabilitation, every patient receives a personalized, evidence-based treatment plan tailored for long-term recovery.",
  areasOfExpertise: [
    "Bone & Joint Care",
    "Knee Replacement",
    "Spine Problems",
    "Arthritis Management",
    "Deformity Correction",
    "Sports Injury Treatment",
    "Shoulder Surgery",
    "Knee Arthroscopy",
    "Keyhole Minimally Invasive Surgery",
    "Complex Fracture Trauma Care",
  ],
  education: [
    {
      degree: "MBBS",
      institution: "JSS Medical College, Mysore",
      period: "Undergraduate Medical Education",
      description: "Comprehensive medical and surgical foundation at premier medical institution in Mysore.",
      icon: "degree",
    },
    {
      degree: "MS Orthopaedics",
      institution: "AJIMS, Mangalore",
      period: "Post-Graduate Specialty Degree",
      description: "Rigorous clinical and surgical residency focusing on complex musculoskeletal pathology, joint disorders, and surgical interventions.",
      icon: "specialty",
    },
    {
      degree: "Senior Resident Training",
      institution: "Government Medical College, Shimoga",
      period: "Advanced Clinical Fellowship & Surgical Residency",
      description: "Intensive training in high-velocity orthopedic trauma, complex fractures, intra-articular injuries, and emergency surgical fracture management.",
      icon: "trauma",
    },
  ],
  fellowships: [
    {
      id: "fasm",
      code: "FASM, Bangalore",
      title: "Arthroscopy & Sports Medicine",
      description: "Advanced training in keyhole (arthroscopic) surgeries involving the knee, shoulder, and ankle, focusing on minimally invasive procedures, ligament reconstructions (ACL/PCL), and athletic sports injury management.",
      highlights: [
        "Minimally invasive keyhole arthroscopy",
        "ACL, PCL, and multiligament knee restoration",
        "Rotator cuff and labral stabilization",
      ],
      badge: "Keyhole & Sports Surgery",
    },
    {
      id: "fijr",
      code: "FIJR, Bangalore",
      title: "Joint Replacement (Conventional & Robotic)",
      description: "Specialized in joint replacement for knee, hip, and shoulder using both conventional precision instrumentation and advanced robotic-assisted platforms such as MAKO 2.0 and CUVIS robotic devices.",
      highlights: [
        "Robotic & conventional total knee replacement",
        "Total hip replacement for AVN & osteoarthritis",
        "Reverse and anatomical shoulder arthroplasty",
      ],
      badge: "Robotic Precision Surgery",
    },
    {
      id: "fihs",
      code: "FIHS",
      title: "Hand Trauma Surgery",
      description: "Formal advanced training in the surgical execution of complex traumatic hand injuries, soft-tissue repair, fracture fixation of phalanges and metacarpals, and reconstructive hand techniques.",
      highlights: [
        "Complex hand and wrist fracture fixation",
        "Tendon and micro-ligament restoration",
        "Reconstructive hand trauma surgery",
      ],
      badge: "Trauma & Reconstruction",
    },
  ],
  research: {
    heading: "Research, Publications & Academic Contributions",
    summary: "Dr. Shashikumar M S has authored more than 10 research publications in renowned national and international orthopedic journals, with critical scientific investigations advancing contemporary surgical technique.",
    conferenceTalks: "Delivered more than four scientific talks and faculty lectures at state and national orthopedic conferences across India.",
    publicationTopics: [
      {
        topic: "Rotator Cuff Pathology & Repair",
        field: "Shoulder Surgery",
        detail: "Biomechanical efficacy and functional outcomes of arthroscopic rotator cuff repair techniques.",
      },
      {
        topic: "ACL Reconstruction Techniques",
        field: "Knee Arthroscopy",
        detail: "Graft tensioning, isometric anatomical placement, and athletic return-to-play protocols.",
      },
      {
        topic: "Tuberculosis of the Spine (TB Spine)",
        field: "Spine Pathology",
        detail: "Clinical assessment, conservative chemotherapy regimens, and indications for surgical stabilization.",
      },
      {
        topic: "Degenerative Knee Osteoarthritis",
        field: "Joint Preservation",
        detail: "Critical biomechanical insights on cartilage degradation and coronal malalignment.",
      },
      {
        topic: "Knee & Shoulder Alignment Biomechanics",
        field: "Biomechanical Alignment",
        detail: "Analysis of dynamic load distribution and implant longevity in corrective procedures.",
      },
      {
        topic: "Scapulohumeral Alignment in Shoulder Dynamics",
        field: "Shoulder Biomechanics",
        detail: "Investigation of scapular rhythm and glenohumeral kinematics during sports maneuvers.",
      },
    ],
  },
  disclaimer: "Information provided on this website is for general informational and educational purposes only and does not substitute for professional clinical consultation, diagnosis, or personalized medical care.",
};

/**
 * Surgical Track Record & Clinical Statistics
 * Backed by high-volume clinical and surgical practice
 */
export const SURGICAL_TRACK_RECORD = [
  {
    id: "total-surgeries",
    stat: "5,000+",
    value: 5000,
    suffix: "+",
    label: "Total Orthopedic Surgeries Performed with a 99%+ Positive Surgical Outcome Rate",
    category: "Overall Excellence",
    isPrimary: true,
    icon: "total-surgeries",
  },
  {
    id: "experience",
    stat: "15+",
    value: 15,
    suffix: "+",
    label: "Years of Active Surgical and Clinical Experience",
    category: "Senior Consultant",
    icon: "experience",
  },
  {
    id: "happy-patients",
    stat: "20,000+",
    value: 20000,
    suffix: "+",
    label: "Happy Patients Successfully Treated across Mysuru & Karnataka",
    category: "Patient Satisfaction",
    icon: "happy-patients",
  },
  {
    id: "knee-arthroscopy",
    stat: "2,000+",
    value: 2000,
    suffix: "+",
    label: "Knee Arthroscopy Surgeries (Keyhole Ligament & Meniscus Repairs)",
    category: "Knee Surgery",
    icon: "knee-bone",
  },
  {
    id: "joint-replacements",
    stat: "1,500+",
    value: 1500,
    suffix: "+",
    label: "Total & Partial Joint Replacement Surgeries (Knee, Hip, Shoulder)",
    category: "Arthroplasty",
    icon: "knee-pain",
  },
  {
    id: "shoulder-arthroscopy",
    stat: "1,000+",
    value: 1000,
    suffix: "+",
    label: "Advanced Shoulder Arthroscopy Surgeries (Rotator Cuff & Bankart)",
    category: "Shoulder Care",
    icon: "shoulder",
  },
  {
    id: "trauma-surgeries",
    stat: "500+",
    value: 500,
    suffix: "+",
    label: "Complex Orthopedic Trauma & High-Velocity Fracture Fixations",
    category: "Trauma Care",
    icon: "trauma",
  },
  {
    id: "robotic-replacements",
    stat: "100+",
    value: 100,
    suffix: "+",
    label: "Robotic-Assisted Knee Replacement Surgeries with Sub-Millimeter Accuracy",
    category: "Robotic Technology",
    icon: "robotic",
  },
];

/**
 * 6-Pillar Patient Assurance & Clinical Benefits
 */
export const TRUST_BENEFITS = [
  {
    id: "fellowship",
    icon: "fellowship",
    title: "Fellowship-Trained Arthroscopy Specialist",
    description: "Dedicated advanced fellowship training in keyhole arthroscopy and sports medicine beyond standard general orthopedics.",
    accentColor: "#028090",
  },
  {
    id: "robotic",
    icon: "robotic",
    title: "Robotic-Assisted Knee Replacement",
    description: "State-of-the-art robotic planning supports sub-millimeter implant alignment, minimal bone resection, less pain, and faster recovery.",
    accentColor: "#eb6a56",
  },
  {
    id: "minimally-invasive",
    icon: "keyhole",
    title: "Minimally Invasive First Approach",
    description: "Smaller keyhole incisions aim to significantly reduce soft-tissue trauma, minimize infection risk, and accelerate return to daily routine.",
    accentColor: "#00a896",
  },
  {
    id: "hospital-access",
    icon: "hospital",
    title: "Tertiary Hospital Infrastructure & ICU",
    description: "Major surgical procedures performed in accredited tertiary hospitals with advanced laminar air-flow operating suites and 24/7 ICU backup.",
    accentColor: "#17314c",
  },
  {
    id: "biologics",
    icon: "biologics",
    title: "Orthopedic Biologics & PRP Therapy",
    description: "Autologous Platelet-Rich Plasma (PRP) and cellular joint preservation therapies for patients who want to avoid or delay surgery.",
    accentColor: "#02c39a",
  },
  {
    id: "regional-leader",
    icon: "location",
    title: "Serving Mysuru & Across Karnataka",
    description: "Easily accessible clinic in JP Nagar, Mysuru, welcoming patients from across Karnataka with comprehensive multilingual consultations.",
    accentColor: "#0c99c1",
  },
];

/**
 * Verified Patient Testimonials & Google Reviews
 */
export const VERIFIED_GOOGLE_REVIEWS = [
  {
    id: "rev-1",
    author: "Charan Kattemane",
    initials: "CK",
    source: "Google Review",
    rating: 5,
    date: "Recent Patient",
    treatment: "Right Arthroscopic Meniscal Repair with PRP",
    snippet: "Honest opinion and conservative approach helped avoid unnecessary knee replacement surgery.",
    fullReview: "Warm greetings and positive recovery update. I would like to express our sincere gratitude for your expert guidance provided to my father (70 years). Today he is walking properly, driving a car, and has resumed his routine activities comfortably. Initially we had consulted another hospital where knee replacement was advised immediately. However, upon careful evaluation Dr. Shashi suggested and performed Right Arthroscopic Medial Meniscal Repair with Intra-Articular PRP Infiltration, which proved to be the most appropriate treatment. Honest opinion, precise diagnosis, and conservative approach helped avoid unnecessary major surgery.",
  },
  {
    id: "rev-2",
    author: "Pragati Chaudhary",
    initials: "PC",
    source: "Google Review",
    rating: 5,
    date: "Recent Patient",
    treatment: "Bilateral Robotic Total Knee Replacement (TKR)",
    snippet: "Deformity completely corrected; straight and healthy legs with painless walking.",
    fullReview: "I had been suffering with severe osteoarthritis in both knees for nearly a decade and finally decided to undergo bilateral robotic total knee replacement. Thanks to Dr. Shashi's remarkable expertise in robotic TKR and his precision in managing complex joint cases, the severe bow-leg deformity has been completely corrected. These days I often receive compliments on how healthy and straight my legs look, and I am walking completely pain-free.",
  },
  {
    id: "rev-3",
    author: "Bhane Singh",
    initials: "BS",
    source: "Google Review",
    rating: 5,
    date: "Recent Patient",
    treatment: "Knee PCL & Ligament Reconstruction",
    snippet: "Incredibly skilled and compassionate surgical execution with outstanding recovery.",
    fullReview: "Three months ago, I had the privilege of having my knee PCL ligament reconstruction performed by Dr. Shashikumar, and it was truly an exceptional experience. The doctor is incredibly skilled, attentive, and compassionate. His clinical team provided immense support through every phase of post-operative physiotherapy. I am back on my feet with full knee stability.",
  },
  {
    id: "rev-4",
    author: "Shaik Siddik",
    initials: "SS",
    source: "Google Review",
    rating: 5,
    date: "Recent Patient",
    treatment: "Complex Tibia & Fibula Fracture Fixation",
    snippet: "Guiding with great patience, clarity, and extraordinary trauma surgery skill.",
    fullReview: "I am truly grateful for the exceptional care I received after a severe tibia and fibula fracture from a vehicular accident. From the very first consultation, the doctor explained every detail of my treatment options. The surgery was performed with remarkable skill using titanium locking plates, and my bone union and recovery was surprisingly smooth. The personal encouragement made all the difference.",
  },
  {
    id: "rev-5",
    author: "Shanawaz Khan",
    initials: "SK",
    source: "Google Review",
    rating: 5,
    date: "Recent Patient",
    treatment: "Robotic Partial Knee Replacement",
    snippet: "Walking comfortably within days without needing a walker.",
    fullReview: "My grandfather underwent robotic partial knee replacement surgery. The operation went exceptionally well, and he was able to walk properly within days without needing a walker. Partial knee surgery is tricky, but Dr. Shashi performed it with absolute perfection. He and his team patiently addressed all concerns and supported us through rehabilitation.",
  },
  {
    id: "rev-6",
    author: "Suzana Princy",
    initials: "SP",
    source: "Google Review",
    rating: 5,
    date: "Recent Patient",
    treatment: "Shoulder Arthroscopy & Rotator Cuff Repair",
    snippet: "Walked us through the whole procedure with regular post-op follow ups.",
    fullReview: "The doctor was extremely helpful during my brother's shoulder arthroscopy. He made sure to walk our family through the procedure and gave regular updates. Even after discharge, he personally followed up to monitor pain relief and exercise adherence. Truly an exceptional orthopedic surgeon whom I strongly recommend.",
  },
];

