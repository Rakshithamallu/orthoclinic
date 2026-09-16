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
