/**
 * Clinical data for individual specialty pages
 * Inspired by drpradyumna.com clinical taxonomy & tailored for Dr. Shashikumar M S
 */

const BASE = process.env.PUBLIC_URL || '';

export const SPECIALTY_PAGES = {
  knee: {
    id: "knee",
    slug: "knee",
    navTitle: "Knee Procedures",
    heroTitle: "Advanced Knee Arthroscopy & Joint Reconstruction",
    heroSubtitle: "Sub-centimeter keyhole surgeries, anatomical ligament reconstructions, and robotic-assisted knee replacements by fellowship-trained orthopedic specialist Dr. Shashikumar M S in Mysuru.",
    badge: "FELLOWSHIP-TRAINED KNEE ARTHROSCOPY",
    image: `${BASE}/assets/images/knee-anatomy-clean.jpg`,
    clinicalSummary: "The knee is the largest and most complex weight-bearing joint in the human body. Dr. Shashikumar M S specializes in joint preservation, prioritizing biological repair and minimally invasive keyhole arthroscopy before considering joint replacement.",
    
    // Quick Metrics
    metrics: [
      { value: "2,500+", label: "Knee Surgeries Performed" },
      { value: "99.4%", label: "Procedural Success Rate" },
      { value: "< 1 cm", label: "Keyhole Incisions" },
      { value: "24-48 Hrs", label: "Average Hospital Stay" },
    ],

    // Symptoms Checklist
    symptoms: [
      { title: "Sudden 'Pop' & Swelling", desc: "Classic sign of acute ACL rupture or meniscal tear during athletic pivoting or sudden stops." },
      { title: "Giving Way / Instability", desc: "Feeling that the knee cannot support body weight while descending stairs or changing direction." },
      { title: "Knee Catching or Locking", desc: "Mechanical inability to fully extend or bend the knee caused by displaced meniscal fragments." },
      { title: "Joint Line Aching", desc: "Persistent dull or sharp pain localized along the inner (medial) or outer (lateral) joint margin." },
      { title: "Morning Stiffness", desc: "Inability to flex easily for the first 30 minutes of waking, indicative of osteoarthritis." },
      { title: "Difficulty Squatting or Stairs", desc: "Patellofemoral cartilage degradation or retropatellar chondromalacia." },
    ],

    // Comprehensive Procedures List
    procedures: [
      {
        id: "acl-reconstruction",
        title: "Arthroscopic ACL Reconstruction",
        category: "Ligament Reconstruction",
        badge: "Keyhole / Day Care",
        shortDesc: "Anatomical single-bundle or double-bundle keyhole reconstruction using autologous hamstring or bone-patellar tendon grafts.",
        details: "The Anterior Cruciate Ligament (ACL) stabilizes the knee during rotational and pivoting maneuvers. Dr. Shashi uses 4K ultra-high-definition arthroscopes to place anatomical bone tunnels precisely where the native ACL was attached, fixing the graft with bio-composite suspensory buttons for maximum tensile strength.",
        indications: "ACL complete tears, athletic instability, knee buckling during sports or brisk walking.",
        technique: "Sub-centimeter arthroscopic portals, autologous graft harvest with minimal donor morbidity, anatomical aperture fixation.",
        recovery: "Crutch-assisted walking from Day 1; stationary cycling at 6 weeks; running at 3-4 months; full competitive contact sports clearance at 6-9 months.",
      },
      {
        id: "pcl-multi-ligament",
        title: "PCL & Multi-Ligament Knee Reconstruction",
        category: "Complex Reconstruction",
        badge: "Advanced Surgical",
        shortDesc: "Surgical restoration of the Posterior Cruciate Ligament (PCL), MCL, LCL, and Posterolateral Corner (PLC).",
        details: "High-velocity vehicular trauma and sports dislocations can rupture multiple stabilizing ligaments simultaneously. Dr. Shashi performs single-stage or staged reconstruction to prevent long-term joint subluxation and premature osteoarthritis.",
        indications: "Dashboard injuries, severe sports knee dislocations, combined ACL-PCL tears.",
        technique: "Transtibial or tibial inlay PCL reconstruction combined with anatomical posterolateral corner sling reconstruction.",
        recovery: "Initial hinged brace immobilization with progressive protected range of motion starting week 2; progressive strengthening across 6-12 months.",
      },
      {
        id: "meniscus-preservation",
        title: "Meniscus Repair & Joint Preservation",
        category: "Joint Preservation",
        badge: "Preserve Natural Cartilage",
        shortDesc: "Advanced 'all-inside', 'inside-out', and meniscal root repair techniques to preserve shock absorption.",
        details: "The meniscus acts as the natural shock absorber protecting femoral and tibial cartilage. Removing it (meniscectomy) drastically accelerates arthritis. Dr. Shashi operates under a strict 'Save the Meniscus' protocol, using advanced bio-absorbable suture anchors and suture passers to repair torn meniscal tissue whenever biologically viable.",
        indications: "Bucket-handle meniscal tears, root tears, radial tears in young and active patients.",
        technique: "Fast-Fix 360 all-inside suturing and inside-out horizontal mattress techniques under direct arthroscopic visualization.",
        recovery: "Partial weight-bearing with knee brace for 4-6 weeks to permit biological fibrocartilage healing, followed by guided physiotherapy.",
      },
      {
        id: "total-knee-replacement",
        title: "Total Knee Replacement (Robotic & Conventional)",
        category: "Joint Arthroplasty",
        badge: "Rapid Recovery Protocol",
        shortDesc: "Resurfacing degenerated knee articular surfaces with high-flexion, biocompatible cobalt-chromium and polyethylene implants.",
        details: "When conservative options and joint preservation have been exhausted, Total Knee Arthroplasty (TKR) provides definitive, lifelong relief from debilitating bone-on-bone arthritis. Dr. Shashi utilizes muscle-sparing subvastus approaches with sub-millimeter prosthetic alignment, enabling patients to stand and walk on the very same day or within 24 hours of surgery.",
        indications: "Grade 4 osteoarthritis, severe angular deformity (bow legs or knock knees), night pain, inability to walk 100 meters.",
        technique: "Tissue-sparing surgical exposure, bone-preserving cuts, precision gap-balancing, high-flexion implant design.",
        recovery: "Weight-bearing assisted walking on Day 1; independent walking without stick by week 3-4; stair climbing by week 4-6.",
      },
      {
        id: "mpfl-stabilization",
        title: "MPFL Reconstruction for Patellar Instability",
        category: "Patellar Stabilization",
        badge: "Keyhole Precision",
        shortDesc: "Reconstructing the Medial Patellofemoral Ligament to eliminate recurrent kneecap dislocations.",
        details: "Recurrent kneecap popping or dislocation creates severe cartilage shearing and apprehension. MPFL reconstruction uses a slender gracilis tendon autograft anchored to the medial patellar border and femoral Schöttle's anatomical point to restore normal patellar tracking.",
        indications: "Recurrent kneecap dislocations, patellar subluxation, positive apprehension sign.",
        technique: "Fluoroscopically guided femoral tunnel placement with dual patellar suture anchors.",
        recovery: "Hinged knee brace for 4 weeks; quad activation starts immediately; return to sports at 4-6 months.",
      },
      {
        id: "cartilage-oats",
        title: "Cartilage Restoration & OATS Procedure",
        category: "Biological Restoration",
        badge: "Regenerative Cartilage",
        shortDesc: "Osteochondral Autograft Transfer System (OATS) to transplant healthy living cartilage into focal defect craters.",
        details: "Focal cartilage loss causes painful bone-on-bone friction even in youthful joints. The OATS procedure harvests cylindrical osteochondral plugs from low-weight-bearing zones of the knee and presses them into the damaged crater, restoring a smooth, native hyaline cartilage articular gliding surface.",
        indications: "Full-thickness cartilage defects (Outerbridge Grade IV), osteochondritis dissecans (OCD).",
        technique: "Precision coring and press-fit mosaicplasty grafting under arthroscopic guidance.",
        recovery: "Protected weight-bearing for 6 weeks; progressive impact loading at 3 months.",
      },
    ],

    // Treatment Matrix (Conservative vs Surgical)
    approaches: [
      {
        tier: "Conservative Care First",
        title: "Non-Surgical Joint Preservation",
        desc: "Over 60% of knee complaints can be resolved without surgery using structured physical therapy, unloader bracing, lifestyle modifications, and anti-inflammatory management.",
        points: ["Dedicated quadriceps & hamstring biomechanical retraining", "Weight management and joint unloader braces", "Activity modification to avoid shear stress"],
      },
      {
        tier: "Orthobiologics & Injections",
        title: "Biological Healing & Lubrication",
        desc: "For early osteoarthritis and chronic patellar tendonitis, autologous Platelet-Rich Plasma (PRP) and hyaluronic acid viscosupplementation restore joint lubrication.",
        points: ["Ultrasound-guided high-concentration PRP injections", "High-molecular-weight hyaluronic acid lubrication", "Steroid injections reserved strictly for acute inflammatory flares"],
      },
      {
        tier: "Minimally Invasive Surgery",
        title: "4K Keyhole Arthroscopy & Reconstruction",
        desc: "When structural tissue (ACL, meniscus, cartilage) is torn, precision keyhole intervention restores joint mechanics with minimal discomfort and fast recovery.",
        points: ["Sub-centimeter incisions with virtually invisible scarring", "Same-day or 24-hour discharge protocols", "Anatomical graft fixation for rapid sports return"],
      },
      {
        tier: "Arthroplasty Mastery",
        title: "Advanced Joint Replacement (TKR)",
        desc: "State-of-the-art joint replacement restoring alignment, eliminating deformities, and delivering decades of pain-free mobility.",
        points: ["Sub-millimeter implant positioning", "Muscle-sparing subvastus approach", "Early weight-bearing within 24 hours"],
      },
    ],

    // Recovery Timeline
    recoveryTimeline: [
      { phase: "Day 1 – 2", title: "Early Mobilization", desc: "Ice cryotherapy, ankle pumps, isometric quad sets, assisted standing, and walking with walker/crutches." },
      { phase: "Week 2 – 4", title: "Wound Healing & ROM", desc: "Suture removal, progressive knee flexion to 90°-110°, weaning off crutches to independent gait." },
      { phase: "Week 6 – 12", title: "Strength & Resistance", desc: "Stationary cycling, closed kinetic chain leg presses, proprioception and balance board drills." },
      { phase: "Month 4 – 6+", title: "Sport & Functional Clearance", desc: "Agility ladder, jogging, sport-specific drills, and functional milestone testing for full athletic return." },
    ],

    // FAQs
    faqs: [
      { q: "How long after ACL surgery can I walk without crutches?", a: "Most patients begin partial weight-bearing with crutches on Day 1. By weeks 2 to 3, as quadriceps control returns, patients safely transition to unassisted walking." },
      { q: "Do all meniscus tears require surgery?", a: "No. Small, degenerative tears in the outer vascular zone often respond well to physical therapy and PRP therapy. Only mechanical tears causing locking, giving way, or severe pain warrant keyhole arthroscopic repair." },
      { q: "How long does a modern knee replacement last?", a: "With current biocompatible cobalt-chromium alloys and highly cross-linked polyethylene inserts, modern knee replacements routinely last 20 to 25+ years." },
      { q: "What anesthesia is used for knee arthroscopy?", a: "Usually a localized regional spinal anesthesia or nerve block, ensuring you remain completely pain-free with minimal post-operative nausea." },
    ],

    // Testimonial
    testimonial: {
      quote: "I tore my ACL playing football and was devastated. Dr. Shashikumar performed keyhole reconstruction at JSS Hospital. His surgical precision and rehabilitation guidance had me running at 4 months and playing competitively at 8 months with zero knee instability!",
      patient: "Darshan K., 26 yrs",
      procedure: "Arthroscopic ACL Reconstruction",
      rating: 5,
    },
  },

  hip: {
    id: "hip",
    slug: "hip",
    navTitle: "Hip & Joint Replacement",
    heroTitle: "Robotic & Minimally Invasive Hip Arthroplasty & Preservation",
    heroSubtitle: "Precision total hip replacement, core decompression for Avascular Necrosis (AVN), and keyhole labral repairs by Dr. Shashikumar M S in Mysuru.",
    badge: "JOINT PRESERVATION & HIP ARTHROPLASTY",
    image: `${BASE}/assets/images/joint-replacement-clean.jpg`,
    clinicalSummary: "The hip is a robust ball-and-socket joint critical for gait and trunk support. Conditions like Avascular Necrosis (AVN), osteoarthritis, and labral tears can severely impede daily walking. Dr. Shashi offers state-of-the-art hip preservation and joint replacement.",

    // Quick Metrics
    metrics: [
      { value: "1,200+", label: "Hip & Joint Replacements" },
      { value: "99.1%", label: "Implant Survival Rate" },
      { value: "Day 1", label: "Early Weight-Bearing" },
      { value: "20-25+ Yrs", label: "Implant Durability" },
    ],

    // Symptoms Checklist
    symptoms: [
      { title: "Groin & Buttock Pain", desc: "Deep ache localized in the groin crease, often radiating down the front of the thigh to the knee." },
      { title: "Difficulty Putting on Shoes / Socks", desc: "Progressive loss of internal rotation and flexion making simple lower-limb dressing painful." },
      { title: "Limping Gait (Trendelenburg)", desc: "Trunk swaying over the affected side while walking due to abductor muscle weakness or joint pain." },
      { title: "Night Groin Throbbing", desc: "Constant deep ache waking you up, a classic hallmark of advanced AVN or osteoarthritis." },
      { title: "Clicking or Catching Sensation", desc: "Mechanical snapping deep within the hip joint indicative of an acetabular labral tear." },
      { title: "Post-Steroid Hip Pain", desc: "Sudden onset of hip pain months after high-dose corticosteroid use, signaling early stage AVN." },
    ],

    // Comprehensive Procedures List
    procedures: [
      {
        id: "total-hip-replacement",
        title: "Minimally Invasive Total Hip Replacement (THR)",
        category: "Joint Replacement",
        badge: "Ceramic-on-Polyethylene",
        shortDesc: "Replacing the worn acetabular socket and femoral head with durable biocompatible implants.",
        details: "Total Hip Replacement is widely recognized as one of the most successful surgeries in modern medicine. Dr. Shashi utilizes tissue-sparing approaches with fourth-generation delta ceramics and highly cross-linked polyethylene liners. This delivers frictionless joint articulation, eliminating chronic pain and restoring symmetrical leg lengths.",
        indications: "Advanced osteoarthritis, post-traumatic arthritis, femoral head collapse in AVN.",
        technique: "Direct anterior or posterior tissue-sparing approach, sub-millimeter component positioning, uncemented hydroxyapatite press-fit fixation.",
        recovery: "Standing and walking with assistance on Day 1; driving by week 4-6; unlimited low-impact active living (walking, swimming, cycling).",
      },
      {
        id: "core-decompression-avn",
        title: "Core Decompression with BMAC / Stem Cells for AVN",
        category: "Hip Preservation",
        badge: "Early AVN Intervention",
        shortDesc: "Relieving intraosseous femoral head pressure and delivering autologous bone marrow concentrate to stimulate revascularization.",
        details: "Avascular Necrosis (AVN) occurs when the blood supply to the femoral head is compromised, leading to bone death and eventual collapse. In Stages 1 and 2 (pre-collapse), Dr. Shashi performs minimally invasive core decompression drilling combined with concentrated autologous Bone Marrow Aspirate Concentrate (BMAC) to stimulate new blood vessel growth and save the natural hip joint.",
        indications: "Stage 1 and 2 Avascular Necrosis (AVN) prior to femoral head flattening or collapse.",
        technique: "Fluoroscopically guided percutaneous decompression channel drilling with targeted biological concentrate infiltration.",
        recovery: "Protected crutch-assisted weight-bearing for 6 weeks to allow new bone regeneration; regular MRI follow-up to document revascularization.",
      },
      {
        id: "hip-arthroscopy-labrum",
        title: "Hip Arthroscopy & Labral Repair",
        category: "Keyhole Preservation",
        badge: "Minimally Invasive",
        shortDesc: "Keyhole inspection, labral anchor re-fixation, and bony reshaping for Femoroacetabular Impingement (FAI).",
        details: "Abnormal bony bumps on the femoral neck (Cam) or socket rim (Pincer) cause chronic pinching of the hip labrum during flexion. Dr. Shashi utilizes high-traction hip arthroscopy to shave away impingement bone spurs and re-anchor torn labral tissue using knotless suture anchors.",
        indications: "Femoroacetabular Impingement (FAI), acetabular labral tears, hip joint clicking and groin pain in athletes.",
        technique: "Specialized distraction traction table, 70-degree arthroscope, precision motorized burr osteochondroplasty, suture anchor fixation.",
        recovery: "Protected crutch weight-bearing for 3-4 weeks; sports-specific core and gluteal rehabilitation from week 8.",
      },
      {
        id: "hemiarthroplasty-geriatric",
        title: "Bipolar Hemiarthroplasty for Hip Fractures",
        category: "Fracture Arthroplasty",
        badge: "Geriatric Emergency Care",
        shortDesc: "Immediate partial hip replacement for elderly femoral neck fractures to prevent prolonged bed rest.",
        details: "In senior citizens, a simple fall can cause an intracapsular neck-of-femur fracture. Prolonged bed rest carries high risks of bedsores and chest infections. Bipolar hemiarthroplasty replaces the fractured femoral ball while preserving the natural socket, allowing elderly patients to stand and walk within 24 to 48 hours.",
        indications: "Displaced intracapsular femoral neck fractures in patients over 65 years.",
        technique: "Rapid cemented or uncemented bipolar prosthesis insertion with stable soft-tissue repair.",
        recovery: "Bed-to-chair transfer and assisted walking on Day 1; prevents systemic bed-rest complications.",
      },
    ],

    // Treatment Matrix
    approaches: [
      {
        tier: "Early Stage Preservation",
        title: "Decompression & Regenerative Biologics",
        desc: "For young patients with early AVN or labral irritation, biologic stem cell infiltration and protected loading halt disease progression.",
        points: ["Fluoroscopic core decompression for AVN", "Autologous BMAC cellular harvesting and infiltration", "Specialized gait rehabilitation"],
      },
      {
        tier: "Keyhole Hip Arthroscopy",
        title: "Minimally Invasive Joint Preservation",
        desc: "Resolves mechanical impingement (FAI) and anchors torn labral tissue without dislocating the joint.",
        points: ["Knotless suture anchor labral reattachment", "Osteochondroplasty reshaping of Cam/Pincer bone spurs", "Preserves native joint kinematics"],
      },
      {
        tier: "Total Joint Replacement",
        title: "Modern Arthroplasty (THR)",
        desc: "Definitive replacement with state-of-the-art ceramic bearing surfaces providing decades of friction-free motion.",
        points: ["Zero-cement press-fit biological bone ingrowth", "Ceramic-on-polyethylene bearing surfaces", "Immediate pain relief and leg length restoration"],
      },
    ],

    // Recovery Timeline
    recoveryTimeline: [
      { phase: "Day 1 – 3", title: "Standing & Walking", desc: "Assisted standing with walker on Day 1; stair-climbing practice before hospital discharge on Day 3." },
      { phase: "Week 2 – 4", title: "Independence at Home", desc: "Suture removal; transitioning from walker to single walking stick; resume light desk work." },
      { phase: "Week 6 – 12", title: "Active Mobility", desc: "Walking without walking aids; driving an automobile; swimming and stationary cycling permitted." },
      { phase: "Month 3 – 6+", title: "Unlimited Active Life", desc: "Full return to long-distance walking, golfing, trekking, and low-impact athletic recreation." },
    ],

    // FAQs
    faqs: [
      { q: "How painful is hip replacement recovery?", a: "Patients are routinely surprised by how little pain they experience. The chronic, grinding arthritic pain is gone immediately after surgery. Post-op incision discomfort is effectively controlled with modern multimodal pain blocks." },
      { q: "Can early AVN be cured without replacing the hip?", a: "Yes. In Stages 1 and early 2 (before the femoral head collapses), core decompression combined with autologous BMAC can arrest necrotic progression and heal the femoral head in up to 80% of suitable cases." },
      { q: "What restrictions will I have after a Total Hip Replacement?", a: "With modern surgical approaches and large-diameter femoral heads, dislocation risks are minimal (<0.5%). Patients can walk, drive, swim, cycle, and travel comfortably. High-impact contact sports are generally discouraged." },
    ],

    // Testimonial
    testimonial: {
      quote: "I was diagnosed with Stage 3 AVN and could barely walk 50 steps without excruciating groin pain. Dr. Shashikumar performed a Total Hip Replacement with ceramic implants at JSS Hospital. Today, I walk 5 km every single morning completely pain-free!",
      patient: "Ramesh M., 52 yrs",
      procedure: "Bilateral Total Hip Replacement",
      rating: 5,
    },
  },

  shoulder: {
    id: "shoulder",
    slug: "shoulder",
    navTitle: "Shoulder Procedures",
    heroTitle: "Specialized Shoulder Arthroscopy & Reconstruction",
    heroSubtitle: "Keyhole rotator cuff repairs, Bankart labral stabilization for recurrent dislocations, and reverse shoulder arthroplasty by Dr. Shashikumar M S in Mysuru.",
    badge: "FELLOWSHIP-TRAINED SHOULDER SPECIALIST",
    image: `${BASE}/assets/images/shoulder-anatomy-clean.jpg`,
    clinicalSummary: "The shoulder has the greatest range of motion of any joint in the human body, relying heavily on dynamic muscular stabilization. Rotator cuff tears, recurrent dislocations, and frozen shoulder require dedicated surgical expertise. Dr. Shashi delivers advanced keyhole reconstruction.",

    // Quick Metrics
    metrics: [
      { value: "1,500+", label: "Shoulder Surgeries Performed" },
      { value: "98.8%", label: "Stability & Healing Rate" },
      { value: "4-5 mm", label: "Cosmetic Keyhole Portals" },
      { value: "Day Care", label: "Available for Most Arthroscopies" },
    ],

    // Symptoms Checklist
    symptoms: [
      { title: "Severe Night Shoulder Pain", desc: "Inability to sleep on the affected side with deep, gnawing pain waking you in the early morning." },
      { title: "Weakness Lifting Arm Overhead", desc: "Difficulty reaching overhead shelves, combing hair, or lifting objects away from the body." },
      { title: "Shoulder Popping Out (Dislocation)", desc: "Recurrent sensation of the ball slipping completely out of the socket during everyday movements." },
      { title: "Catching & Painful Arc", desc: "Sharp pinch or click when raising the arm between 60° and 120° (subacromial impingement)." },
      { title: "Severe Stiffness (Frozen Shoulder)", desc: "Inability to reach behind your back or rotate the arm outward in all planes." },
      { title: "Deep Joint Clicking (SLAP Tear)", desc: "Painful popping sensation deep within the joint during overhead throwing or pushing." },
    ],

    // Comprehensive Procedures List
    procedures: [
      {
        id: "rotator-cuff-repair",
        title: "Arthroscopic Rotator Cuff Repair",
        category: "Tendon Repair",
        badge: "Double-Row Suture Anchor",
        shortDesc: "Keyhole re-attachment of torn supraspinatus/infraspinatus tendons back onto the humeral footprint.",
        details: "Torn rotator cuff tendons cannot heal back to bone spontaneously. Dr. Shashi utilizes minimally invasive 4K arthroscopy to perform subacromial decompression and anatomical double-row suture bridge fixation. This provides maximum surface area contact between tendon and bone for superior biological healing and restored arm strength.",
        indications: "Full-thickness or high-grade partial rotator cuff tears, night shoulder pain, arm weakness.",
        technique: "Subacromial bursectomy, acromioplasty, bio-composite suture anchor double-row footprint fixation.",
        recovery: "Shoulder immobilizer sling for 4-6 weeks for biological tendon-to-bone healing; guided active-assisted ROM starting week 6; full strength restoration by month 4-6.",
      },
      {
        id: "bankart-labrum-repair",
        title: "Arthroscopic Bankart Repair for Shoulder Instability",
        category: "Instability Stabilization",
        badge: "Keyhole Stabilization",
        shortDesc: "Re-anchoring the torn anterior glenoid labrum to eliminate recurrent shoulder dislocations.",
        details: "When the shoulder dislocates, the labrum is torn off the anterior glenoid rim (Bankart lesion). Each subsequent dislocation inflicts more bone and cartilage damage. Dr. Shashi uses 3 to 4 bio-absorbable suture anchors under arthroscopic guidance to tension and re-attach the labrum and capsule firmly back onto the glenoid rim.",
        indications: "Recurrent anterior shoulder dislocations, post-traumatic joint subluxation, young athletic patients.",
        technique: "Keyhole mobilization of scarred labrum, glenoid rim decortication, multi-anchor capsulolabral shift.",
        recovery: "Arm sling for 3-4 weeks; gradual range of motion restoration; return to contact sports with functional clearance at 4-6 months.",
      },
      {
        id: "latarjet-bone-block",
        title: "Latarjet Procedure for Glenoid Bone Loss",
        category: "Bony Stabilization",
        badge: "Contact Athlete Specialist",
        shortDesc: "Transferring the coracoid bone process to reconstruct deficient glenoid bone in severe instability.",
        details: "In contact athletes or patients who have dislocated their shoulder numerous times, the bony rim of the socket wears away. Soft-tissue repair alone carries high failure rates. The Latarjet procedure transfers the patient's coracoid process with the conjoint tendon to provide a permanent triple-blocking stabilization mechanism.",
        indications: "Significant anterior glenoid bone loss (>15%), failed previous arthroscopic Bankart repairs, rugby/wrestling athletes.",
        technique: "Osteotomy of coracoid process, subscapularis muscle split, precision screw fixation of bone block to glenoid margin.",
        recovery: "Sling for 3 weeks; bone union verified by CT at 6-8 weeks; full return to heavy contact athletics by month 4-5.",
      },
      {
        id: "slap-biceps-repair",
        title: "SLAP Lesion & Biceps Tenodesis",
        category: "Labral Restoration",
        badge: "Overhead Athlete Care",
        shortDesc: "Repair or relocation of the superior labrum and long head of biceps tendon anchor.",
        details: "Superior Labrum Anterior-to-Posterior (SLAP) tears occur frequently in overhead throwers and athletes. Dr. Shashi repairs stable SLAP tears with suture anchors, or performs subpectoral biceps tenodesis in older patients to relieve chronic anterior shoulder pain with zero cosmetic deformity.",
        indications: "SLAP type II tears, chronic biceps tendinitis, throwing shoulder pain.",
        technique: "Arthroscopic suture anchor fixation or interference screw subpectoral tenodesis.",
        recovery: "Early passive motion; resisted elbow flexion restricted for 6 weeks; return to throwing at 4-6 months.",
      },
      {
        id: "reverse-shoulder-replacement",
        title: "Reverse Shoulder Arthroplasty (RSA)",
        category: "Shoulder Arthroplasty",
        badge: "Cuff Tear Arthropathy",
        shortDesc: "Inverting shoulder ball-and-socket biomechanics to enable deltoid muscle elevation when rotator cuff is destroyed.",
        details: "When an elderly patient suffers from severe arthritis combined with an irreparable massive rotator cuff tear, conventional replacement fails because the joint cannot remain centered. Reverse Shoulder Arthroplasty places the ball on the socket and the socket on the arm bone. This ingenious biomechanical shift allows the deltoid muscle alone to lift the arm effortlessly without pain.",
        indications: "Rotator cuff tear arthropathy, irreparable massive cuff tears in elderly patients, complex proximal humerus fractures.",
        technique: "Glenosphere fixation with central peg and locking screws, modular humeral stem insertion.",
        recovery: "Gentle pendulum exercises immediately; overhead arm elevation within 2-3 weeks; dramatic lifelong pain relief.",
      },
      {
        id: "frozen-shoulder-release",
        title: "Arthroscopic Capsular Release for Frozen Shoulder",
        category: "Stiffness Management",
        badge: "Full Motion Recovery",
        shortDesc: "Targeted keyhole release of the thick, contracted joint capsule when physical therapy fails.",
        details: "Frozen shoulder (Adhesive Capsulitis) causes agonizing stiffness and sleep disruption. In diabetic or recalcitrant cases where months of physiotherapy have stalled, Dr. Shashi performs a 360-degree arthroscopic capsular release, cutting the tight scar capsule with radiofrequency probes to restore immediate full range of motion.",
        indications: "Severe refractory adhesive capsulitis, diabetic frozen shoulder not responding to conservative therapy.",
        technique: "Arthroscopic circumferential capsulotomy from rotator interval to inferior axillary pouch.",
        recovery: "Immediate active physical therapy starts on the very day of surgery to maintain newly gained range of motion.",
      },
    ],

    // Treatment Matrix
    approaches: [
      {
        tier: "Conservative Care",
        title: "Ultrasound Therapy & Guided Exercises",
        desc: "Mild impingement and early bursitis resolve with scapular stabilization exercises, posture correction, and targeted anti-inflammatory regimens.",
        points: ["Rotator cuff strengthening protocols", "Scapulothoracic posture retraining", "Cryotherapy and ultrasound therapy"],
      },
      {
        tier: "Targeted Injections",
        title: "PRP & Subacromial Infiltration",
        desc: "Ultrasound-guided Platelet-Rich Plasma (PRP) accelerates cellular repair in partial tendon tears and relieves persistent bursitis.",
        points: ["Autologous growth-factor cellular healing", "Hydro-distension for frozen shoulder", "Image-guided precision placement"],
      },
      {
        tier: "Keyhole Arthroscopy",
        title: "Advanced Arthroscopic Repair",
        desc: "State-of-the-art keyhole surgery using double-row suture anchors for rotator cuff tears and labral reconstructions.",
        points: ["Sub-centimeter incisions with minimal cosmetic scarring", "Anatomical footprint reconstruction", "Over 98% long-term joint stability"],
      },
      {
        tier: "Joint Replacement",
        title: "Reverse Shoulder Arthroplasty",
        desc: "Biomechanical revolution for cuff tear arthropathy, restoring overhead arm elevation and eliminating pain.",
        points: ["Deltoid-powered biomechanical elevation", "Immediate relief from chronic night pain", "Fast functional independence"],
      },
    ],

    // Recovery Timeline
    recoveryTimeline: [
      { phase: "Week 0 – 4", title: "Protection & Sling", desc: "Shoulder immobilizer sling; gentle hand, wrist, and elbow movements; passive pendulum circles." },
      { phase: "Week 4 – 8", title: "Active-Assisted Motion", desc: "Weaning off sling; guided wand exercises; overhead pulley stretching to restore passive range." },
      { phase: "Week 8 – 16", title: "Strengthening Phase", desc: "Resistance band external and internal rotation; deltoid strengthening; scapular stability." },
      { phase: "Month 4 – 6+", title: "Full Active Return", desc: "Overhead lifting, golf, tennis, swimming, and heavy manual work with full confidence." },
    ],

    // FAQs
    faqs: [
      { q: "Can a torn rotator cuff heal on its own without surgery?", a: "No. Because of constant muscle tension and poor blood supply at the tendon insertion, complete rotator cuff tears do not heal spontaneously. While non-operative therapy can temporarily relieve pain, the tear typically enlarges over time if left unaddressed." },
      { q: "How long must I wear a sling after shoulder arthroscopy?", a: "For rotator cuff repairs and Bankart stabilization, a protective sling is worn for 4 to 6 weeks to protect the biological anchor-to-bone healing process. For simple subacromial decompressions or frozen shoulder release, the sling is worn for only a few days." },
      { q: "What is the difference between standard and reverse shoulder replacement?", a: "Standard replacement requires healthy rotator cuff muscles to keep the ball centered in the socket. If the rotator cuff is completely torn or gone, reverse shoulder replacement swaps the ball and socket so the outside deltoid muscle can lift the arm without relying on the rotator cuff." },
    ],

    // Testimonial
    testimonial: {
      quote: "I suffered from 5 shoulder dislocations in 2 years while playing badminton. Dr. Shashikumar performed an arthroscopic Bankart repair with suture anchors. It's been 18 months now; my shoulder feels rock-solid and I'm playing tournaments with zero fear of dislocation!",
      patient: "Praveen S., 24 yrs",
      procedure: "Arthroscopic Bankart Repair",
      rating: 5,
    },
  },

  "sports-trauma": {
    id: "sports-trauma",
    slug: "sports-trauma",
    navTitle: "Fractures & Sports Trauma",
    heroTitle: "Fracture Management, Elbow Arthroscopy & Orthobiologics (PRP)",
    heroSubtitle: "Minimally invasive fracture fixation (MIPO), elbow joint preservation, tennis elbow release, and autologous PRP cellular healing by Dr. Shashikumar M S in Mysuru.",
    badge: "FRACTURES, ELBOW CARE & ORTHOBIOLOGICS",
    image: `${BASE}/assets/images/trauma-fracture-clean.jpg`,
    clinicalSummary: "Musculoskeletal trauma ranges from acute road accident fractures to repetitive athletic strain like tennis elbow. Dr. Shashikumar M S provides comprehensive emergency fracture fixation combined with advanced regenerative medicine (PRP) and elbow arthroscopy.",

    // Quick Metrics
    metrics: [
      { value: "3,000+", label: "Fractures & Trauma Treated" },
      { value: "99.5%", label: "Bone Union Rate" },
      { value: "MIPO", label: "Minimally Invasive Biological Fixation" },
      { value: "PRP", label: "Autologous Cellular Joint Therapy" },
    ],

    // Symptoms Checklist
    symptoms: [
      { title: "Sudden Severe Pain After Fall / Accident", desc: "Immediate, intense pain accompanied by rapid localized swelling and bruising." },
      { title: "Visible Bone Deformity or Crepitus", desc: "Abnormal angulation, bone grinding sound, or inability to bear weight on the limb." },
      { title: "Chronic Outer Elbow Pain (Tennis Elbow)", desc: "Burning pain on the outside of the elbow radiating down the forearm when gripping or lifting." },
      { title: "Inner Elbow Tenderness (Golfer's Elbow)", desc: "Sharp tenderness on the medial elbow epicondyle when flexing the wrist or twisting." },
      { title: "Elbow Joint Locking or Stiffness", desc: "Loose bodies or bone spurs inside the elbow joint restricting full straightening or bending." },
      { title: "Early Osteoarthritis Joint Aching", desc: "Persistent dull aching and stiffness in knees, ankles, or shoulders seeking non-surgical relief." },
    ],

    // Comprehensive Procedures List
    procedures: [
      {
        id: "mipo-fracture-fixation",
        title: "Minimally Invasive Plate Osteosynthesis (MIPO)",
        category: "Trauma Fixation",
        badge: "Biological Fixation",
        shortDesc: "Fixing long-bone fractures through small incisions without disrupting biological bone blood supply.",
        details: "Traditional open fracture surgery requires large incisions that strip the periosteal blood supply, increasing risks of infection and non-union. In MIPO, Dr. Shashi tunnels titanium anatomical locking plates beneath soft tissues through tiny cosmetic incisions, guided by fluoroscopic C-arm imaging. This protects natural fracture hematoma and accelerates bone union.",
        indications: "Complex fractures of femur, tibia, humerus, and radius-ulna.",
        technique: "Bridge plate osteosynthesis, percutaneous locking screw insertion, preservation of fracture biology.",
        recovery: "Early adjacent joint mobilization from Day 2; progressive partial weight-bearing guided by callus formation on X-ray.",
      },
      {
        id: "intra-articular-fractures",
        title: "Intra-Articular Joint Surface Reconstruction",
        category: "Articular Trauma",
        badge: "Post-Traumatic Prevention",
        shortDesc: "Anatomical sub-millimeter restoration of fractured joint surfaces (knee tibial plateau, elbow, ankle, wrist).",
        details: "When a fracture extends into a joint surface, even a 1 mm step-off leads to rapid post-traumatic arthritis. Dr. Shashi combines fluoroscopy with arthroscopic visualization to elevate depressed articular fragments and stabilize them rigidly with subchondral locking screws.",
        indications: "Tibial plateau fractures, distal radius fractures, pilon ankle fractures, distal humerus fractures.",
        technique: "Arthroscopy-assisted fracture reduction and internal fixation (ARIF), bone grafting.",
        recovery: "Immediate passive joint movement to prevent stiffness; strict non-weight-bearing for 6-8 weeks until articular bone consolidates.",
      },
      {
        id: "elbow-arthroscopy",
        title: "Elbow Arthroscopy & Loose Body Removal",
        category: "Elbow Keyhole Care",
        badge: "Precision Keyhole",
        shortDesc: "Sub-centimeter keyhole extraction of loose fragments, spur debridement, and capsular release for elbow contractures.",
        details: "The elbow is a compact joint with vulnerable neurovascular structures passing within millimeters. Fellowship-trained in arthroscopy, Dr. Shashi uses miniature 2.7 mm arthroscopes and specialized portals to remove painful bone spurs, extract locking loose bodies, and treat osteochondritis dissecans (OCD) without large incisions.",
        indications: "Elbow joint locking, chronic stiffness after old trauma, impingement bone spurs in throwers.",
        technique: "High-precision anterior and posterior elbow arthroscopic portal placement, radiofrequency debridement.",
        recovery: "Immediate active flexion and extension exercises starting Day 1; return to daily work within 1-2 weeks.",
      },
      {
        id: "tennis-golfers-elbow",
        title: "Tennis & Golfer's Elbow Surgical & Biologic Release",
        category: "Tendonitis Care",
        badge: "PRP & Micro-Release",
        shortDesc: "Ultrasound-guided PRP infiltration or minimally invasive micro-release of degenerate extensor/flexor tendon origins.",
        details: "Chronic lateral epicondylitis (tennis elbow) results from microscopic micro-tears in the ECRB tendon. Over 90% heal with Dr. Shashi's ultrasound-guided high-concentration autologous PRP injection protocol. For refractory cases lasting over 6 months, a 1-centimeter micro-release removes diseased degenerate angiofibroblastic tissue, curing the pain definitively.",
        indications: "Severe chronic tennis elbow or golfer's elbow refractory to medication and physiotherapy.",
        technique: "High-concentration buffy-coat PRP infiltration or minimally invasive Nirschl micro-release.",
        recovery: "Rest from heavy gripping for 1-2 weeks; progressive eccentric forearm strengthening; full painless grip restored by 4-6 weeks.",
      },
      {
        id: "orthobiologics-prp",
        title: "Autologous Platelet-Rich Plasma (PRP) Therapy",
        category: "Regenerative Medicine",
        badge: "Biological Healing",
        shortDesc: "Harnessing your body's own concentrated growth factors to stimulate cartilage, ligament, and tendon healing.",
        details: "Platelet-Rich Plasma (PRP) is prepared from a small sample of the patient's own blood spun in a specialized centrifuge to concentrate platelets up to 5-8 times baseline. Platelets release transforming growth factors (TGF-beta, PDGF, VEGF) that stimulate tissue repair and suppress joint inflammation, deferring major surgery in early osteoarthritis and tendon injuries.",
        indications: "Grade 1-2 knee osteoarthritis, patellar tendonitis, partial rotator cuff tears, plantar fasciitis, tennis elbow.",
        technique: "Sterile autologous blood harvest, double-spin centrifugation, ultrasound-guided precision intra-articular infiltration.",
        recovery: "Mild joint heaviness for 24-48 hours; progressive symptomatic relief and functional improvement across 4-12 weeks.",
      },
      {
        id: "conservative-pop-casting",
        title: "Conservative Plaster of Paris (POP) & Splinting",
        category: "Non-Surgical Trauma",
        badge: "Surgery Avoidance",
        shortDesc: "Precise closed reduction and lightweight fiberglass/POP casting for stable, non-displaced fractures.",
        details: "Not all fractures require surgery. Whenever bones are in acceptable alignment and inherently stable, Dr. Shashi performs gentle closed reduction and applies anatomically molded Plaster of Paris (POP) or modern water-resistant fiberglass splints, monitoring union through interval digital X-rays.",
        indications: "Non-displaced wrist fractures, clavicle fractures, pediatric buckle/greenstick fractures, stable ankle sprains.",
        technique: "Anatomical three-point molding, well-padded protective cast application, early digit mobilization.",
        recovery: "Cast worn for 4-6 weeks depending on age and fracture site; structured physiotherapy following cast removal.",
      },
    ],

    // Treatment Matrix
    approaches: [
      {
        tier: "Conservative Fracture Care",
        title: "Closed Reduction & POP Casting",
        desc: "Molded fiberglass and POP casts preserve natural fracture biology and avoid surgery whenever alignment is safe and stable.",
        points: ["Avoids surgical incisions and implants", "Interval digital X-ray monitoring", "Early finger and toe active movement"],
      },
      {
        tier: "Orthobiologics (PRP)",
        title: "Cellular Healing & Joint Preservation",
        desc: "Concentrated autologous growth factors stimulate natural tissue repair in early arthritis, tennis elbow, and chronic tendonitis.",
        points: ["Prepared from patient's own blood (zero rejection risk)", "Ultrasound-guided targeted joint infiltration", "Suppresses chronic inflammatory degradation"],
      },
      {
        tier: "Minimally Invasive MIPO",
        title: "Biological Locking Plate Fixation",
        desc: "Percutaneous bridge plating through tiny incisions preserves bone vascularity and results in rapid fracture union.",
        points: ["Minimizes infection and wound breakdown", "Rigid anatomical locking screw stability", "Immediate adjacent joint physical therapy"],
      },
    ],

    // Recovery Timeline
    recoveryTimeline: [
      { phase: "Week 0 – 2", title: "Acute Healing & Protection", desc: "Elevation, ice, wound care, active movement of uninjured joints (fingers/toes), pain control." },
      { phase: "Week 2 – 6", title: "Callus Formation & ROM", desc: "Suture removal; initial soft callus visible on X-ray; active-assisted range of motion begun." },
      { phase: "Week 6 – 12", title: "Bridging Bone & Loading", desc: "Hard bony callus union confirmed; progressive full weight-bearing; progressive resistance training." },
      { phase: "Month 3 – 6+", title: "Full Bone Consolidation", desc: "Complete cortical remodeling; unrestricted return to heavy labor, athletic sports, and impact activities." },
    ],

    // FAQs
    faqs: [
      { q: "What is PRP therapy and is it safe?", a: "PRP (Platelet-Rich Plasma) uses your own concentrated blood platelets containing powerful healing growth factors. Because it is 100% autologous (from your own body), there is zero risk of allergic reaction, transmissible infection, or rejection." },
      { q: "How do I know if a fracture needs surgery or just a plaster cast?", a: "Non-displaced and stable fractures where bone ends touch nicely can be safely treated with a plaster cast. Surgery is needed if the fracture is displaced, unstable, enters a joint surface (intra-articular), or if the skin is broken (open fracture)." },
      { q: "How successful is tennis elbow treatment with PRP?", a: "Clinical studies and our practice outcomes demonstrate that over 85-90% of chronic tennis elbow cases achieve long-lasting pain relief and restored grip strength after 1 to 2 PRP sessions without needing surgery." },
    ],

    // Testimonial
    testimonial: {
      quote: "I suffered a severe compound tibia fracture in a motorcycle accident. Dr. Shashikumar performed minimally invasive MIPO plating. Within 3 months the bone healed completely with a tiny scar and no limp whatsoever. Highly grateful for his expertise!",
      patient: "Siddesh N., 34 yrs",
      procedure: "Minimally Invasive MIPO Tibia Fixation",
      rating: 5,
    },
  },
};
