import heroTyreInflator from '../assets/images/hero-tyre-inflator.jpg'
import heroNitrogen from '../assets/images/hero-nitrogen.jpg'
import heroGovernment from '../assets/images/hero-government.jpg'
import heroEngineers from '../assets/images/hero-engineers.jpg'
import heroCalibration from '../assets/images/hero-calibration.jpg'
import productDi3000 from '../assets/images/product-di-3000.jpg'
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
    description:
      'High-accuracy digital tyre inflator designed for fuel stations and automotive workshops.',
    image: productDi3000,
    specs: [
      { label: 'Pressure Range', value: '0–150 PSI' },
      { label: 'Accuracy', value: '±1 PSI' },
      { label: 'Display', value: 'LED / LCD Backlit' },
      { label: 'Power', value: '230V AC, 50 Hz' },
      { label: 'Hose Length', value: '8 meters' },
      { label: 'System', value: 'Microcontroller Based Auto Sensing' },
      { label: 'Mounting', value: 'Floor Standing' },
    ],
  },
  {
    id: 'n2-2100',
    name: 'Nitrogen Tyre Inflator',
    model: 'N2-2100',
    description:
      'High-purity nitrogen tyre inflation system for fuel stations and automotive workshops.',
    image: '/src/assets/images/product-wm-2100.jpg',
    specs: [
      { label: 'Purity', value: 'Up to 95–99%' },
      { label: 'Pressure Range', value: '0–120 PSI' },
      { label: 'Accuracy', value: '±1 PSI' },
      { label: 'Display', value: 'Backlit Digital Display' },
      { label: 'Power', value: '230V AC' },
      { label: 'Hose Length', value: '10 meters' },
      { label: 'Installation', value: 'Floor Standing' },
    ],
  },
  {
    id: 'ac-500',
    name: 'Automatic Air Compressor',
    model: 'AC-500',
    description:
      'Heavy-duty automatic air compressor built for continuous industrial and automotive use.',
    image: productAc500,
    specs: [
      { label: 'Tank Capacity', value: '200 Liters' },
      { label: 'Motor Power', value: '3 HP / 2.2 kW' },
      { label: 'Max Pressure', value: '150 PSI' },
      { label: 'Airflow', value: '250 LPM' },
      { label: 'Power Supply', value: '230V AC / 50 Hz' },
      { label: 'Stage', value: 'Single Stage' },
      { label: 'Weight', value: '85 kg' },
    ],
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
  { name: 'Udyam Registered', description: 'Registered under Udyam, Ministry of MSME, Government of India. (Please confirm this label.)', logo: emblemLogo },
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
