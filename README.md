# INOTEC — Industrial Air Solutions & Engineering Website

A modern, high-performance corporate web platform engineered for **INOTEC (Inovative Technologies International Pvt. Ltd.)**, one of India's leading manufacturers and service providers of automatic digital tyre inflators, nitrogen generation systems, and heavy-duty air compressors.

Built with **React 18** and **Vite**, the application combines a precision industrial engineering aesthetic with fast page loads, interactive technical utilities, and responsive design across smartphones, tablets, and desktop workstations.

---

## Executive Overview

INOTEC is an **ISO 9001:2015 certified** and **NABL accredited** engineering company serving government public sector undertakings (IOCL, HPCL, BPCL), Indian Railways, commercial fleet operators, automotive workshops, and retail fuel stations across India.

This web application serves as the primary digital interface for:
- Showcasing flagship industrial equipment with full engineering specifications.
- Generating commercial inquiries and technical service requests with automated pre-filled quote routing.
- Assisting workshop technicians and fleet managers with interactive pneumatic tools.
- Providing verified statutory credentials and compliance data for government e-Marketplace (GeM) and PSU tender procurement.

---

## Key Features

### 1. Equipment Catalog & Technical Data Sheets (TDS)
- **Categorized Equipment Explorer:** Filter products seamlessly between *Digital Tyre Inflators*, *Nitrogen Systems*, and *Industrial Air Compressors* with real-time model counts.
- **Interactive TDS Blueprint Modal:** Displays detailed engineering specifications for each machine (metrology parameters, electrical ratings, IP54 enclosure specs, and sensor technology) alongside an ink-saving print option (`@media print`).
- **Commercial Status Badges:** Quick identification of machine classes (`Industry Standard`, `High Demand`, `Heavy Duty`).

### 2. Workshop Pneumatic Pressure Converter
- An embedded drafting utility for workshop operators, technicians, and fleet managers.
- Live, bidirectional conversion across four pneumatic standards:
  - **PSI** (Pounds per Square Inch — Indian fuel station standard)
  - **BAR** (Atmospheric Metric — European automotive OEM standard)
  - **kPa** (Kilopascal — SI scientific metric)
  - **kg/cm²** (Kilograms per cm² — Traditional workshop gauge)
- One-tap quick presets for Passenger Cars (32 PSI), Loaded SUVs (36 PSI), Commercial Buses (100 PSI), and Heavy Trucks (120 PSI).

### 3. Government & PSU Tender Compliance Desk
- Designed specifically for institutional procurement officers and contractors issuing purchase orders (PO) or participating in GeM bids.
- Consolidates essential statutory data:
  - **Legal Entity:** Inovative Technologies International Pvt. Ltd.
  - **MSME Classification:** Udyam Registered Micro Enterprise (`UDYAM-UP-43-0014298`)
  - **Quality System:** ISO 9001:2015 Certified
  - **Calibration Scope:** ISO/IEC 17025 Accredited Laboratory (NABL Traceable)
  - **Public Procurement:** Approved OEM on Government e-Marketplace (GeM)
  - **Works & Testing Lab:** Gujaini, Udyog Nagar, Kanpur, UP - 208022
- **One-Click Clipboard Copy:** Instant formatting and copy-to-clipboard function for tender documentation.

### 4. Technical & Operational FAQ
- Accordion answering real-world operational and metrology concerns:
  - Annual periodic calibration cycles under the Indian Legal Metrology (Weights & Measures) Act.
  - Voltage fluctuation tolerance (180V–260V AC) and non-volatile EEPROM memory retention.
  - Comprehensive Annual Maintenance Contract (AMC) coverage and breakdown response times.
  - Nitrogen purity benchmarks (95% to 99% PSA molecular sieve).
  - Turnkey site installation, pipeline plumbing, and moisture separation.

### 5. Multi-Channel Lead Generation
- **Automated Quotation Flow:** Clicking *"Get Quote"* on any equipment card automatically scrolls to the contact section, selects "Sales Enquiry", and pre-fills the message with the exact model name.
- **Instant WhatsApp Integration:** One-tap direct messaging pre-configured with the specific equipment inquiry.
- **Direct Phone Dialers:** Click-to-call links for sales, AMC service, and calibration lab hotlines.

### 6. Mobile Ergonomics & Responsive Architecture
- **Persistent Mobile Quick Bar:** Fixed bottom bar on screens `<768px` for one-tap calling, WhatsApp messaging, and quote requests.
- **Non-Intrusive Back-to-Top:** Floating button appearing dynamically after 400px of scroll, positioned above the mobile bar to prevent touch collisions.
- **Field Installation Lightbox:** Click-to-enlarge gallery modal with keyboard navigation (`Escape` dismissal) and touch backdrop dismissal.
- **Fluid Layouts:** Rigorously tested across 320px (compact mobile), 390px (standard phone), 768px–1024px (tablets / iPads), and 1440px+ (desktop workstations) with zero horizontal overflow.

---

## Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 18](https://react.dev/) | Component architecture, state management, custom events |
| **Build Tool** | [Vite 5](https://vitejs.dev/) | Instant Hot Module Replacement (HMR) and optimized rollup production bundles |
| **Styling** | Modern Vanilla CSS | Custom design token architecture, blueprint grid motifs, zero framework bloat |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) | Feather/Heroicons (`react-icons/hi2`) & FontAwesome brand icons (`react-icons/fa`) |
| **Typography** | Manrope & Inter | Technical, high-legibility display and body typography |

---

## Project Structure

```text
inotec-public/
├── public/                 # Static web assets & favicon
├── src/
│   ├── assets/
│   │   ├── certs/          # Accreditation marks (ISO, NABL, GeM, MSME, Emblem)
│   │   └── images/         # High-resolution equipment & facility photography
│   ├── components/
│   │   ├── About.jsx               # Corporate history, facility, and core pillars
│   │   ├── BackToTop.jsx           # Floating scroll-to-top button
│   │   ├── Certifications.jsx      # Accreditation badges & Tender Compliance Desk
│   │   ├── Contact.jsx             # Contact details, interactive pre-fill quote form
│   │   ├── Faq.jsx                 # Technical & Metrology FAQ accordion
│   │   ├── Footer.jsx              # Comprehensive corporate footer with site links
│   │   ├── Gallery.jsx             # On-site photo gallery with interactive Lightbox
│   │   ├── GovernmentProjects.jsx  # IOCL, Indian Railways & Oil PSU credentials
│   │   ├── Hero.jsx                # Pause-on-hover carousel with manual chevrons
│   │   ├── MobileQuickBar.jsx      # Fixed mobile bottom contact bar
│   │   ├── Navbar.jsx              # Top trust ribbon + primary navigation header
│   │   ├── PneumaticConverter.jsx  # Interactive pressure converter (PSI/BAR/kPa)
│   │   ├── Process.jsx             # 6-step consultation to commissioning workflow
│   │   ├── Products.jsx            # Filterable product catalog & action cards
│   │   ├── SafeImage.jsx           # Resilient image loader with fallback states
│   │   ├── Stats.jsx               # Quantifiable business track record metrics
│   │   ├── TechnicalDataSheetModal.jsx # Full-spec engineering blueprint modal
│   │   ├── Testimonials.jsx        # Client reviews from retail and fleet operators
│   │   ├── WhatWeDo.jsx            # Core engineering capabilities grid
│   │   └── WhyChooseUs.jsx         # Key competitive differentiators
│   ├── data/
│   │   └── siteData.js             # Centralized source of truth for all content & specs
│   ├── hooks/
│   │   └── useReveal.js            # IntersectionObserver hook for subtle scroll reveals
│   ├── styles/
│   │   ├── components.css          # Modular component layout, cards, and modal styling
│   │   └── index.css               # Design tokens, typography, blueprint grid, print rules
│   ├── App.jsx                     # Root application container
│   └── main.jsx                    # Application entry point
├── index.html                      # HTML5 entry with metadata
├── package.json                    # Project metadata & dependencies
└── vite.config.js                  # Vite build configuration
```

---

## Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Apoorv-Tripathi/Inotec-Landing-Page.git
   cd Inotec-Landing-Page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Generate an optimized production build:
   ```bash
   npm run build
   ```
   The compiled production output will be generated in the `dist/` directory.

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## Content Customization

All text copy, product specifications, company contact numbers, warranty details, and FAQ items are strictly decoupled from the JSX presentation and maintained in a single configuration file:

```text
src/data/siteData.js
```

To update phone numbers, add new products, or modify certification details, simply update the corresponding exports (`company`, `products`, `certifications`, `faqs`, `procurementDetails`) without modifying the component logic.

---

## License & Attribution

&copy; 2018–2026 **INOTEC — Inovative Technologies International Pvt. Ltd.** All Rights Reserved.  
Registered Office: Plot No. 822, Sector-F, Gujaini, Udyog Nagar, Kanpur, Uttar Pradesh, India - 208022.
