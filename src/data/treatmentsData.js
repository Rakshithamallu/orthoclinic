/**
 * Treatments, Conditions, Facilities, and Patient Journey Data
 * Derived from drshashiorthoclinic.com
 */


const BASE = process.env.PUBLIC_URL || '';
export const TREATMENT_CATEGORIES = [
  {
    id: "knee",
    name: "Knee Arthroscopy",
    shortTitle: "Knee Surgery",
    badge: "Keyhole Precision",
    image: `${BASE}/assets/images/knee-anatomy-clean.jpg`,
    summary: "Minimally invasive keyhole procedures for knee ligament tears, meniscus injuries, cartilage damage, and patellar instability.",
    treatments: [
      {
        title: "ACL / PCL Reconstruction",
        description: "Anatomical reconstruction of torn anterior or posterior cruciate ligaments using autologous tendon grafts with anatomical tunnel placement for rapid athletic recovery.",
        indications: "Sports pivoting injuries, knee giving way, athletic instability.",
        type: "Arthroscopic Keyhole Surgery",
      },
      {
        title: "Meniscus Repair & Preservation",
        description: "Advanced all-inside and inside-out meniscal repair techniques to preserve natural shock-absorbing fibrocartilage and halt premature joint degeneration.",
        indications: "Meniscal tears, knee locking, joint line tenderness.",
        type: "Joint Preservation",
      },
      {
        title: "Multi-Ligament Knee Injury Management",
        description: "Complex single-stage or staged reconstruction of multi-ligament knee dislocations involving ACL, PCL, MCL, and posterolateral corner (PLC).",
        indications: "High-energy trauma, vehicular accidents, severe knee dislocation.",
        type: "Complex Knee Reconstruction",
      },
      {
        title: "MPFL Reconstruction",
        description: "Medial Patellofemoral Ligament reconstruction for recurrent kneecap dislocations to restore normal patellar tracking and prevent joint degradation.",
        indications: "Recurrent patellar dislocation, kneecap instability.",
        type: "Patellar Stabilization",
      },
      {
        title: "Cartilage Transplantation (OATS Procedure)",
        description: "Osteochondral Autograft Transfer System (OATS) to replace isolated cartilage defects with healthy osteochondral plugs, restoring seamless joint gliding.",
        indications: "Full-thickness cartilage defects, focal chondral lesions.",
        type: "Biologic Cartilage Restoration",
      },
    ],
  },
  {
    id: "shoulder",
    name: "Shoulder Arthroscopy",
    shortTitle: "Shoulder Care",
    badge: "Specialized Arthroscopy",
    image: `${BASE}/assets/images/shoulder-anatomy-clean.jpg`,
    summary: "Keyhole arthroscopic interventions to repair torn tendons, stabilize recurrent shoulder dislocations, and relieve chronic shoulder pain.",
    treatments: [
      {
        title: "Rotator Cuff Repair",
        description: "Arthroscopic suture anchor fixation of supraspinatus and subscapularis tendon tears to restore painless overhead arm elevation and strength.",
        indications: "Night shoulder pain, inability to lift arm, rotator cuff tears.",
        type: "Keyhole Tendon Repair",
      },
      {
        title: "SLAP Lesion Repair",
        description: "Precision arthroscopic re-attachment of superior labral tears from anterior to posterior, stabilizing the long head of the biceps anchor.",
        indications: "Overhead throwing athletes, shoulder popping, deep joint ache.",
        type: "Labral Restoration",
      },
      {
        title: "Bankart Lesion Repair",
        description: "Minimally invasive capsulolabral reconstruction for anterior shoulder instability to anchor the torn labrum back onto the glenoid rim.",
        indications: "Recurrent shoulder dislocations, post-traumatic joint laxity.",
        type: "Stabilization Surgery",
      },
      {
        title: "Latarjet Procedure",
        description: "Bony coracoid bone block transfer to reconstruct anterior glenoid bone loss in high-demand contact athletes with severe recurrent instability.",
        indications: "Significant glenoid bone loss, failed previous soft-tissue repairs.",
        type: "Bony Stabilization",
      },
    ],
  },
  {
    id: "joint-replacement",
    name: "Joint Replacement",
    shortTitle: "Joint Replacement",
    badge: "Robotic & Conventional",
    image: `${BASE}/assets/images/joint-replacement-clean.jpg`,
    summary: "State-of-the-art joint replacement for severe arthritis, avascular necrosis, and joint degradation using robotic-assisted and conventional techniques.",
    treatments: [
      {
        title: "Total Knee Replacement (TKR)",
        description: "Precision resurfacing of arthritic knee surfaces using high-grade biocompatible implants, aligning the mechanical axis for natural flexion and stability.",
        indications: "Severe osteoarthritis, debilitating knee pain, bow-leg deformity.",
        type: "Robotic / Conventional Arthroplasty",
      },
      {
        title: "Total Hip Replacement (THR)",
        description: "Replacement of degenerated acetabulum and femoral head with ceramic-on-polyethylene bearing surfaces for seamless mobility.",
        indications: "Avascular Necrosis (AVN) of femoral head, severe hip arthritis.",
        type: "Hip Arthroplasty",
      },
      {
        title: "Hemiarthroplasty",
        description: "Targeted replacement of only the fractured or damaged femoral head while preserving the natural acetabulum, ideal for elderly hip fractures.",
        indications: "Femoral neck fractures in elderly patients requiring quick mobilization.",
        type: "Partial Hip Arthroplasty",
      },
      {
        title: "Total Shoulder Arthroplasty",
        description: "Anatomical ball-and-socket replacement for glenohumeral osteoarthritis with intact rotator cuff tendons to restore pain-free motion.",
        indications: "End-stage shoulder osteoarthritis with intact rotator cuff.",
        type: "Anatomical Shoulder Replacement",
      },
      {
        title: "Reverse Shoulder Arthroplasty",
        description: "Biomechanical inversion of the shoulder joint geometry, enabling the deltoid muscle to power arm elevation when rotator cuff tendons are irreparably torn.",
        indications: "Cuff tear arthropathy, complex proximal humerus fractures.",
        type: "Reverse Arthroplasty",
      },
    ],
  },
  {
    id: "trauma-fracture",
    name: "Fracture & Trauma Care",
    shortTitle: "Fracture Care",
    badge: "Trauma Management",
    image: `${BASE}/assets/images/trauma-fracture-clean.jpg`,
    summary: "Comprehensive management of acute orthopedic fractures, from conservative plaster application to surgical internal fixation.",
    treatments: [
      {
        title: "Complex Orthopedic Fractures",
        description: "Systematic stabilization of multi-fragmentary fractures in long bones (femur, tibia, humerus, radius) using modern titanium locking plates and intramedullary nails.",
        indications: "High-impact accidents, vehicular trauma, falls.",
        type: "Trauma Fixation",
      },
      {
        title: "Intra-Articular Fractures",
        description: "Anatomical joint surface reconstruction using fluoroscopic guidance to prevent post-traumatic arthritis and preserve long-term joint motion.",
        indications: "Fractures extending into the knee, ankle, wrist, or elbow joint.",
        type: "Articular Reconstruction",
      },
      {
        title: "Conservative Plaster (POP) & Splinting",
        description: "Non-surgical closed fracture reduction and maintenance with precision Plaster of Paris (POP) or fiberglass casts, avoiding surgery whenever clinically sound.",
        indications: "Non-displaced or stable fractures suitable for conservative care.",
        type: "Non-Surgical Care",
      },
      {
        title: "Surgical Fracture Fixation",
        description: "Minimally invasive plate osteosynthesis (MIPO) and interlocking nailing when rigid internal stabilization is mandatory for bone union.",
        indications: "Displaced, unstable, or open fractures requiring surgical fixation.",
        type: "Internal Fixation",
      },
    ],
  },
  {
    id: "spine",
    name: "Spine Care",
    shortTitle: "Spine Care",
    badge: "Conservative & Surgical",
    image: `${BASE}/assets/images/spine-anatomy-clean.jpg`,
    summary: "Targeted evaluation and treatment of cervical and lumbar spine problems, prioritizing conservative relief before surgical consideration.",
    treatments: [
      {
        title: "Conservative Back & Neck Pain Care",
        description: "Evidence-based management combining targeted medications, core-strengthening physical therapy, postural ergonomics, and lifestyle modification.",
        indications: "Chronic mechanical low back pain, cervical spondylosis, muscle spasms.",
        type: "Non-Surgical Management",
      },
      {
        title: "Lumbar Discectomy",
        description: "Precision decompression of herniated spinal discs pressing against spinal nerves, resolving acute sciatica and leg weakness.",
        indications: "Herniated lumbar disc, severe sciatica radiating down the leg.",
        type: "Spinal Decompression",
      },
      {
        title: "Instrumentation & Stabilization",
        description: "Spinal pedicle screw fixation and fusion for spondylolisthesis, spinal instability, or structural trauma.",
        indications: "Spinal instability, spondylolisthesis, traumatic spinal fractures.",
        type: "Spine Stabilization",
      },
      {
        title: "Minimally Invasive Spine Surgery (MISS)",
        description: "Tubular retractor-assisted decompression preserving paraspinal muscles for smaller incisions, reduced post-op pain, and rapid recovery.",
        indications: "Lumbar spinal canal stenosis, single-level disc herniations.",
        type: "Minimally Invasive Spine",
      },
    ],
  },
  {
    id: "ankle-foot",
    name: "Ankle & Foot Injury",
    shortTitle: "Foot & Ankle",
    badge: "Mobility Restoration",
    image: `${BASE}/assets/images/ankle-foot-clean.jpg`,
    summary: "Expert treatment for athletic ankle sprains, Achilles tendon ruptures, syndesmotic tears, and foot fracture management.",
    treatments: [
      {
        title: "Ankle Ligament Reconstruction",
        description: "Anatomical repair and augmentation of the anterior talofibular ligament (ATFL) for chronic rolling and lateral ankle instability.",
        indications: "Chronic ankle giving way, repetitive inversion sprains.",
        type: "Ligament Stabilization",
      },
      {
        title: "Achilles Tendon Repair",
        description: "Minimally invasive or open surgical repair of acute Achilles tendon ruptures followed by accelerated functional rehabilitation.",
        indications: "Sudden popping sensation in back of heel, inability to push off foot.",
        type: "Tendon Restoration",
      },
      {
        title: "Ankle Arthroscopy",
        description: "Keyhole diagnostic and therapeutic inspection of the ankle joint to treat osteochondral lesions of the talus, bone spurs, and impingement.",
        indications: "Persistent deep ankle pain, anterior ankle impingement.",
        type: "Keyhole Ankle Surgery",
      },
    ],
  },
  {
    id: "arthritis",
    name: "Rheumatoid & Joint Arthritis",
    shortTitle: "Arthritis Care",
    badge: "Joint Preservation",
    image: `${BASE}/assets/images/arthritis-clean.jpg`,
    summary: "Comprehensive clinical protocols combining medical disease management, intra-articular therapies, and surgical options for chronic arthritis.",
    treatments: [
      {
        title: "Rheumatoid Arthritis Clinical Protocols",
        description: "Holistic joint preservation protocols coordinating medical disease modification, inflammation control, and tailored low-impact mobility therapy.",
        indications: "Morning stiffness, multiple inflamed joints, rheumatoid disease.",
        type: "Systemic Joint Care",
      },
      {
        title: "Joint Injections & Viscosupplementation",
        description: "Ultrasound-guided targeted joint lubrications and anti-inflammatory therapies to restore mobility in mild to moderate degenerative arthritis.",
        indications: "Early to mid-stage osteoarthritis, inflammation flare-ups.",
        type: "Conservative Intervention",
      },
      {
        title: "Deformity Correction & Realignment",
        description: "Surgical osteotomies (such as High Tibial Osteotomy) to shift mechanical loading away from worn joint compartments, deferring joint replacement in younger patients.",
        indications: "Unicompartmental knee arthritis with angular deformity.",
        type: "Joint Preservation Osteotomy",
      },
    ],
  },
];

export const CONDITIONS = [
  {
    id: "knee-problems",
    title: "Knee Problems",
    icon: "knee",
    tagline: "ACL, Meniscus & Degeneration",
    description: "From sports ligament tears (ACL/PCL) to age-related degenerative cartilage loss, accurate diagnosis and early intervention restore stable joint kinematics.",
    symptoms: ["Knee buckling / giving way", "Swelling after sports", "Clicking or locking sensation", "Pain during stairs or squats"],
    solution: "Arthroscopic reconstruction, meniscus repair, or cartilage preservation.",
  },
  {
    id: "shoulder-problems",
    title: "Shoulder Problems",
    icon: "shoulder",
    tagline: "Rotator Cuff & Instability",
    description: "Shoulder pain during overhead reach, nocturnal aching, or recurrent dislocations require specialized arthroscopic repair and muscular rebalancing.",
    symptoms: ["Severe night pain sleeping on shoulder", "Weakness lifting arm overhead", "Dislocating or slipping feeling", "Loss of rotational mobility"],
    solution: "Keyhole rotator cuff repair, Bankart labral repair, or shoulder arthroplasty.",
  },
  {
    id: "sports-injuries",
    title: "Sports Injuries",
    icon: "running",
    tagline: "Athletic Trauma & Return-to-Play",
    description: "Rapid, precise diagnostic assessment and functional rehab plans designed specifically for competitive athletes and active individuals.",
    symptoms: ["Sudden pop during cutting maneuver", "Acute joint swelling", "Inability to bear weight", "Recurrent sprains"],
    solution: "Minimally invasive keyhole surgeries coupled with structured sports rehabilitation.",
  },
  {
    id: "joint-replacement-care",
    title: "Joint Replacement",
    icon: "joint",
    tagline: "End-Stage Arthritis Care",
    description: "Conventional and robotic-assisted total joint replacement for worn knee, hip, and shoulder joints with personalized kinematic alignment.",
    symptoms: ["Persistent pain limiting daily walking", "Stiffness after resting", "Bow legs or knock knees", "Failure of medications & therapy"],
    solution: "Robotic or conventional knee, hip, and shoulder arthroplasty.",
  },
  {
    id: "spine-conditions",
    title: "Spine Problems",
    icon: "spine",
    tagline: "Back & Neck Pain, Sciatica",
    description: "Root-cause diagnosis of disc herniation, spinal canal stenosis, and posture-induced pain with an initial focus on conservative non-surgical care.",
    symptoms: ["Shooting electric pain down legs", "Numbness or tingling in toes", "Persistent morning stiffness in neck/back", "Muscle spasms"],
    solution: "Medications, targeted physiotherapy, or minimally invasive decompression.",
  },
  {
    id: "fractures-trauma",
    title: "Fractures & Trauma",
    icon: "bone",
    tagline: "Emergency & Complex Fixations",
    description: "Expert trauma management for simple and multi-fragmentary fractures with gentle plaster casting or titanium anatomical fixation.",
    symptoms: ["Sudden deformity after fall", "Severe localized tenderness", "Bruising and rapid swelling", "Loss of limb function"],
    solution: "Closed plaster reduction or surgical internal fixation (MIPO/Nailing).",
  },
  {
    id: "ankle-injuries",
    title: "Ankle & Foot Injuries",
    icon: "foot",
    tagline: "Sprains, Achilles & Instability",
    description: "Treatment for recurring ankle inversion sprains, Achilles tendon ruptures, and foot trauma to restore natural push-off power.",
    symptoms: ["Chronic rolling of the ankle", "Inability to stand on tiptoes", "Pain along the Achilles tendon", "Persistent joint stiffness"],
    solution: "Ankle ligament repair, tendon restoration, or keyhole ankle arthroscopy.",
  },
  {
    id: "rheumatoid-arthritis",
    title: "Rheumatoid Arthritis",
    icon: "hand",
    tagline: "Inflammatory Joint Disease",
    description: "Comprehensive medical disease modulation, joint preservation strategies, and deformity correction for chronic inflammatory arthritis.",
    symptoms: ["Symmetrical joint swelling in hands & feet", "Morning stiffness exceeding 1 hour", "Fatigue and joint heat", "Progressive finger deviation"],
    solution: "Multidisciplinary medical management, local injections, and corrective surgery.",
  },
];

export const CLINIC_FACILITIES = [
  {
    id: "consultation",
    title: "Orthopedic Consultation",
    badge: "Clinical Precision",
    description: "Comprehensive in-depth physical examination, biomechanical gait evaluation, joint range-of-motion testing, and patient history review with Dr. Shashikumar M S.",
    icon: "consultation",
    features: ["45-60 min thorough clinical assessment", "Treatment roadmap & non-surgical priority", "Direct surgeon interaction"],
  },
  {
    id: "digital-xray",
    title: "Digital X-Ray",
    badge: "Instant Diagnostics",
    description: "High-resolution low-radiation digital radiography for immediate skeletal imaging, joint alignment assessment, and rapid fracture detection.",
    icon: "xray",
    features: ["Instant high-resolution imaging", "Low radiation exposure protocols", "Immediate on-site radiological review"],
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy & Rehab",
    badge: "Active Recovery",
    description: "Dedicated physical rehabilitation protocols focused on restoring muscle strength, joint mobility, posture correction, and sports return-to-play training.",
    icon: "physio",
    features: ["Targeted muscle re-education", "Post-surgical recovery protocols", "Ergonomic & posture correction"],
  },
  {
    id: "plaster-pop",
    title: "Plaster / POP Application",
    badge: "Trauma Care",
    description: "Expert casting and splinting services including traditional Plaster of Paris (POP) and lightweight fiberglass casts for optimal fracture immobilization.",
    icon: "cast",
    features: ["Precise anatomical molding", "Lightweight waterproof options", "Pain-free cast removal & follow-up"],
  },
  {
    id: "dressing",
    title: "Minor Procedures & Dressing",
    badge: "Sterile Care",
    description: "Hygienic, sterile wound care, post-surgical suture removal, antiseptic dressings, and minor outpatient orthopedic procedures.",
    icon: "dressing",
    features: ["Aseptic surgical technique", "Specialized wound healing dressings", "Fast & painless care"],
  },
];

export const PATIENT_JOURNEY = [
  {
    step: "01",
    phase: "Comprehensive Consultation",
    title: "Understand Your Condition",
    description: "Detailed evaluation of your symptoms, pain triggers, lifestyle demands, and prior medical history. We listen first to thoroughly understand the root cause.",
    action: "Physical examination & joint mobility tests",
  },
  {
    step: "02",
    phase: "Precision Diagnosis",
    title: "Diagnosis & Treatment Planning",
    description: "Integrating diagnostic imaging (digital X-ray / MRI review) to formulate a tailored, transparent treatment plan prioritizing conservative options before surgery.",
    action: "Personalized roadmap with surgical vs non-surgical options",
  },
  {
    step: "03",
    phase: "Guided Recovery",
    title: "Treatment & Dedicated Follow-Up",
    description: "Execution of advanced surgical intervention or guided non-surgical therapy with active rehabilitation support to restore full strength and joyful movement.",
    action: "Progress monitoring until full functional return",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Orthopedic Specialist",
    description: "Led by Dr. Shashikumar M S with over 8+ years of dedicated surgical experience and three advanced post-graduate fellowships.",
    stat: "8+",
    statLabel: "Years Clinical Experience",
  },
  {
    title: "Advanced Orthopedic Treatments",
    description: "Utilizing modern keyhole arthroscopy, robotic-assisted joint replacement technology, and biological joint preservation methods.",
    stat: "2,000+",
    statLabel: "Surgeries Every Year",
  },
  {
    title: "Surgical & Non-Surgical Balance",
    description: "We believe in preserving natural anatomy. Surgery is recommended only when conservative care has been thoroughly explored or strictly indicated.",
    stat: "3,000+",
    statLabel: "Patients Treated",
  },
  {
    title: "Patient-Focused Care",
    description: "Compassionate, transparent clinical guidance in Mysuru where patient comfort, informed decision-making, and long-term recovery come first.",
    stat: "100%",
    statLabel: "Dedicated Care Standard",
  },
];
