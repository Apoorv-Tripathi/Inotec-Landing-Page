import heroTyreInflator from '../assets/images/hero-tyre-inflator.jpg'
import heroNitrogen from '../assets/images/hero-nitrogen.jpg'
import heroGovernment from '../assets/images/hero-government.jpg'
import heroEngineers from '../assets/images/hero-engineers.jpg'
import heroCalibration from '../assets/images/hero-calibration.jpg'
import productDi3000 from '../assets/images/product-di-3000.jpg'
import productWm2100 from '../assets/images/product-wm-2100.jpg'
import productAc500 from '../assets/images/product-ac-500.jpg'
import aboutFacility from '../assets/images/about-facility.jpg'
import gallery01 from '../assets/images/gallery-01.jpg'
import gallery02 from '../assets/images/gallery-02.jpg'
import gallery03 from '../assets/images/gallery-03.jpg'
import gallery04 from '../assets/images/gallery-04.jpg'
import gallery05 from '../assets/images/gallery-05.jpg'
import gallery06 from '../assets/images/gallery-06.jpg'

import isoLogo from '../assets/certs/iso.png'
import emblemLogo from '../assets/certs/emblem.png'
import gemLogo from '../assets/certs/gem.png'
import msmeLogo from '../assets/certs/msme.png'
import nablLogo from '../assets/certs/nabl.png'

export const company = {
  name: 'INOTEC',
  fullName: 'INOTEC – Inovative Technologies International Pvt. Ltd.',
  shortLegal: 'INT PVT LTD',
  founded: 2018,
  address: {
    line1: 'Plot No. 822, Sector-F',
    line2: 'Gujaini, Udyog Nagar, Kanpur',
    line3: 'Uttar Pradesh, India 208022',
  },
  phones: {
    sales: '+91-9453245747',
    service: '+91-9453283173',
    calibration: '+91-9453283173',
    whatsapp: '+919453245747',
  },
  email: 'support@inotec.co.in',
  website: 'www.inotec.co.in',
  hours: [
    { label: 'Monday – Friday', value: '9:00 AM – 6:00 PM' },
    { label: 'Saturday', value: '9:00 AM – 1:00 PM' },
    { label: 'Emergency Support', value: '24/7' },
  ],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const heroSlides = [
  {
    id: 1,
    eyebrow: 'ISO 9001:2015 Certified Excellence',
    title: 'Advanced Industrial Air Solutions',
    description:
      'INOTEC delivers advanced air solutions, nitrogen systems, and industrial equipment engineered for reliable performance — backed by ISO 9001:2015 certification.',
    image: heroTyreInflator,
    imageAlt: 'Digital tyre inflator machine installed at a fuel station',
  },
  {
    id: 2,
    eyebrow: 'Precision Engineering',
    title: 'Nitrogen Filling Systems Built to Last',
    description:
      'High-purity nitrogen air filling machines engineered for automotive workshops and fuel stations, with dependable long-term performance.',
    image: heroNitrogen,
    imageAlt: 'Nitrogen air filling machine in an automotive workshop',
  },
  {
    id: 3,
    eyebrow: 'Government Certified Contractor',
    title: 'Trusted by IOCL and Indian Railways',
    description:
      'A proven engineering partner on national infrastructure — supplying and maintaining equipment for Indian Oil Corporation and Indian Railways projects.',
    image: heroGovernment,
    imageAlt: 'INOTEC installation at an Indian Oil Corporation fuel station',
  },
  {
    id: 4,
    eyebrow: '1000+ Installations',
    title: 'End-to-End Installation & Field Support',
    description:
      'From site survey to commissioning, our engineers deliver complete installation and after-sales support across India.',
    image: heroEngineers,
    imageAlt: 'INOTEC engineers commissioning industrial equipment on site',
  },
  {
    id: 5,
    eyebrow: 'NABL Accredited Lab',
    title: 'Certified Calibration You Can Trace',
    description:
      'On-site and lab calibration with documented accuracy, uncertainty reporting, and full traceability — NABL accredited.',
    image: heroCalibration,
    imageAlt: 'Calibration certificate and precision measurement equipment',
  },
]

export const whatWeDo = [
  {
    title: 'Digital Tyre Inflators',
    description: 'Microcontroller-based automatic tyre inflation systems for fuel stations and workshops.',
    icon: 'gauge',
  },
  {
    title: 'Nitrogen Systems',
    description: 'High-purity nitrogen generation and filling equipment for automotive tyre care.',
    icon: 'droplet',
  },
  {
    title: 'Air Compressors',
    description: 'Heavy-duty compressors engineered for continuous industrial and automotive duty cycles.',
    icon: 'compressor',
  },
  {
    title: 'Installation',
    description: 'Complete site survey, setup and commissioning carried out by our field engineering team.',
    icon: 'install',
  },
  {
    title: 'Maintenance',
    description: 'Scheduled preventive maintenance to keep equipment running at rated performance.',
    icon: 'wrench',
  },
  {
    title: 'AMC Support',
    description: 'Annual Maintenance Contracts with priority response and genuine spare parts.',
    icon: 'contract',
  },
  {
    title: 'Government Projects',
    description: 'Engineering solutions delivered and maintained for IOCL and Indian Railways installations.',
    icon: 'flag',
  },
]

export const products = [
  {
    id: 'di-3000',
    name: 'Digital Tyre Inflator',
    model: 'DI-3000',
    category: 'tyre-inflator',
    categoryLabel: 'Tyre Inflators',
    badge: 'Industry Standard',
    description:
      'High-accuracy digital tyre inflator designed for fuel stations, fleet yards, and modern automotive workshops.',
    image: productDi3000,
    specs: [
      { label: 'Pressure Range', value: '0–150 PSI (0–10.3 BAR)' },
      { label: 'Accuracy', value: '±1 PSI (±0.07 BAR)' },
      { label: 'Display', value: 'LED / LCD Backlit Dual Readout' },
      { label: 'Power', value: '230V AC ±10%, 50 Hz' },
      { label: 'Hose Length', value: '8 meters wire-braided' },
      { label: 'System', value: 'Microcontroller Auto-Sensing' },
      { label: 'Mounting', value: 'Heavy Floor Standing / Pillar' },
    ],
    technicalSheet: {
      electrical: '230V AC ± 10%, 50 Hz, Single Phase (Surge Protected SMPS)',
      operatingPressure: '0 – 150 PSI (0 – 10.3 BAR / 0 – 1034 kPa)',
      accuracy: '±1 PSI (±0.07 BAR) full scale repeatability',
      sensor: 'High-stability ceramic piezo-resistive transducer with auto zero-drift logic',
      inletPressure: 'Minimum 10 PSI above target delivery; Max inlet 175 PSI',
      inletFittings: '1/4" BSP Female union with integrated 40-micron particulate filter',
      hoseSpecification: '8-meter heavy-duty braided wire polyurethane hose with dual clip-on chuck',
      enclosure: '1.6mm CRCA Sheet Steel, 7-tank chemical pre-treatment, RAL 7021 electrostatic powder coat',
      protectionClass: 'IP54 dust, moisture and splash resistant enclosure',
      operatingTemp: '-10°C to +55°C (14°F to 131°F)',
      metrologyStandard: 'Weights & Measures / Legal Metrology Act compliant, NABL laboratory calibration traceable',
      warranty: '12 Months Comprehensive OEM Warranty with optional on-site AMC',
    },
  },
  {
    id: 'n2-2100',
    name: 'Nitrogen Tyre Inflator',
    model: 'N2-2100',
    category: 'nitrogen',
    categoryLabel: 'Nitrogen Systems',
    badge: 'High Demand',
    description:
      'High-purity nitrogen tyre inflation generator for retail fuel stations, commercial tyres, and premium tyre care centres.',
    image: productWm2100,
    specs: [
      { label: 'Purity', value: 'Up to 95–99% N2 Purity' },
      { label: 'Pressure Range', value: '0–120 PSI (0–8.3 BAR)' },
      { label: 'Accuracy', value: '±1 PSI' },
      { label: 'Display', value: 'Backlit Digital Display' },
      { label: 'Power', value: '230V AC, 50 Hz' },
      { label: 'Hose Length', value: '10 meters dual line' },
      { label: 'Installation', value: 'Heavy Floor Standing with Internal Tank' },
    ],
    technicalSheet: {
      electrical: '230V AC ± 10%, 50 Hz, Single Phase (Consumption < 60W)',
      operatingPressure: '0 – 120 PSI (0 – 8.3 BAR)',
      nitrogenPurity: '95% to 99% PSA (Pressure Swing Adsorption) Molecular Sieve Technology',
      nitrogenOutput: '50 – 70 LPM @ 10 BAR input air supply',
      internalStorage: 'Heavy-duty 50L internal nitrogen buffer storage vessel',
      sensor: 'Solid-state digital pressure transducer with automated vacuum evacuation cycle',
      inletRequirements: 'Clean dry compressed air, 120–145 PSI input',
      hoseSpecification: '10-meter twin air/nitrogen reinforced hose with heavy-duty brass chucks',
      enclosure: '1.6mm CRCA Sheet Steel cabinet with lockable service door and ventilation louvers',
      protectionClass: 'IP54 rated weather-resistant enclosure for semi-covered forecourts',
      operatingTemp: '-10°C to +55°C',
      metrologyStandard: 'Calibrated with NABL traceable master reference gauges',
      warranty: '12 Months Comprehensive OEM Warranty with annual sieve maintenance support',
    },
  },
  {
    id: 'ac-500',
    name: 'Automatic Air Compressor',
    model: 'AC-500',
    category: 'compressor',
    categoryLabel: 'Air Compressors',
    badge: 'Heavy Duty',
    description:
      'Heavy-duty industrial automatic air compressor built for uninterrupted industrial, automotive, and continuous pneumatic cycles.',
    image: productAc500,
    specs: [
      { label: 'Tank Capacity', value: '200 Liters (Hydro-Tested)' },
      { label: 'Motor Power', value: '3 HP / 2.2 kW Heavy-Duty' },
      { label: 'Max Pressure', value: '150 PSI (10.3 BAR)' },
      { label: 'Airflow', value: '250 LPM (8.8 CFM)' },
      { label: 'Power Supply', value: '230V AC / 415V 3-Phase Option' },
      { label: 'Stage', value: 'Single Stage Precision Cast-Iron' },
      { label: 'Weight', value: '85 kg dry weight' },
    ],
    technicalSheet: {
      electrical: '230V AC / 415V 3-Phase 50 Hz options with thermal overload starter',
      motorRating: '3.0 HP (2.2 kW) 100% copper wound continuous duty induction motor',
      tankVolume: '200 Litre air receiver, hydro-tested to 1.5x working pressure as per IS standards',
      operatingPressure: 'Cut-in 100 PSI / Cut-out 150 PSI (automated pressure switch control)',
      displacement: '250 LPM (8.8 CFM) free air delivery',
      pumpConstruction: 'Deep-finned cast iron crankcase and cylinder with splash oil lubrication',
      safetyValves: 'Spring-loaded ASME-certified safety relief valve + unloader check valve',
      airDischarge: '1/2" ball valve with automatic moisture condensation purge port',
      noiseLevel: '< 74 dB(A) at 1 metre distance',
      protectionClass: 'IP55 motor protection class (Totally Enclosed Fan Cooled)',
      operatingTemp: '0°C to +50°C continuous ambient rating',
      warranty: '12 Months Comprehensive OEM Warranty on pump and air receiver tank',
    },
  },
]

export const whyChooseUs = [
  { title: 'Engineering Excellence', description: 'Products designed and tested to consistent, repeatable performance standards.' },
  { title: 'Certified Team', description: 'Experienced engineers and technicians specialised in air systems and calibration.' },
  { title: 'Government Approved', description: 'Registered vendor delivering to IOCL and Indian Railways specifications.' },
  { title: 'Quality Products', description: 'ISO 9001:2015 certified manufacturing and quality processes throughout.' },
  { title: 'Reliable Support', description: 'Dedicated service and sales lines with defined response commitments.' },
  { title: 'Affordable Maintenance', description: 'AMC plans structured around uptime, not just call-outs.' },
  { title: 'Fast Installation', description: 'Field teams that handle survey, install and commissioning end to end.' },
]

export const governmentProjects = [
  {
    name: 'Indian Oil Corporation Limited',
    short: 'IOCL',
    description: 'Certified, trusted contractor for mechanical fabrication and related engineering works at IOCL bottling plants.',
  },
  {
    name: 'Indian Railways',
    short: 'Indian Railways',
    description: 'Certified, trusted contractor for mechanical fabrication and related engineering works for Indian Railways.',
  },
  {
    name: 'IOCL · BPCL · HPCL',
    short: 'Oil PSU Petrol Pumps',
    description: 'Certified supplier of air compressors and nitrogen tyre-inflation machines to IOCL, BPCL and HPCL petrol pumps nationwide.',
  },
]

export const certifications = [
  { name: 'ISO 9001:2015', description: 'Certified quality management system.', logo: isoLogo },
  { name: 'Udyam Registered', description: 'Registered under Udyam, Ministry of MSME, Government of India.', logo: emblemLogo },
  { name: 'MSME Business Forum', description: 'Registered member of the MSME Business Forum.', logo: msmeLogo },
  { name: 'GeM Registered', description: 'Approved vendor on the Government e-Marketplace.', logo: gemLogo },
  { name: 'NABL Accredited', description: 'ISO/IEC 17025 accredited by the National Accreditation Board for Testing and Calibration Laboratories.', logo: nablLogo },
]

export const process = [
  { step: '01', title: 'Consultation', description: 'Understanding your site, usage pattern and technical requirement.' },
  { step: '02', title: 'Requirement Analysis', description: 'Matching equipment specification to load, footfall and space.' },
  { step: '03', title: 'Planning', description: 'Site layout, power and plumbing plan agreed before dispatch.' },
  { step: '04', title: 'Installation', description: 'On-site setup and commissioning by INOTEC field engineers.' },
  { step: '05', title: 'Testing', description: 'Functional and safety testing against rated specification.' },
  { step: '06', title: 'Maintenance', description: 'Scheduled AMC visits and calibration to sustain performance.' },
]

export const stats = [
  { value: 7, suffix: '+', label: 'Years of Experience' },
  { value: 1000, suffix: '+', label: 'Machines Installed' },
  { value: 2, suffix: '', label: 'Government Projects' },
  { value: 24, suffix: '/7', label: 'Emergency Support' },
]

export const galleryImages = [
  { src: gallery01, alt: 'Digital tyre inflator on the workshop floor' },
  { src: gallery02, alt: 'Petrol pump installation with INOTEC equipment' },
  { src: gallery03, alt: 'Field engineer servicing an air compressor' },
  { src: gallery04, alt: 'Nitrogen inflation station at a fuel outlet' },
  { src: gallery05, alt: 'ISO and NABL certificates on display' },
  { src: gallery06, alt: 'INOTEC engineering office facility' },
]

export const testimonials = [
  {
    quote: 'Installation was completed on schedule and the AMC team has been responsive on every service call.',
    name: 'Fleet Workshop Manager',
    role: 'Automotive Service Centre, Kanpur',
  },
  {
    quote: 'Calibration reports are thorough and traceable, which makes our audits straightforward.',
    name: 'Quality Coordinator',
    role: 'Fuel Retail Outlet',
  },
  {
    quote: 'Equipment has run with minimal downtime since commissioning. Support responds within hours.',
    name: 'Site Engineer',
    role: 'Industrial Client',
  },
]

export const contactSubjects = [
  'Sales Enquiry',
  'Service Request',
  'AMC Enquiry',
  'Calibration Request',
  'General Enquiry',
]

export const productCategories = [
  { id: 'all', label: 'All Equipment' },
  { id: 'tyre-inflator', label: 'Tyre Inflators' },
  { id: 'nitrogen', label: 'Nitrogen Systems' },
  { id: 'compressor', label: 'Air Compressors' },
]

export const procurementDetails = {
  legalName: 'Inovative Technologies International Pvt. Ltd.',
  brandName: 'INOTEC',
  founded: '2018',
  msmeType: 'Micro & Small Enterprise (Udyam Registered, Govt. of India)',
  udyamRegistration: 'UDYAM-UP-43-0014298',
  qualityStandard: 'ISO 9001:2015 Quality Management System',
  calibrationAccreditation: 'ISO/IEC 17025 Accredited Calibration Laboratory (NABL)',
  gemStatus: 'Approved OEM & Vendor on Government e-Marketplace (GeM)',
  factoryAddress: 'Plot No. 822, Sector-F, Gujaini, Udyog Nagar, Kanpur, Uttar Pradesh, India - 208022',
  phoneHotline: '+91-9453245747 / +91-9453283173',
  email: 'support@inotec.co.in',
}

export const faqs = [
  {
    id: 'faq-1',
    category: 'Metrology & Calibration',
    question: 'How frequently is calibration required for commercial tyre inflators in India?',
    answer:
      'Under the Legal Metrology (Weights & Measures) Act and Department rules, commercial tyre inflators deployed at fuel retail outlets (IOCL, HPCL, BPCL), commercial automotive workshops, and tyre shops must undergo annual periodic calibration and verification. INOTEC provides NABL-traceable calibration with comprehensive uncertainty analysis and certification accepted during statutory audits.',
  },
  {
    id: 'faq-2',
    category: 'Electrical & Reliability',
    question: 'Can INOTEC digital machines operate reliably on voltage fluctuations or generator backup?',
    answer:
      'Yes. All INOTEC digital tyre inflators and nitrogen units feature wide-input Switch Mode Power Supplies (180V – 260V AC) with industrial Metal Oxide Varistor (MOV) surge protection. An integrated non-volatile EEPROM preserves target setpoints, calibration parameters, and cycle counts during sudden power cuts or diesel generator switchovers.',
  },
  {
    id: 'faq-3',
    category: 'AMC & Service',
    question: 'What is covered under INOTEC Annual Maintenance Contracts (AMC)?',
    answer:
      'Our comprehensive AMC agreements include scheduled quarterly preventive inspection visits, pressure transducer recalibration against master reference gauges, pneumatic filter & moisture drain servicing, priority breakdown response within 24 to 48 hours across major regions, and preferential pricing on genuine OEM replacement components.',
  },
  {
    id: 'faq-4',
    category: 'Nitrogen Technology',
    question: 'What nitrogen purity and output does the N2-2100 system deliver?',
    answer:
      'The N2-2100 utilizes Pressure Swing Adsorption (PSA) carbon molecular sieves, delivering continuous 95% to 99% nitrogen purity at up to 120 PSI. It includes an automated air-to-nitrogen evacuation and refill sequence, significantly lowering tyre oxidation, reducing tyre running temperatures, and stabilizing tyre pressure for highway and commercial vehicles.',
  },
  {
    id: 'faq-5',
    category: 'Turnkey & Piping',
    question: 'Do you offer turnkey engineering including compressed air line plumbing and moisture separation?',
    answer:
      'Yes. Our field engineering team delivers complete turnkey forecourt and workshop setups. We assess inlet line flow requirements, install aluminium or galvanised steel compressed air plumbing, mount particulate filters with automated condensate auto-drain valves, and conduct on-site commissioning and operator training.',
  },
  {
    id: 'faq-6',
    category: 'Government & Tender',
    question: 'Is INOTEC registered on the Government e-Marketplace (GeM)?',
    answer:
      'Yes. INOTEC (Inovative Technologies International Pvt. Ltd.) is an approved OEM registered on the Government e-Marketplace (GeM). Public sector undertakings, Indian Railways, defence establishments, and municipal bodies can directly issue purchase orders and tenders through GeM.',
  },
]
