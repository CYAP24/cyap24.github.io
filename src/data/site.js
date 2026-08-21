// ============================================================
// MGP site data. Content source of truth: content/homepage.md,
// content/reviews.md, PRODUCT.md.
// [CONFIRM] markers flag values the practice must verify before publishing.
// ============================================================

export const practice = {
  name: 'Manningham General Practice',
  short: 'MGP',
  phone: '(03) 8840 1400',
  phoneHref: 'tel:+61388401400',
  bookingUrl:
    'https://automedsystems.com.au/ams/clinics/1864/manningham-general-practice-lower-templestowe-3107/doctors/loc/2',
  address:
    'Street Level (Level 4), Manningham Medical Centre, 200 High Street, Lower Templestowe, VIC 3107',
  // Google listing is "Manningham General Practice" — a separate listing from
  // the Manningham Medical Centre building it sits in.
  mapQuery: 'Manningham General Practice, 200 High Street, Lower Templestowe VIC 3107',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Manningham+General+Practice+200+High+Street+Lower+Templestowe+VIC+3107',
  facebook: '#', // [CONFIRM] real Facebook URL
  rating: '4.6',
  reviewCount: '779',
};

export const hours = [
  { day: 'Monday – Friday', time: '8am – 8pm' },
  { day: 'Saturday', time: '9am – 5pm' },
  { day: 'Sunday', time: '9am – 1pm' },
];

// Section 3 — "What do you need today?" quick-access strip
export const quickAccess = [
  { label: 'Book an appointment', icon: 'iconoir:calendar-plus', href: 'BOOKING', desc: 'Online in about a minute' },
  { label: 'Same-day appointment', icon: 'iconoir:flash', href: '#hours', desc: 'Seen today where we can' },
  { label: 'Find a doctor by language', icon: 'iconoir:translate', href: '#doctors', desc: 'Care in your language' },
  { label: 'Fees & billing', icon: 'iconoir:wallet', href: '#billing', desc: 'Know before you visit' },
  // [CONFIRM] MyMedicare page slug and the practice's registration wording.
  { label: 'MyMedicare Registration', icon: 'iconoir:user-badge-check', href: '/mymedicare', desc: 'Register as your regular practice' },
];

// Section 5 — Why MGP
export const whyMgp = [
  {
    icon: 'iconoir:building',
    title: 'Everything in one building',
    body: 'Comprehensive health care for the whole family — GP, pathology, pharmacy and radiology under one roof.',
  },
  {
    icon: 'iconoir:half-moon',
    title: 'Same-day & after-hours',
    body: 'Comprehensive care seven days a week, including dedicated After Hours Care.',
  },
  {
    icon: 'iconoir:medal',
    title: 'Vocationally registered doctors',
    body: 'All tenant doctors are vocationally registered and undertake continuing medical education and quality assurance.',
  },
  {
    icon: 'iconoir:healthcare',
    title: 'Treated here, not just referred',
    body: 'Minor surgery, iron and Aclasta infusions and specialist clinics on site — more than a referral.',
  },
];

// Section 6 — Care in your language.
// Languages spoken across the named doctors (confirmed per-doctor mapping below),
// each with a standard greeting for the "languages spoken here" row.
export const languages = [
  { lang: 'Mandarin', hello: '你好' },
  { lang: 'Cantonese', hello: '你好' },
  { lang: 'Hindi', hello: 'नमस्ते' },
  { lang: 'Urdu', hello: 'السلام علیکم' },
  { lang: 'Farsi', hello: 'سلام' },
  { lang: 'Punjabi', hello: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ' },
  { lang: 'Indonesian', hello: 'Halo' },
  { lang: 'Malay', hello: 'Helo' },
  { lang: 'Yoruba', hello: 'Ẹ n lẹ' },
];

// Per-doctor spoken languages (client-confirmed). English-only doctors carry no
// language tag. [CONFIRM] roster count (copy says 25; 22 named), specialty,
// availability, and real photos (using doctor-placeholder.svg for now).
export const doctors = [
  { name: 'Dr Aida Karimpour', hello: 'سلام', langs: 'Farsi' },
  { name: 'Dr Aisha Ilango' },
  { name: 'Dr Amitabh Ilango', hello: 'नमस्ते', langs: 'Hindi' },
  { name: 'Dr Andrew Monk' },
  { name: 'Dr Bernie Crimmins' },
  { name: 'Dr Daisy Samuel' },
  { name: 'Dr Deeba Syeda', hello: 'नमस्ते', langs: 'Hindi & Urdu' },
  { name: 'Dr Elean To' },
  { name: 'Dr Jackson Lam', hello: '你好', langs: 'Cantonese & Mandarin' },
  { name: 'Dr Jimmy Lam', hello: '你好', langs: 'Cantonese & Mandarin' },
  // [ADD] no headshot supplied yet — falls back to the placeholder.
  { name: 'Dr Margaret Harris', photo: false },
  { name: 'Dr Mary Walsh' },
  { name: 'Dr Mohamed Rahman', hello: 'नमस्ते', langs: 'Hindi & Urdu' },
  { name: 'Dr Navid Nazarian', hello: 'سلام', langs: 'Farsi' },
  { name: 'Dr Novreen Rasool', hello: 'नमस्ते', langs: 'Hindi & Urdu' },
  { name: 'Dr Olubunmi Mabo', hello: 'Ẹ n lẹ', langs: 'Yoruba' },
  { name: 'Dr Param Khera', hello: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', langs: 'Punjabi' },
  { name: 'Dr Prashima Ilango' },
  { name: 'Dr Sarath Ran' },
  { name: 'Dr Shila Goh', hello: 'Halo', langs: 'Indonesian & Malay' },
  { name: 'Dr Sumathy Krishnaswamy', hello: 'नमस्ते', langs: 'Hindi' },
  { name: 'Dr Wenruo Han', hello: '你好', langs: 'Mandarin' },
];

// Section 7 — Services. [CONFIRM] hrefs must match existing page slugs for SEO.
// `img` points at /assets/services/<slug>.webp. [CONFIRM] these are generated
// placeholder photos — swap for real practice photography before publishing.
export const serviceGroups = [
  {
    icon: 'iconoir:group',
    title: 'Comprehensive services & procedures',
    accent: 'blue',
    note: 'Minor surgical procedures run under local anaesthetic in our on-site operating theatre — easy access and a quick return home or to work.',
    items: [
      { name: "Women's Health Checks", href: '/services/womens-health', icon: 'iconoir:female', img: 'womens-health' },
      { name: "Men's Health Checks", href: '/services/mens-health', icon: 'iconoir:male', img: 'mens-health' },
      { name: 'Immunisations', href: '/services/immunisations', icon: 'iconoir:shield-check', img: 'immunisations' },
      { name: 'Diabetes Clinic', href: '/services/diabetes-clinic', icon: 'iconoir:activity', img: 'diabetes-clinic' },
      { name: 'Quit Smoking', href: '/services/quit-smoking', icon: 'iconoir:prohibition', img: 'quit-smoking' },
      { name: 'Weight Management', href: '/services/weight-management', icon: 'iconoir:weight', img: 'weight-management' },
      { name: 'Minor Surgical Procedures', href: '/services/minor-surgery', icon: 'iconoir:healthcare', img: 'minor-surgery' },
      { name: 'Iron & Aclasta Infusions', href: '/services/infusions', icon: 'iconoir:droplet', img: 'infusions' },
    ],
  },
];

// Specialist clinics render as large solid-colour tiles led by their icon —
// a deliberate change of register from the photographic service cards.
export const specialistClinics = {
  title: 'Specialist clinics',
  items: [
    {
      name: 'Sexual Health Clinic',
      href: '/services/sexual-health',
      icon: 'iconoir:heart',
      tone: 'purple',
      body: 'Confidential services offered to 22-year-olds and under. STD tests for screening and diagnosis, sexual health counselling, Pap tests, contraceptives discussion, unplanned pregnancy counselling and advice.',
    },
    {
      name: 'The Travel Clinic',
      href: '/services/travel-clinic',
      icon: 'iconoir:airplane',
      tone: 'green',
      body: "Your doctors' goal is to reduce a traveller's risk of illness and injury during travel through preventative counselling, education, assessment of individual risk, medications and immunisations, as required. So you can have a safe and happy trip.",
    },
    {
      name: 'Fertility Assessment Clinic',
      href: '/services/fertility-assessment',
      icon: 'iconoir:flower',
      tone: 'pink',
      body: 'The doctors consulting from the MGP Fertility Assessment Clinic offer medical advice and assistance in preparation for pregnancy, and assessment and management of subfertility using Fertility Awareness Based Methods (FABMs).',
    },
    {
      name: 'Allied Health Services',
      href: '/services/allied-health',
      icon: 'iconoir:community',
      tone: 'orange',
      body: 'Manningham General Practice facilitates appointments with a Diabetes Educator, and a Pharmacist who does home visits and conducts a Home Medicine Review.',
    },
  ],
};

// Partner clinics render in their own layout — they are separate businesses
// inside the Centre and link out to their own booking sites.
export const partnerClinics = {
  title: 'Partner clinics in the Centre',
  note: 'Specialist partner clinics within the Manningham Medical Centre, with their own booking sites.',
  items: [
    { name: 'Skin Cancer Clinic', href: '#', icon: 'iconoir:sun-light', img: 'skin-cancer', blurb: 'Full skin checks, mole mapping and skin cancer treatment.' },
    { name: 'Arthritis, Fractures & Sports Injuries', href: '#', icon: 'iconoir:running', img: 'sports-injuries', blurb: 'Musculoskeletal and fracture care, and sports injury management.' },
  ],
};

// Section 9 — real Google reviews (content/reviews.md). Verbatim or trimmed,
// always attributed. Never fabricate or reassign a quote.
// The reviews carousel is data-driven: add an entry here and it appears.
export const reviews = [
  {
    name: 'Lachlan Brown',
    text: 'Excellent service at Manningham General Practice. They were able to efficiently help me with an allergic reaction at 7pm. Dr Ilango, the medical receptionist, the chemist and his assistant were all professional and excellent at their work. Thank you so much.',
  },
  {
    name: 'Bobby John',
    text: 'Dr Mohammad Rahmen treated my daughter after she had a bad reaction to a blood test. He was very knowledgeable and thorough. He had incredible bedside manner with my child and my family. At a time that was incredibly stressful for my family, he was kind, compassionate and very thoughtful.',
  },
  {
    name: 'Sri Sugirahayu',
    text: 'Excellent service from everyone at Manningham General Practice. The reception staff were friendly and helpful, and the person who performed my blood test was professional and caring. Dr Deeba Syeda was wonderful — she explained everything clearly and made me feel comfortable.',
  },
  {
    name: 'Ne G',
    text: 'I had an excellent experience with Dr Aida last week. She was highly responsive and truly took the time to listen carefully to all of my concerns. She gave a confident and accurate diagnosis and I really appreciated that she proactively followed up with my test results.',
  },
  {
    name: 'Maddalena Vaughan',
    text: 'I met with Dr Novreen Rasool today at the Manningham Skin Cancer Clinic. My experience at the clinic was pleasant and, more importantly, peace of mind at the end of my check. The receptionist was very informative with my enquiries prior to my appointment.',
  },
  {
    name: 'Roisin Muldoon',
    text: 'Dr Sarah Sun was friendly, very thorough and explained everything really well. I was impressed by her knowledge, professionalism and ability to make me feel reassured. I would highly recommend her to anyone needing a skin check.',
  },
  {
    name: 'Shirley Butler',
    text: 'First time I have visited this clinic and very impressed with everyone I spoke to. The Travel Doctor Mohammed was so pleasant and gave me lots of info about my travels. Melbourne Pathology were quick and very caring. I actually walked out of the clinic thinking what a nice experience it all was.',
  },
  // [ADD] two further real reviews to be supplied by the practice.
  {
    name: 'Reviewer name',
    text: 'Placeholder — real review text to be supplied by the practice.',
    placeholder: true,
  },
  {
    name: 'Reviewer name',
    text: 'Placeholder — real review text to be supplied by the practice.',
    placeholder: true,
  },
];

// Section 12 — footer navigation. [CONFIRM] hrefs must match existing slugs for SEO.
export const footerBlurb =
  'The doctors consulting from Manningham General Practice provide comprehensive care 7 days a week, including dedicated After Hours Care.';

export const afterHoursNote =
  'For After-Hours Medical Care for Eltham & Montmorency Clinics: if the clinic is closed and you require urgent medical attention, please call 000 and request an ambulance.';

export const footerNav = [
  {
    title: 'Discover',
    links: [
      { name: 'Our doctors', href: '#doctors' },
      { name: 'About us', href: '#about' },
      { name: 'Contact us', href: '#contact' },
      { name: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Opening times', href: '#hours' },
      { name: 'Billing & fees', href: '#billing' },
      { name: 'Patient Information', href: '/patient-information' },
      { name: 'MyMedicare', href: '/mymedicare' },
    ],
  },
  {
    title: 'Services',
    wide: true,
    links: [
      { name: 'The Travel Clinic', href: '/services/travel-clinic' },
      { name: 'Sexual Health Clinic', href: '/services/sexual-health' },
      { name: 'Fertility Assessment Clinic', href: '/services/fertility-assessment' },
      { name: 'Minor Surgical Procedures', href: '/services/minor-surgery' },
      { name: 'Musculoskeletal & Fracture Clinic', href: '/services/musculoskeletal' },
      { name: '45–49 Year Old Health Assessments', href: '/services/health-assessments-45-49' },
      { name: 'Flu & COVID Clinics', href: '/services/flu-covid' },
      { name: "Women's Health", href: '/services/womens-health' },
      { name: "Men's Health", href: '/services/mens-health' },
      { name: 'Diabetes Clinic', href: '/services/diabetes-clinic' },
      { name: 'Comprehensive Health Checks', href: '/services/health-checks' },
      { name: 'Immunisations', href: '/services/immunisations' },
      { name: 'Quit Smoking', href: '/services/quit-smoking' },
      { name: 'Weight Management Clinic', href: '/services/weight-management' },
      { name: 'Medical Centre', href: '/medical-centre' },
      { name: 'Weekend Medical Clinic', href: '/services/weekend-clinic' },
      { name: 'After Hours GP', href: '/services/after-hours' },
    ],
  },
];

// Legacy single-column footer list (kept for any other consumers).
export const footerLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Find a Doctor', href: '#doctors' },
  { name: 'Fees & Billing', href: '#billing' },
  { name: 'Patient Information', href: '/patient-information' },
  { name: 'Careers at MGP', href: '/careers' },
  { name: 'MyMedicare', href: '/mymedicare' },
  { name: 'Partners', href: '/partners' },
  { name: 'Privacy', href: '/privacy' },
];
